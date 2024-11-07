import styled from 'styled-components';
import Icon from '../Icons/Icon';
import type { LogoType } from './__types__/Logo.type';
import getLogo from '@/components/atoms/Logo/helper/getLogo.helper';

const LogoWrapper = styled.div`
  svg {
    width: 100%;
  }
`;

const Logo = ({ className, position }: LogoType) => {
  return (
    <LogoWrapper className={className}>
      <Icon icon={getLogo(position)} />
    </LogoWrapper>
  );
};

export default Logo;
