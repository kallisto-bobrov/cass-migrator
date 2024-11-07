import type {
  ExternalLink,
  InternalLink,
} from '../../../atoms/Link/__types__/Link.type';
import type { NavLink } from './Nav.type';

export type HeaderType = {
  homepage_link_title: string;
  homepage_link_url: InternalLink;
  body: [
    {
      primary: NavLink;
      items?: [InternalLink | ExternalLink];
    },
  ];
  meta_navigation: [NavLink];
  jobs_link_text: string;
  jobs_link_title: string;
  jobs_url: InternalLink | ExternalLink;
};
