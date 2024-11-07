import React, { Component, ReactNode } from 'react';
import Headline from '../atoms/Headline/Headline';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: {}) {
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    return hasError ? (
      <Headline skin="headline600">Something went wrong.</Headline>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
