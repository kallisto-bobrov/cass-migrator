import * as prismic from '@prismicio/client';

export type NavLink = {
  url: prismic.FilledContentRelationshipField;
  link_text: string;
  link_text_sub?: string;
  link_target?: string;
  link_title: string;
  anker_link?: string;
};

export type NavType = [
  {
    primary: NavLink;
    items?: [NavLink];
  },
];
