import React from 'react';
import styled from 'styled-components';
import type { HeadlineTypes } from './__types__/Headline.types';
import HeadlineTag from './HeadlineTag.Headline';
import {
  headline200skin,
  headline300skin,
  headline500skin,
  headline600skin,
  headline700skin,
  headline800skin,
  headline900skin,
} from './Headline.skins';

const HeadlineStyled = styled(HeadlineTag)`
  ${(props) => props.skin === 'headline900' && headline900skin}
  ${(props) => props.skin === 'headline800' && headline800skin}
  ${(props) => props.skin === 'headline700' && headline700skin}
  ${(props) => props.skin === 'headline600' && headline600skin}
  ${(props) => props.skin === 'headline500' && headline500skin}
  ${(props) => props.skin === 'headline300' && headline300skin}
  ${(props) => props.skin === 'headline200' && headline200skin}
`;

const Headline = ({
  children,
  type,
  className,
  skin = 'headline900',
}: HeadlineTypes) => (
  <HeadlineStyled skin={skin} className={className} type={type}>
    {children}
  </HeadlineStyled>
);

export default Headline;
