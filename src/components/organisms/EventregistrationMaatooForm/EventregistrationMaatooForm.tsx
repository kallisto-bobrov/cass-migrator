import React, { useContext } from 'react';
import styled from 'styled-components';
import MaatooFormStyles from '../JobsMaatooForm/components/Styles.JobsMaatooForm';
import CopyText from '../../atoms/CopyText/CopyText';
import Container from '../../grid/Container/Container';
import type { EventregistrationMaatooFormType } from './__types__/EventregistrationMaatooForm.type';
import MaatooApplicationForm from './components/Form.EventregistrationMaatooForm';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import { headline700skin } from '../../atoms/Headline/Headline.skins';

const Wrapper = styled.div`
  ${MaatooFormStyles};

  padding: 0;
  margin-bottom: 0;
`;

const ContainerStyled = styled(Container)`
  padding-top: 100px;
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

const StyledHeadline = styled.div<{ $skin?: string }>`
  ${(props) => props.$skin === 'headline700' && headline700skin}
`;

const CopyTextStyled = styled(CopyText)`
  margin-top: 35px;
`;

const EventregistrationMaatooForm = ({
  headline,
  introText,
  labelName,
  labelFirstName,
  labelCompany,
  labelJobtitle,
  labelPhone,
  labelRequest,
  labelEmail,
  firstDisclaimerText,
  secondDisclaimerText,
  thirdDisclaimerText,
  cta,
  eventId,
  formId,
  formName,
}: EventregistrationMaatooFormType) => {
  return (
    <Wrapper>
      <ContainerStyled>
        <Row>
          <Col
            colAmount={{
              xl: 6,
              lg: 6,
              md: 12,
              sm: 12,
              xs: 12,
            }}
            offset={{
              xl: 1,
              lg: 1,
              md: 0,
              sm: 0,
              xs: 0,
            }}
          >
            {headline && (
              <HeadlineWrapper>
                <StyledHeadline $skin="headline700">
                  {headline[0].text}
                </StyledHeadline>
              </HeadlineWrapper>
            )}
            {introText && (
              <CopyText prismicRichText={introText} skin="copyStandard" />
            )}
            <MaatooApplicationForm
              labelName={labelName}
              labelFirstName={labelFirstName}
              labelCompany={labelCompany}
              labelEmail={labelEmail}
              labelJobtitle={labelJobtitle}
              labelPhone={labelPhone}
              labelRequest={labelRequest}
              firstDisclaimerText={firstDisclaimerText}
              secondDisclaimerText={secondDisclaimerText}
              thirdDisclaimerText={thirdDisclaimerText}
              cta={cta}
              eventId={eventId}
              formId={formId}
              formName={formName}
            />
            <CopyTextStyled text="*Pflichtangaben" skin="copySmall" />
          </Col>
        </Row>
      </ContainerStyled>
    </Wrapper>
  );
};

export default EventregistrationMaatooForm;
