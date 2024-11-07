import React from 'react';
import styled from 'styled-components';
import type { SoundcloudSliceType } from './__types__/SoundcloudSlice.type';
import Container, { gridGutter } from '../../grid/Container/Container';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import Soundcloud from '../../atoms/Soundcloud/Soundcloud';
import mq from '@/styles/mediaQueries/mediaQueries';

const ContainerStyled = styled(Container)<{ $amIfirst: boolean }>`
  margin-top: ${(props) => (props.$amIfirst ? '120px' : '15px')};

  @media (${mq.xs}) {
    margin-top: 15px;
    padding: 0 ${`${gridGutter}px`};
  }
`;

const SoundcloudSlice = ({ primary, amIfirst }: SoundcloudSliceType) =>
  primary &&
  primary.soundcloud_link && (
    <ContainerStyled $amIfirst={!!amIfirst}>
      <Row>
        <Col
          colAmount={{ xl: 8, lg: 8, md: 12, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
          offset={{ xl: 1, lg: 1, md: 0, sm: 0, xs: 0 }} // eslint-disable-line object-curly-newline, max-len
        >
          <Soundcloud embedUrl={primary.soundcloud_link.embed_url} />
        </Col>
      </Row>
    </ContainerStyled>
  );

export default SoundcloudSlice;
