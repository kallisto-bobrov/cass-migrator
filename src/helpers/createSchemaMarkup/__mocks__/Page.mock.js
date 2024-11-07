import PageContentMock from '../../getMeta/__mocks__/DefaultContent.mock';
import {
  createLocationsMarkup,
  createSocialChannelsMarkup,
} from '../createSchemaMarkup.helper';

const PageSchemaMock = {
  __html: `{
        "@context": {
        "@vocab": "http://schema.org/"
        },
        "@graph": [
        {
        "@id": "#MainOrganization",
        "@type": "Organization",
        "name": "Cassini",
        "url": "https://cassini.de",
        "logo": "https://wroomdev.s3.amazonaws.com/tutoblanktemplate%2F97109f41-140e-4dc9-a2c8-96fb10f14051_star.gif",
        "sameAs": ${createSocialChannelsMarkup(PageContentMock.social_media_channels)}},
        ${createLocationsMarkup(PageContentMock.schema_location)}]}`,
};

export default PageSchemaMock;
