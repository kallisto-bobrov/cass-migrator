import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import type { IconType } from './__types__/Icon.type';
import XingIcon from './components/Xing.Icon';
import TwitterIcon from './components/Twitter.Icon';
import FacebookIcon from './components/Facebook.Icon';
import YoutubeIcon from './components/Youtube.Icon';
import LinkedinIcon from './components/Linkedin.Icon';
import KununuIcon from './components/Kununu.Icon';
import ArrowIcon from './components/Arrow.Icon';
import LogoCassiniWhite from './components/LogoCassiniWhite.Icon';
import LogoCassiniGreenWhite from './components/LogoCassiniGreenWhite.Icon';
import ArrowCTA from './components/ArrowCTA.Icon';
import ScrollArrow from './components/ScrollArrow.Icon';
import LogoCassiniGreenBlack from './components/LogoCassiniGreenWhiteBlack';
import CassiniIcon from './components/CassiniIcon.Icon';
import XingColoredIcon from './components/XingColored.Icon';
import LinkedinColoredIcon from './components/LinkedinColored.Icon';
import TwitterColoredIcon from './components/TwitterColored.Icon';
import FacebookColoredIcon from './components/FacebookColored.Icon';
import EventIcon from './components/Event.Icon';
import LinkedinInvIcon from './components/LinkedinInv.Icon';
import XingInvIcon from './components/XingInv.Icon';
import TwitterInvIcon from './components/TwitterInv.Icon';
import FacebookInvIcon from './components/FacebookInv.Icon';
import WhatsappInv from './components/WhatsappInv.Icon';
import DummyIcon from './components/Dummy.Icon';
import DownloadIcon from './components/Download.Icon';
import DownloadLinkIcon from './components/DownloadLink.Icon';
import PlaceIcon from './components/Place.Icon';
import TimeIcon from './components/Time.Icon';
import TicketsIcon from './components/Tickets.Icon';
import CookieIcon from './components/Cookie.Icon';
import LogoScoopIt from './components/LogoScoopIT.Icon';
import ScoopItIcon from './components/ScoopItIcon.Icon';
import FacebookScoopitIcon from './components/FacebookScoopit.Icon';
import KununuScoopitIcon from './components/KununuScoopit.Icon';
import LinkedinScoopitIcon from './components/LinkedinScoopit.Icon';
import TwitterScoopitIcon from './components/TwitterScoopit.Icon';
import XingScoopitIcon from './components/XingScoopit.Icon';
import YoutubeScoopitIcon from './components/YoutubeScoopit.Icon';
import LogoDig from './components/LogoDig.Icon';
import LogoAg from './components/LogoAg.Icon';
import AgIcon from './components/AgIcon.Icon';
import DigIcon from './components/DigIcon.Icon';
import NewsletterIcon from './components/Newsletter.Icon';
import SpotifyIcon from './components/Spotify.Icon';
import InstagramIcon from './components/Instagram.Icon';

const ICONS_MAP = {
  newsletter: NewsletterIcon,
  cookie: CookieIcon,
  tickets: TicketsIcon,
  time: TimeIcon,
  place: PlaceIcon,
  'cassini-xing': XingIcon,
  'ag-xing': XingIcon,
  'dig-xing': XingIcon,
  'scoopit-xing': XingScoopitIcon,
  'xing-inv': XingInvIcon,
  xingColored: XingColoredIcon,
  'cassini-facebook': FacebookIcon,
  'ag-facebook': FacebookIcon,
  'dig-facebook': FacebookIcon,
  'scoopit-facebook': FacebookScoopitIcon,
  'facebook-inv': FacebookInvIcon,
  facebookColored: FacebookColoredIcon,
  'cassini-linkedin': LinkedinIcon,
  'ag-linkedin': LinkedinIcon,
  'dig-linkedin': LinkedinIcon,
  'scoopit-linkedin': LinkedinScoopitIcon,
  'linkedin-inv': LinkedinInvIcon,
  linkedinColored: LinkedinColoredIcon,
  'cassini-youtube': YoutubeIcon,
  'ag-youtube': YoutubeIcon,
  'cassini-kununu': KununuIcon,
  'ag-kununu': KununuIcon,
  'cassini-twitter': TwitterIcon,
  'ag-twitter': TwitterIcon,
  'dig-youtube': YoutubeIcon,
  'dig-kununu': KununuIcon,
  'dig-twitter': TwitterIcon,
  'scoopit-youtube': YoutubeScoopitIcon,
  'scoopit-kununu': KununuScoopitIcon,
  'scoopit-twitter': TwitterScoopitIcon,
  'twitter-inv': TwitterInvIcon,
  twitterColored: TwitterColoredIcon,
  'whatsapp-inv': WhatsappInv,
  arrow: ArrowIcon,
  event: EventIcon,
  'cassini-logo-white': LogoCassiniWhite,
  'cassini-logo-greenwhite': LogoCassiniGreenWhite,
  'cassini-logo-greenBlack': LogoCassiniGreenBlack,
  'dig-logo': LogoDig,
  'ag-logo': LogoAg,
  'scoopit-logo': LogoScoopIt,
  'scoopit-icon': ScoopItIcon,
  'ag-icon': AgIcon,
  'dig-icon': DigIcon,
  'arrow-cta': ArrowCTA,
  'scroll-arrow': ScrollArrow,
  'cassini-icon': CassiniIcon,
  'cassini-spotify': SpotifyIcon,
  'ag-spotify': SpotifyIcon,
  'dig-spotify': SpotifyIcon,
  'scoopit-spotify': SpotifyIcon,
  'cassini-instagram': InstagramIcon,
  'ag-instagram': InstagramIcon,
  'dig-instagram': InstagramIcon,
  'scoopit-instagram': InstagramIcon,
  download: DownloadIcon,
  downloadLink: DownloadLinkIcon,
  default: DummyIcon,
};

const Wrapper = styled.div`
  line-height: 0;
`;

const Icon = ({ icon }: IconType): ReactNode => {
  const [iconActive, setActive] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {React.createElement(get(ICONS_MAP, icon, ICONS_MAP.default), {
        iconActive,
      })}
    </Wrapper>
  );
};

export default Icon;
