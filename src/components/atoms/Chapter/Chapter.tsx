import styled from 'styled-components';
import type { ChapterType } from './Chapter.type';

const Wrapper = styled.div<{ $inverted: boolean }>`
  color: ${(props) =>
    props.$inverted ? props.theme.color.white : props.theme.color.primary800};
  font-family: ${(props) => props.theme.font.family.secondary};
  font-weight: ${(props) => props.theme.skin.chapter.fontWeight};
  display: inline-flex;
  padding-bottom: 2px;
  align-items: flex-end;
  border-bottom: 5px solid
    ${(props) =>
      props.$inverted ? props.theme.color.white : props.theme.color.primary800};
  margin-bottom: 15px;
`;

const Number = styled.span`
  font-size: 25px;
`;

const Word = styled.span`
  font-size: 12px;
  line-height: 19px;
  margin: 0 3px;
`;

const Chapter = ({ slices, index, className, inverted = false }: ChapterType) =>
  null;

export default Chapter;

// <Wrapper className={className} $inverted={inverted}>
//   <Number>{index}</Number>
//   <Word>von</Word>
//   <Number>{slices}</Number>
// </Wrapper>
