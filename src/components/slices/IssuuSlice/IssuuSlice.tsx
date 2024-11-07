import React from 'react';
import get from 'lodash/get';
import type { IssuuSliceType } from './__types__/IssuuSlice.type';
import Container from '../../grid/Container/Container';
import Issuu from '../../atoms/Issuu/Issuu';

const IssuuSlice = ({ primary }: IssuuSliceType) => {
  let embeddedUrl = '';

  if (primary && primary.snippet) {
    embeddedUrl = primary!.snippet!.match(/src="https:(.*)"/)!.pop()!;
  }

  return (
    <Container>
      <Issuu
        embeddedUrl={embeddedUrl}
        ankerLinkTitel={get(primary, 'ankerlink_titel', null)}
      />
    </Container>
  );
};

export default IssuuSlice;
