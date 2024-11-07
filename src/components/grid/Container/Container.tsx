import styled from 'styled-components';
import mq from '@/styles/mediaQueries/mediaQueries';

export const containerWidth = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1280px',
  xxl: '100%',
};

export const gridGutter = 40;
export const gridGutterHalf = gridGutter / 2;

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: ${containerWidth.xxl};
  padding: 0 ${gridGutter * 5}px;

  @media (${mq.xl}) {
    max-width: ${containerWidth.xl};
    padding: 0 ${gridGutter * 2}px;
  }

  @media (${mq.lgDown}) {
    max-width: ${containerWidth.lg};
    padding: 0 ${gridGutterHalf}px;
  }

  @media (${mq.mdDown}) {
    max-width: ${containerWidth.md};
    padding: 0 ${gridGutterHalf}px;
  }

  @media (${mq.smDown}) {
    max-width: ${containerWidth.sm};
    padding: 0 ${gridGutterHalf}px;
  }
`;

export default Container;
