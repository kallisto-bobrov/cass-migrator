import React, { useEffect, useState } from 'react';
import get from 'lodash/get';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { UmfrageTestSliceType } from './__types__/UmfrageTestSlice.type';
import TeaserIntro from '../../molecules/TeaserIntro/TeaserIntro';
import Container, { gridGutterHalf } from '../../grid/Container/Container';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import CtaCollection from '../../molecules/CtaCollection/CtaCollection';
import RangeScale from '../../atoms/RangeScale/RangeScale';
import UmfrageTestItem from '../../organisms/UmfrageTestItem/UmfrageTestItem';
import UmfrageTestMaatooForm from '../../organisms/UmfrageTestMaatooForm/UmfrageTestMaatooForm';
import CopyText from '../../atoms/CopyText/CopyText';
import Maatoo from '../../siteframes/Maatoo/Maatoo';
import umfrageTestConfig from './config';
import mq from '@/styles/mediaQueries/mediaQueries';

const Div = styled.div`
  background-color: ${(props) => props.theme.color.gray500};
`;

const Wrapper = styled.div`
  @media (${mq.xs}) {
    padding: 0 ${`${gridGutterHalf}px`};
  }
`;

const CopyTextStyled = styled(CopyText)`
  margin-top: 35px;

  @media (${mq.smDown}) {
    padding: 0 ${`${gridGutterHalf}px`};
  }
`;

