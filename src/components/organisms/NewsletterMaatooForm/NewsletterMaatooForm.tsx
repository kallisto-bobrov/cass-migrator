import React, { useContext } from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import Headline from '../../atoms/Headline/Headline';
import MaatooFormStyles from '../JobsMaatooForm/components/Styles.JobsMaatooForm';
import type { NewsletterMaatooFormType } from './__types__/NewsletterMaatooForm.type';
import CopyText from '../../atoms/CopyText/CopyText';
import Icon from '../../atoms/Icons/Icon';
import MaatooApplicationForm from './components/Form.NewsletterMaatooForm';
import mq from '@/styles/mediaQueries/mediaQueries';

const Wrapper = styled.div`
  ${MaatooFormStyles};

  margin: 0;
  padding: 40px 60px;
  max-width: 50%;

  @media (${mq.mdDown}) {
    max-width: 100%;
  }
`;

const HeadlineWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  svg {
    height: 25px;
    width: 25px;
    margin-right: 15px;
  }
`;

const FormWrapper = styled.div`
  margin: 0 0 35px;
`;

const CopyTextStyled = styled(CopyText)`
  margin: 0 0 35px;
`;

const NewsletterMaatooForm = ({
  headline,
  introText,
  labelName,
  labelFirstName,
  labelEmail,
  disclaimerText,
  finePrintText,
  cta,
}: NewsletterMaatooFormType) => {
  return (
    <Wrapper>
      {headline && (
        <HeadlineWrapper>
          <Icon icon="newsletter" />
          <Headline skin="headline700" type={get(headline, 'type', undefined)}>
            {headline[0]?.text}
          </Headline>
        </HeadlineWrapper>
      )}
      {introText && (
        <CopyText prismicRichText={introText} skin="copyStandard" />
      )}
      <FormWrapper>
        <MaatooApplicationForm
          labelName={labelName}
          labelFirstName={labelFirstName}
          labelEmail={labelEmail}
          cta={cta}
        />
      </FormWrapper>
      {disclaimerText && (
        <CopyTextStyled prismicRichText={disclaimerText} skin="copyStandard" />
      )}
      {finePrintText && (
        <CopyText prismicRichText={finePrintText} skin="copySmall" />
      )}
    </Wrapper>
  );
};

export default NewsletterMaatooForm;
