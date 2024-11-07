import React from 'react';
import styled from 'styled-components';
import { UmfrageTestItemType } from '../../slices/UmfrageTestSlice/__types__/UmfrageTestSlice.type';
import CopyText from '../../atoms/CopyText/CopyText';
import { gridGutterHalf } from '../../grid/Container/Container';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import umfrageTestConfig from '../../slices/UmfrageTestSlice/config';

const Div = styled.div`
  padding: ${gridGutterHalf}px 0;
`;

const Frage = styled(CopyText)`
  border-bottom: 5px solid ${(props) => props.theme.color.gray700};
`;

const AntwortenWrapper = styled.div`
  padding: ${gridGutterHalf}px 0;
`;

const UmfrageTestItem = ({
  frage,
  antworten,
  activeItems,
  mehrfachauswahl,
  onChange,
  activeStep,
}: UmfrageTestItemType) => {
  const renderCheckBox = (antwort: any, idx: number, headline: any) => {
    if (antwort.antwort[0] && antwort.antwort[0].text) {
      const isChecked = !!activeItems.find(
        (item: { id: string }) =>
          item.id ===
          `${antwort.antwort[0].text}_${activeStep}${umfrageTestConfig.idAppendix}`,
      );

      return (
        <Checkbox
          key={`${antwort.antwort[0].text}_${activeStep}_${idx}${umfrageTestConfig.idAppendix}`}
          id={`${antwort.antwort[0].text}_${activeStep}${umfrageTestConfig.idAppendix}`}
          cbType={mehrfachauswahl ? 'checkbox' : 'radio'}
          label={antwort.antwort}
          onChange={() =>
            onChange(
              antwort.score,
              `${antwort.antwort[0].text}_${activeStep}${umfrageTestConfig.idAppendix}`,
              antwort.antwort[0].text,
              headline,
            )
          }
          isChecked={isChecked}
        />
      );
    }
    return null;
  };

  return (
    <Div>
      <Frage prismicRichText={frage} skin="copyBig" />
      <AntwortenWrapper>
        {antworten &&
          antworten.map((antwort: any, idx: number) =>
            renderCheckBox(antwort, idx, frage[0].text),
          )}
      </AntwortenWrapper>
    </Div>
  );
};

export default UmfrageTestItem;