const UmfrageTestSlice = ({
  primary,
  items,
  slices,
  index,
}: UmfrageTestSliceType) => {
  const [umfrageState, setUmfrageState] = useState('start');
  const [activeStep, setActiveStep] = useState(0);
  const [stepsAmount, setStepsAmount] = useState(0);
  const [activeItems, setActiveItems] = useState<any>([]);
  const scrollId = 'scrollWrapper';

  const handleOnChange = (
    score: number,
    id: string,
    mehrfachauswahl: boolean,
    text: any,
    headline: any,
  ) => {
    const validScore = score || 0;
    if (mehrfachauswahl) {
      if (activeItems.find((item: any) => item.id === id)) {
        const updatedActiveItems = activeItems.filter(
          (item: any) => item.id !== id,
        );
        setActiveItems(updatedActiveItems);
      } else {
        setActiveItems([
          ...activeItems,
          {
            id,
            score: validScore,
            text,
            headline,
          },
        ]);
      }
    }
    if (!mehrfachauswahl) {
      const updatedItems = activeItems.filter(
        (item: any) =>
          !item.id.includes(`_${activeStep}${umfrageTestConfig.idAppendix}`),
      );
      setActiveItems([
        ...updatedItems,
        {
          id,
          score: validScore,
          text,
          headline,
        },
      ]);
    }
  };

  const handleBtnClick = (ctatype: string) => {
    switch (ctatype) {
      case 'start':
        setUmfrageState('');
        setActiveStep(1);
        break;
      case 'next':
        if (activeStep < stepsAmount) {
          setActiveStep(activeStep + 1);
        } else {
          setUmfrageState('summary');
        }
        break;
      case 'prev':
        if (activeStep === 1) {
          setUmfrageState('start');
          setActiveStep(0);
        } else {
          setActiveStep(activeStep - 1);
        }
        break;
      default:
        break;
    }
  };

  const getTotalScore = () => {
    let totalScore = 0;

    activeItems.forEach((item: any) => {
      totalScore += item.score;
    });

    return totalScore;
  };

  const getTotalSummary = () => {
    const summary: any = [];

    activeItems.forEach((item: any) => {
      summary.push({
        headline: item.headline,
        text: item.text,
        score: item.score,
      });
    });

    return summary;
  };

  useEffect(() => {
    let validSteps = 0;
    const initialItems: any = [];

    items.forEach((item, idx) => {
      if (get(item, 'frage[0].text', null)) {
        validSteps += 1;

        if (
          (!item.aktive_antwort_bei_einzelauswahl ||
            item.aktive_antwort_bei_einzelauswahl === '' ||
            item.aktive_antwort_bei_einzelauswahl === ' ') &&
          !item.mehrfachauswahl &&
          item.antwort_1[0].text &&
          !activeItems.find(
            (aItem: any) =>
              aItem.id ===
              `${item.antwort_1[0].text}_${idx + 1}${umfrageTestConfig.idAppendix}`,
          )
        ) {
          initialItems.push({
            id: `${item.antwort_1[0].text}_${idx + 1}${umfrageTestConfig.idAppendix}`,
            score: item.score_1 || 0,
            text: item.antwort_1[0].text,
            headline: item.frage[0].text,
          });
        }

        if (
          !item.mehrfachauswahl &&
          item.aktive_antwort_bei_einzelauswahl &&
          (item.aktive_antwort_bei_einzelauswahl !== '' ||
            // @ts-ignore
            item.aktive_antwort_bei_einzelauswahl !== ' ')
        ) {
          const activeIndexArray =
            item.aktive_antwort_bei_einzelauswahl.split(',');
          const objectArray = Object.entries(item);
          let activeId;
          let activeScore;
          let activeText;

          objectArray.forEach((objectItem: any) => {
            if (
              objectItem[0] === `antwort_${activeIndexArray[0]}` &&
              objectItem[1][0].text &&
              !activeItems.find(
                (aItem: any) =>
                  aItem.id ===
                  `${objectItem[1][0].text}_${idx + 1}${umfrageTestConfig.idAppendix}`,
              )
            ) {
              activeId = `${objectItem[1][0].text}_${idx + 1}${umfrageTestConfig.idAppendix}`;
              activeText = objectItem[1][0].text;
            }

            if (objectItem[0] === `score_${activeIndexArray[0]}`) {
              activeScore = objectItem[1] || 0;
            }
          });

          if (activeId) {
            initialItems.push({
              id: activeId,
              score: activeScore,
              text: activeText,
              headline: item.frage[0].text,
            });
          }
        }

        if (
          item.mehrfachauswahl &&
          item.aktive_antworten_bei_mehrfachauswahl &&
          (item.aktive_antworten_bei_mehrfachauswahl !== '' ||
            // @ts-ignore
            item.aktive_antworten_bei_mehrfachauswahl !== ' ')
        ) {
          const activeIndexArray =
            item.aktive_antworten_bei_mehrfachauswahl.split(',');
          const objectArray = Object.entries(item);
          const activeId: any = [];
          const activeScore: any = [];
          const activeText: any = [];

          activeIndexArray.forEach((activeIdx, activeIdxArrayIndex) => {
            const cleanIdx = activeIdx.replace(' ', '');

            objectArray.forEach((objectItem: any) => {
              if (
                objectItem[0] === `antwort_${cleanIdx}` &&
                objectItem[1][0].text &&
                !activeItems.find(
                  (aItem: any) =>
                    aItem.id ===
                    `${objectItem[1][0].text}_${idx + 1}${umfrageTestConfig.idAppendix}`,
                )
              ) {
                activeId.push(
                  `${objectItem[1][0].text}_${idx + 1}${umfrageTestConfig.idAppendix}`,
                );
                activeText.push(objectItem[1][0].text);
              }

              if (objectItem[0] === `score_${cleanIdx}`) {
                activeScore.push(objectItem[1] || 0);
              }
            });

            if (activeId[activeIdxArrayIndex]) {
              initialItems.push({
                id: activeId[activeIdxArrayIndex],
                score: activeScore[activeIdxArrayIndex],
                text: activeText[activeIdxArrayIndex],
                headline: item.frage[0].text,
              });
            }
          });
        }
      }
    });

    setActiveItems([...initialItems]);
    setStepsAmount(validSteps);
  }, []);

  return (
    <Div id={primary.ankerlink_titel}>
      <div id={scrollId}>
        {umfrageState === 'start' && (
          <TeaserIntro
            headline={get(primary, 'uberschrift_intro[0]', null)!}
            text={get(primary, 'text_intro', null)!}
            chapter={get(primary, 'kapitel', null)!}
            slices={slices}
            index={index}
            textgrosse={get(primary, 'textgrosse_intro', null)!}
            bild_klein={get(primary, 'bild_klein_intro', null)!}
            bild_medium={get(primary, 'bild_medium_intro', null)!}
            bild_gross={get(primary, 'bild_gross_intro', null)!}
            bild_position={get(primary, 'bild_position_intro', null)!}
          />
        )}
        {umfrageState === 'summary' && (
          <>
            <TeaserIntro
              headline={get(primary, 'uberschrift_outro[0]', null)!}
              text={get(primary, 'text_outro', null)!}
              chapter={get(primary, 'kapitel', null)!}
              slices={slices}
              index={index}
              textgrosse={get(primary, 'textgrosse_outro', null)!}
              bild_klein={get(primary, 'bild_klein_outro', null)!}
              bild_medium={get(primary, 'bild_medium_outro', null)!}
              bild_gross={get(primary, 'bild_gross_outro', null)!}
              bild_position={get(primary, 'bild_position_outro', null)!}
            />
            <Container>
              <Row>
                <Col
                  colAmount={{
                    xl: 8,
                    lg: 8,
                    md: 12,
                    sm: 12,
                    xs: 12,
                  }}
                  offset={{
                    xl: 1,
                    lg: 1,
                    md: 0,
                    sm: 0,
                    xs: 0,
                  }}
                >
                  <Maatoo />
                  <UmfrageTestMaatooForm
                    score={getTotalScore()}
                    umfrage_test_id={get(
                      primary,
                      'umfrage_test_id',
                      '## no ID provided',
                    )}
                    summary={getTotalSummary()}
                  />
                  <CopyTextStyled text="*Pflichtangaben" skin="copySmall" />
                </Col>
              </Row>
            </Container>
          </>
        )}
        <Wrapper>
          <Container>
            <Row>
              <Col
                colAmount={{
                  xl: 8,
                  lg: 8,
                  md: 12,
                  sm: 12,
                  xs: 12,
                }}
                offset={{
                  xl: 1,
                  lg: 1,
                  md: 0,
                  sm: 0,
                  xs: 0,
                }}
              >
                {umfrageState !== 'start' && umfrageState !== 'summary' && (
                  <>
                    {get(items[activeStep - 1], 'frage', null)! && (
                      <UmfrageTestItem
                        frage={get(items[activeStep - 1], 'frage', null)!}
                        antworten={[
                          {
                            antwort: get(
                              items[activeStep - 1],
                              'antwort_1',
                              null,
                            )!,
                            score: get(items[activeStep - 1], 'score_1', null)!,
                          },
                          {
                            antwort: get(
                              items[activeStep - 1],
                              'antwort_2',
                              null,
                            )!,
                            score: get(items[activeStep - 1], 'score_2', null)!,
                          },
                          {
                            antwort: get(
                              items[activeStep - 1],
                              'antwort_3',
                              null,
                            )!,
                            score: get(items[activeStep - 1], 'score_3', null)!,
                          },
                          {
                            antwort: get(
                              items[activeStep - 1],
                              'antwort_4',
                              null,
                            )!,
                            score: get(items[activeStep - 1], 'score_4', null)!,
                          },
                          {
                            antwort: get(
                              items[activeStep - 1],
                              'antwort_5',
                              null,
                            )!,
                            score: get(items[activeStep - 1], 'score_5', null)!,
                          },
                          {
                            antwort: get(
                              items[activeStep - 1],
                              'antwort_6',
                              null,
                            )!,
                            score: get(items[activeStep - 1], 'score_6', null)!,
                          },
                          {
                            antwort: get(
                              items[activeStep - 1],
                              'antwort_7',
                              null,
                            )!,
                            score: get(items[activeStep - 1], 'score_7', null)!,
                          },
                          {
                            antwort: get(
                              items[activeStep - 1],
                              'antwort_8',
                              null,
                            )!,
                            score: get(items[activeStep - 1], 'score_8', null)!,
                          },
                          {
                            antwort: get(
                              items[activeStep - 1],
                              'antwort_9',
                              null,
                            )!,
                            score: get(items[activeStep - 1], 'score_9', null)!,
                          },
                          {
                            antwort: get(
                              items[activeStep - 1],
                              'antwort_10',
                              null,
                            )!,
                            score: get(
                              items[activeStep - 1],
                              'score_10',
                              null,
                            )!,
                          },
                          {
                            antwort: get(
                              items[activeStep - 1],
                              'antwort_11',
                              null,
                            )!,
                            score: get(
                              items[activeStep - 1],
                              'score_11',
                              null,
                            )!,
                          },
                          {
                            antwort: get(
                              items[activeStep - 1],
                              'antwort_12',
                              null,
                            )!,
                            score: get(
                              items[activeStep - 1],
                              'score_12',
                              null,
                            )!,
                          },
                          {
                            antwort: get(
                              items[activeStep - 1],
                              'antwort_13',
                              null,
                            )!,
                            score: get(
                              items[activeStep - 1],
                              'score_13',
                              null,
                            )!,
                          },
                          {
                            antwort: get(
                              items[activeStep - 1],
                              'antwort_14',
                              null,
                            )!,
                            score: get(
                              items[activeStep - 1],
                              'score_14',
                              null,
                            )!,
                          },
                          {
                            antwort: get(
                              items[activeStep - 1],
                              'antwort_15',
                              null,
                            )!,
                            score: get(
                              items[activeStep - 1],
                              'score_15',
                              null,
                            )!,
                          },
                        ]}
                        activeItems={activeItems}
                        activeStep={activeStep}
                        mehrfachauswahl={items[activeStep - 1].mehrfachauswahl}
                        onChange={(score, id, text, headline) =>
                          handleOnChange(
                            score,
                            id,
                            items[activeStep - 1].mehrfachauswahl,
                            text,
                            headline,
                          )
                        }
                      />
                    )}
                    <RangeScale
                      activeStep={activeStep}
                      stepsAmount={stepsAmount}
                    />
                  </>
                )}
                <Link to={scrollId} spy smooth duration={1000} offset={-200}>
                  <CtaCollection
                    firstCta={
                      umfrageState === 'start'
                        ? get(primary, 'btn_start', null)!
                        : undefined
                    }
                    summary={umfrageState === 'summary'}
                    prevCta={get(primary, 'btn_prev', null)!}
                    nextCta={get(primary, 'btn_next', null)!}
                    onCtaClick={(ctaType) => handleBtnClick(ctaType)}
                  />
                </Link>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </div>
    </Div>
  );
};

export default UmfrageTestSlice;
