import styled from 'styled-components';
import mq from '@/styles/mediaQueries/mediaQueries';

const CalendarLinkStyled = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.color.primary800};
  font-family: ${(props) => props.theme.font.family.secondary};
  letter-spacing: ${(props) => props.theme.skin.linkCta.xl.letterSpacing};

  &:hover {
    color: ${(props) => props.theme.color.secondary800};
  }
  & > * {
    margin-right: 20px;
  }

  @media (${mq.smDown}) {
    letter-spacing: ${(props) => props.theme.skin.linkCta.xs.letterSpacing};
    font-size: ${(props) => props.theme.skin.linkCta.xs.fontSize};
    line-height: ${(props) => props.theme.skin.linkCta.xs.lineHeight};
    font-weight: ${(props) => props.theme.skin.linkCta.xs.fontWeight};
  }
`;

export default CalendarLinkStyled;
