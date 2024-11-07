const TeaserTileMock = [
  {
    teaser_farbe: 'weiss',
    zielseite: {
      id: 'XGQE8hAAAB8A9MiA',
      type: 'page',
      tags: ['cassini'],
      slug: 'cassini-impressum',
      lang: 'de-de',
      uid: 'cassini--impressum',
      data: {
        teaser_uberschrift: [
          {
            type: 'heading1',
            text: 'Fair play',
            spans: [],
          },
        ],
        teaser_text: [
          {
            type: 'paragraph',
            text: 'Bei Cassini können Sie sich verwirklichen – auch wenn Sie nicht aus der Beratungsbranche kommen. Substanz entscheidet. Und eine wesentliche Eigenschaft: Entrepreneurship.',
            spans: [],
          },
        ],
        teaser_link_text: 'zum Impressum vom type Page',
        teaser_link_title: 'folgen Sie mir!',
      },
      link_type: 'Document',
      isBroken: false,
    },
  },
];

export const TeaserTileImageMock = {
  teaser_farbe: 'weiss',
  dachzeile: 'Interview',
  zielseite: {
    id: 'XGQE8hAAAB8A9MiA',
    type: 'page',
    tags: ['cassini'],
    slug: 'cassini-impressum',
    lang: 'de-de',
    uid: 'cassini--impressum',
    data: {
      teaser_uberschrift: [
        {
          type: 'heading1',
          text: 'Was IoT-Plattformen für die Sicherheit leisten\n',
          spans: [],
        },
      ],
      teaser_text: [
        {
          type: 'paragraph',
          text: 'IoT-Plattformen vereinfachen den Aufbau und Betrieb von Lösungen im Internet of Things. Doch erhöhen sie auch die Sicherheit im IoT?',
          spans: [],
        },
      ],
      teaser_link_text: 'Zum Interview',
      teaser_link_title: 'folgen Sie mir!',
    },
    link_type: 'Document',
    isBroken: false,
  },
  teaser_bild_16_9: {
    dimensions: {
      width: 1440,
      height: 810,
    },
    alt: null,
    copyright: null,
    url: 'https://cassini.cdn.prismic.io/cassini/6a6d90feaa687ed1383bd35a1f2c8133fec53a94_og_dummy.png',
    MD: {
      dimensions: {
        width: 576,
        height: 320,
      },
      alt: null,
      copyright: null,
      url: 'https://cassini.cdn.prismic.io/cassini/afddb0f7d90dd213cc9514dbfc2fb6e7e1d61036_og_dummy.png',
    },
    XS: {
      dimensions: {
        width: 863,
        height: 480,
      },
      alt: null,
      copyright: null,
      url: 'https://cassini.cdn.prismic.io/cassini/bc4934328a04d95470670d371dce20e45efb56ce_og_dummy.png',
    },
  },
  teaser_bild_16_9_title: 'hierkommt der titel',
};

export default TeaserTileMock;
