import React, { useContext } from 'react';
import get from 'lodash/get';
import type { NewsletterTeaserSliceType } from './__types__/NewsletterTeaserSlice.type';
import { GlobalConfigContext } from '../../../contexts/globalConfig.context';
import BgImage from '../../organisms/BgImage/BgImage';
import elmStyleMap from '../../../constants/maps/elmStyle.map';
import NewsletterMaatooForm from '../../organisms/NewsletterMaatooForm/NewsletterMaatooForm';
import mq from '@/styles/mediaQueries/mediaQueries';

const NewsletterTeaserSlice = ({ primary }: NewsletterTeaserSliceType) => {
  const config = useContext(GlobalConfigContext);
  const headline = get(config, 'nl_teaser_uberschrift[0]', null);
  const introText = get(config, 'nl_teaser_einleitungstext', null);
  const labelName = get(config, 'nl_teaser_label_name', 'Name');
  const labelFirstName = get(config, 'nl_teaser_label_vorname', 'Vorname');
  const labelEmail = get(
    config,
    'nl_teaser_label_email',
    'E-Mail-Adresse eingeben*:',
  );
  const cta = get(config, 'nl_teaser_cta', 'Senden');
  const disclaimerText = get(config, 'nl_teaser_disclaimer_text', null);
  const finePrintText = get(config, 'nl_teaser_sternchen_text', null);
  const image = get(primary, 'hintergrundbild.url', null)
    ? get(primary, 'hintergrundbild', null)
    : get(config, 'nl_teaser_default_hintergrundbild', null);

  return (
    <div id={get(primary, 'ankerlink_titel', null)!}>
      <BgImage
        {...{
          images: [
            {
              bp: mq.lgUp,
              url: get(image, 'url', null)!,
              dimensions: get(image, 'dimensions', null)!,
              fullscreen: true,
            },
            {
              bp: mq.smTillmd,
              url: get(image, 'MD.url', null)!,
              dimensions: get(image, 'MD.dimensions', null)!,
              fullscreen: false,
              customImgHeight: 427,
            },
            {
              bp: mq.xs,
              url: get(image, 'XS.url', null)!,
              dimensions: get(image, 'XS.dimensions', null)!,
              fullscreen: false,
              customImgHeight: 236,
            },
          ],
          title: get(image, 'alt', '')!,
          scrollIndicator: false,
          elmStyle: elmStyleMap.fullscreenTeaser,
        }}
      >
        <NewsletterMaatooForm
          headline={headline!}
          introText={introText!}
          labelName={labelName}
          labelFirstName={labelFirstName}
          labelEmail={labelEmail}
          disclaimerText={disclaimerText!}
          finePrintText={finePrintText!}
          cta={cta}
        />
      </BgImage>
    </div>
  );
};

export default NewsletterTeaserSlice;
