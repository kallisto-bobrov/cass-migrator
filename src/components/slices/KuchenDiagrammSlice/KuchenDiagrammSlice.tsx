import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import ReactECharts from 'echarts-for-react';
import type { KuchenDiagrammSliceType } from './__types__/KuchenDiagrammSlice.type';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import Container from '../../grid/Container/Container';
import useIsInView from '../../../tools/IsInView/IsInView';
import { BreakpointContext } from '@/helpers/breakpoints/context/breakpoint.context';
import { lgDown } from '@/helpers/breakpoints/checkBreakpoints.helper';

const Div = styled.div<{ $greyBackground?: boolean }>`
  background-color: ${(props) =>
    props.$greyBackground && props.theme.color.gray500};
`;

const ContainerStyled = styled(Container)<{ $pieChartHeight?: string }>`
  min-height: ${(props) => props.$pieChartHeight};
`;

const ColStyled = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const KuchenDiagrammSlice = ({
  primary = {
    ankerlink_titel: '',
  },
  items,
}: KuchenDiagrammSliceType) => {
  const breakpoint = useContext(BreakpointContext);
  const isMobile = lgDown(breakpoint);
  const kuchenDiagrammRef = useRef<HTMLDivElement>(null);
  const pieChartHeight = isMobile ? `${items.length * 26 + 280}px` : '550px';
  const inViewport = useIsInView(
    kuchenDiagrammRef,
    isMobile ? '-180px' : '-200px',
    false,
  );

  const data = items.map(({ name, value, color }) => ({
    name,
    value,
    ...(color && { itemStyle: { color } }),
  }));

  const options = {
    legend: isMobile && {
      name: 'test',
      top: 'bottom',
      orient: 'vertical',
      selectedMode: false,
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: isMobile ? [15, 140] : [20, 200],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8,
        },
        data,
        center: isMobile ? ['50%', '150px'] : ['50%', '50%'],
        color: [
          '#2CC700',
          '#272D35',
          '#313942',
          '#004F30',
          '#00673E',
          '#4AAD5D',
          '#B4E1A7',
          '#666666',
          '#A5A5A5',
          '#BFBFBF',
          '#D8D8D8',
          '#F3F3F3',
          '#FFFFFF',
        ],
        label: isMobile
          ? { show: false }
          : { fontSize: 14, alignTo: 'edge', edgeDistance: '10%' },
      },
    ],
  };

  if (!items || !items.length) return null;
  return (
    <Div id={primary.ankerlink_titel} $greyBackground={primary.grey_background}>
      <ContainerStyled $pieChartHeight={pieChartHeight} ref={kuchenDiagrammRef}>
        <Row>
          <ColStyled
            colAmount={{
              xl: 12,
              lg: 12,
              md: 12,
              sm: 12,
              xs: 12,
            }}
          >
            {inViewport && (
              <ReactECharts
                style={{ height: pieChartHeight, width: '100%' }}
                option={options}
              />
            )}
          </ColStyled>
        </Row>
      </ContainerStyled>
    </Div>
  );
};

export default KuchenDiagrammSlice;
