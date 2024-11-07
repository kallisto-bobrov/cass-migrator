import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';
import type { DocumentLink } from '../../../atoms/Link/__types__/Link.type';

export type DownloadTeaserType = {
  document_title: PrismicHeadline[];
  document_type: string;
  document_link: DocumentLink;
  document_link_text: string;
  document_link_title?: string;
  no3dHover?: boolean;
};
