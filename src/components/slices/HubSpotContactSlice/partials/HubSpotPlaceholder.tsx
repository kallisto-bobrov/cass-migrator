import React from 'react';
import styled from 'styled-components';
import CopyText from '../../../atoms/CopyText/CopyText';
import Button from '../../../atoms/Button/Button';
import Container from '../../../grid/Container/Container';
import Headline from '../../../atoms/Headline/Headline';

const Content = styled.div`
  padding: 35px;
`;
const CbText = styled(CopyText)`
  p + p {
    margin: 20px auto;
  }
`;
const CbButton = styled(Button)`
  text-align: left;
  line-height: 25px;
  padding: 10px 20px;
  margin-top: 15px;
`;

const HubSpotPlaceholder = () => {
  const inhaltText =
    'An dieser Stelle finden Sie ein Kontakt-Formular. Dieser kann mit wenigen Klicks eingeblendet werden. Stimmen Sie hierfür bitte der Cookie-Kategorie „Marketing“ zu.';
  const buttonTitle = 'Cookie-Einstellungen verwalten';
  const buttonText = 'Cookie-Einstellungen verwalten';

  const showCookieBotOverlay = (e: any) => {
    e.preventDefault();
    if (window && window.Cookiebot) {
      window.Cookiebot.show();
    }
  };

  return (
    <Container>
      <Content>
        <Headline skin="headline600">Kontaktformular</Headline>
        {inhaltText && <CbText text={inhaltText} skin="copySmall" />}
        <CbButton
          skin="primary-small"
          title={buttonTitle}
          text={buttonText}
          handleClick={(e) => showCookieBotOverlay(e)}
          showArrow
        />
      </Content>
    </Container>
  );
};

export default HubSpotPlaceholder;
