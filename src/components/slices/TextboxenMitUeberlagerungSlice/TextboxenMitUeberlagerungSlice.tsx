import React from 'react';
import get from 'lodash/get';
import type { TextboxenMitUeberlagerungSliceType } from './__types__/TextboxenMitUeberlagerungSlice.type';
import SliceWrapper from '../../atoms/SliceWrapper/SliceWrapper';
import TeaserIntro from '../../molecules/TeaserIntro/TeaserIntro';
import TextBoxBlock from '../../organisms/TextBoxBlock/TextBoxBlock';
import Spacer from '../../atoms/Spacer/Spacer';
import CTAstandaloneSlice from '../CTAstandaloneSlice/CTAstandaloneSlice';
import { CTAstandalonePrimaryType } from '../CTAstandaloneSlice/__types__/CTAstandaloneSlice.type';

const TextboxenMitUeberlagerungSlice = ({
  primary,
  items,
  index,
  slices,
}: TextboxenMitUeberlagerungSliceType) => {
  const buttonProps: CTAstandalonePrimaryType = {
    position: primary.cta_position,
    farbe: primary.cta_farbe,
    button_text: primary.cta_button_text,
    button_title: primary.cta_button_title,
    zielseite: primary.cta_zielseite,
    externe_url: primary.cta_externe_url,
    ankerlink_ziel: primary.cta_ankerlink_ziel,
  };

  return (
    <SliceWrapper id={get(primary, 'ankerlink_titel', null)!}>
      <TeaserIntro
        headline={get(primary, 'uberschrift[0]', null)!}
        text={get(primary, 'text', null)!}
        chapter={get(primary, 'kapitel', null)}
        slices={slices}
        index={index}
      />
      <Spacer />
      <TextBoxBlock items={items} sliceName="TextboxenMitUeberlagerungSlice" />
      {buttonProps.button_text &&
        buttonProps.button_text !== '' &&
        buttonProps.button_text !== ' ' && (
          <CTAstandaloneSlice primary={buttonProps} alwaysFullWidthContainer />
        )}
    </SliceWrapper>
  );
};

export default TextboxenMitUeberlagerungSlice;
