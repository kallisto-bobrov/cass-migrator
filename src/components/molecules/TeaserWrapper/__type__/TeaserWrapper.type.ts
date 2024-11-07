import type {
  DocumentLink,
  ExternalLink,
  InternalLink,
} from '../../../atoms/Link/__types__/Link.type';
import type { ReactNode } from 'react';

export type TeaserWrapperType = {
  children: ReactNode | ReactNode[];
  link: InternalLink | ExternalLink | DocumentLink;
  link_title?: string;
  teaser_link_text?: string;
  bgColor?: string;
  linkIconType?: 'arrow' | 'downloadLink';
  className?: string;
  no3dHover?: boolean;
};
