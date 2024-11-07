'use client';

import React, { useContext } from 'react';
import createSchemaMarkup from '../../../helpers/createSchemaMarkup/createSchemaMarkup.helper';
import type { SchemaType } from './__types__/Schema.type';
import Script from 'next/script';
import { GlobalConfigContext } from '@/contexts/globalConfig.context';

const Schema = ({ contentType, conf }: SchemaType) => {
  const globalConfig = useContext(GlobalConfigContext);
  return (
    <Script
      type="application/ld+json"
      id={`schema-${contentType}`}
      dangerouslySetInnerHTML={createSchemaMarkup(
        contentType,
        globalConfig,
        conf,
      )}
    />
  );
};

export default Schema;
