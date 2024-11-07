import { AllDocumentTypes } from '../../../prismicio-types';

const linkResolver = (doc: AllDocumentTypes) => {
  let href = '';

  // linkresolver
  if (doc.url) {
    href = doc.url.replaceAll('cassini--', '');
  } else if (doc.uid) {
    href = `/${doc.uid.replaceAll('cassini--', '')}`;
  }

  return href;
};

export default linkResolver;
