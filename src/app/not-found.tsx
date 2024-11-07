'use client';

import ErrorMessageWrapper from '@/components/molecules/ErrorMessageWrapper/ErrorMessageWrapper';
import React, { useEffect, useState } from 'react';
import { createClient } from '@/prismicio';
import { AllDocumentTypes } from '../../prismicio-types';
import * as prismic from '@prismicio/client';
import PRISMIC_CUSTOM_TYPES from '@/app/lib/globalConfig/prismicCustomTypes.config';
import RenderSlices from '@/components/slices/RenderSlices/RenderSlices';
import get from 'lodash/get';
import Schema from '@/components/siteframes/Schema/Schema';
import Tracking from '@/components/siteframes/Tracking/Tracking';

export default function NotFound({
  error,
}: {
  error: Error & { digest?: string };
  reset?: () => void;
}) {
  const client = createClient();
  const [errorPage, setErrorPage] = useState<AllDocumentTypes | null>(null);
  const [defaultErrorPage, setDefaultErrorPage] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get({
          filters: [
            prismic.filter.at('document.tags', ['cassini']),
            prismic.filter.at('document.type', PRISMIC_CUSTOM_TYPES.page404),
          ],
          pageSize: 100,
        });
        if (response) {
          setErrorPage(response.results[0]);
        }
      } catch (error) {
        console.error(error);
        setDefaultErrorPage(true);
      }
    };
    fetchData();
  }, [error]);

  if (errorPage) {
    return (
      <>
        <RenderSlices slices={get(errorPage, 'data.body', undefined)!} />
        <Schema contentType={errorPage.type} conf={errorPage} />
        <Tracking contentType={errorPage.type} />
      </>
    );
  }

  if (defaultErrorPage) {
    return (
      <ErrorMessageWrapper>
        <h2>Leider ist etwas schiefgelaufen :(</h2>
        <h3>
          Laden Sie bitte die Seite neu oder kehren Sie bitte zur{' '}
          <a href="/">Startseite</a> zurück.
        </h3>
      </ErrorMessageWrapper>
    );
  }
}
