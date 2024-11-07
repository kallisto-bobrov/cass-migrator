import React from 'react';
import styled from 'styled-components';
import Container from '../../grid/Container/Container';
import Link from '../Link/Link';
import mq from '@/styles/mediaQueries/mediaQueries';

const Styled = styled.div`
  color: ${(props) => props.theme.color.primary800};
  background: #eeeeee;
  padding: 15px 30px;

  @media (${mq.smDown}) {
    background: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.tertiary800};
    padding: 0;
  }
`;

const Dummy = () => (
  <Container>
    <Styled>
      <p>Cassini</p>
      <h1>Ich bin eine Dummy-Komponente</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
      <button type="button">Click me, i am a button</button>
      <br />
      <Link
        url={'cassini--level3'}
        link_type="Document"
        uid="cassini--level3"
        pageType="page"
      >
        Click me, i am a link
      </Link>
    </Styled>
  </Container>
);
export default Dummy;
