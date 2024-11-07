import { NavLink } from '@/components/organisms/Header/__types__/Nav.type';

export type MetaNavType = [NavLink];

export type MetaNavProps = {
  metaNav: MetaNavType;
  handleClick?: () => void;
};
