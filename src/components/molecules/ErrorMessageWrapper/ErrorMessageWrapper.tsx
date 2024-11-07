'use client';

import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background: red;
  color: white;
  padding: 35px;
  margin: 150px 0 50px 0;
  box-sizing: border-box;
  font-family: sans-serif;

  a {
    color: white;
  }
`;

type Props = {
  children: ReactNode;
};

const ErrorMessageWrapper = ({ children }: Props) => <Div>{children}</Div>;

export default ErrorMessageWrapper;
