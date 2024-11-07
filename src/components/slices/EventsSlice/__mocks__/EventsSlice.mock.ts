export const eventsMock = [
  {
    id: 'XEcyahAAACYAmkOz',
    uid: 'cassini--party',
    type: 'event',
    href: 'https://cassini.cdn.prismic.io/api/v2/documents/search?ref=XKdTsREAANQJnafn&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XEcyahAAACYAmkOz%22%29+%5D%5D',
    tags: ['cassini'],
    first_publication_date: '2019-01-22T15:10:38+0000',
    last_publication_date: '2019-04-05T13:09:38+0000',
    slugs: ['event-cassini'],
    linked_documents: [
      {
        id: 'XEcyahAAACYAmkOz',
        tags: ['cassini'],
        type: 'event',
        slug: 'event-cassini',
        lang: 'de-de',
      },
    ],
    lang: 'de-de',
    alternate_languages: [],
    data: {
      event_schema_start_date: '2019-04-10T17:00:00+0000',
      event_schema_end_date: '2019-04-10T20:00:00+0000',
      event_schema_location_city: null,
      event_schema_location_country: null,
      teaser_dachzeile: null,
      teaser_uberschrift: [
        {
          type: 'heading1',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          spans: [],
        },
      ],
      teaser_text: [
        {
          type: 'paragraph',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.',
          spans: [],
        },
      ],
      teaser_link_text: 'zum Event',
      teaser_bild: {
        MD: {},
        XS: {},
      },
    },
  },
  {
    id: 'XKdTTREAANQJnaYQ',
    uid: 'cassini--eventtest',
    type: 'event',
    href: 'https://cassini.cdn.prismic.io/api/v2/documents/search?ref=XKdTsREAANQJnafn&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XKdTTREAANQJnaYQ%22%29+%5D%5D',
    tags: ['cassini', 'digitale transformation'],
    first_publication_date: '2019-04-05T13:08:37+0000',
    last_publication_date: '2019-04-05T13:08:37+0000',
    slugs: ['cassini_event_test'],
    linked_documents: [],
    lang: 'de-de',
    alternate_languages: [],
    data: {
      event_schema_start_date: '2019-04-24T17:00:00+0000',
      event_schema_end_date: '2019-04-23T20:00:00+0000',
      event_schema_location_city: 'Köln',
      event_schema_location_country: 'DE',
      teaser_dachzeile: null,
      teaser_uberschrift: [
        {
          type: 'heading1',
          text: 'Kongress e-nrw: Cassini engagiert sich als Strategiepartner',
          spans: [],
        },
      ],
      teaser_text: [
        {
          type: 'paragraph',
          text: 'Cassini begleitet die öffentliche Verwaltung und private Unternehmen bei der Konzeption und Umsetzung umfassender Sicherheitsstrategien und -maßnahmen.',
          spans: [],
        },
      ],
      teaser_link_text: 'Jetzt anmelden',
      teaser_bild: {
        MD: {},
        XS: {},
      },
    },
  },
];

export const eventsSlicePrimaryMock = {
  ankerlink_titel: 'events',
  kapitel: 'anzeigen',
  uberschrift: [
    {
      type: 'heading2',
      text: 'Events zu Digitale Transformation',
      spans: [],
    },
  ],
  text: [],
  tag: {
    id: 'XIJ4cREAAE5ISWiL',
    type: 'tag',
    tags: [],
    slug: 'digitale-transformation',
    lang: 'de-de',
    data: {
      tag: 'Digitale Transformation',
    },
    link_type: 'Document',
    isBroken: false,
  },
};

const EventsOverviewMock = [
  {
    teaser_uberschrift: [
      {
        type: 'heading1',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        spans: [],
      },
    ],
    teaser_text: [
      {
        type: 'paragraph',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.',
        spans: [],
      },
    ],
    link: {
      id: 'XEcyahAAACYAmkOz',
      uid: 'cassini--party',
      type: 'event',
      href: 'https://cassini.cdn.prismic.io/api/v2/documents/search?ref=XKdw-xEAACEAnirl&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XEcyahAAACYAmkOz%22%29+%5D%5D',
      tags: ['cassini'],
      first_publication_date: '2019-01-22T15:10:38+0000',
      last_publication_date: '2019-04-05T13:09:38+0000',
      slugs: ['event-cassini'],
      linked_documents: [
        {
          id: 'XEcyahAAACYAmkOz',
          tags: ['cassini'],
          type: 'event',
          slug: 'event-cassini',
          lang: 'de-de',
        },
      ],
      lang: 'de-de',
      alternate_languages: [],
      data: {
        event_schema_start_date: '2019-04-10T17:00:00+0000',
        event_schema_end_date: '2019-04-10T20:00:00+0000',
        event_schema_location_city: null,
        event_schema_location_country: null,
        teaser_dachzeile: null,
        teaser_uberschrift: [
          {
            type: 'heading1',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            spans: [],
          },
        ],
        teaser_text: [
          {
            type: 'paragraph',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.',
            spans: [],
          },
        ],
        teaser_link_text: 'zum Event',
        teaser_bild: {
          MD: {},
          XS: {},
        },
      },
    },
    teaser_link_text: 'zum Event',
    link_title: null,
    event_schema_start_date: '2019-04-10T17:00:00+0000',
    event_schema_location_city: null,
    event_schema_location_country: null,
  },
  {
    teaser_uberschrift: [
      {
        type: 'heading1',
        text: 'Kongress e-nrw: Cassini engagiert sich als Strategiepartner',
        spans: [],
      },
    ],
    teaser_text: [
      {
        type: 'paragraph',
        text: 'Cassini begleitet die öffentliche Verwaltung und private Unternehmen bei der Konzeption und Umsetzung umfassender Sicherheitsstrategien und -maßnahmen.',
        spans: [],
      },
    ],
    link: {
      id: 'XKdTTREAANQJnaYQ',
      uid: 'cassini--eventtest',
      type: 'event',
      href: 'https://cassini.cdn.prismic.io/api/v2/documents/search?ref=XKdw-xEAACEAnirl&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XKdTTREAANQJnaYQ%22%29+%5D%5D',
      tags: ['cassini', 'digitale transformation'],
      first_publication_date: '2019-04-05T13:08:37+0000',
      last_publication_date: '2019-04-05T13:08:37+0000',
      slugs: ['cassini_event_test'],
      linked_documents: [],
      lang: 'de-de',
      alternate_languages: [],
      data: {
        event_schema_start_date: '2019-04-24T17:00:00+0000',
        event_schema_end_date: '2019-04-23T20:00:00+0000',
        event_schema_location_city: 'Köln',
        event_schema_location_country: 'DE',
        teaser_dachzeile: null,
        teaser_uberschrift: [
          {
            type: 'heading1',
            text: 'Kongress e-nrw: Cassini engagiert sich als Strategiepartner',
            spans: [],
          },
        ],
        teaser_text: [
          {
            type: 'paragraph',
            text: 'Cassini begleitet die öffentliche Verwaltung und private Unternehmen bei der Konzeption und Umsetzung umfassender Sicherheitsstrategien und -maßnahmen.',
            spans: [],
          },
        ],
        teaser_link_text: 'Jetzt anmelden',
        teaser_bild: {
          MD: {},
          XS: {},
        },
      },
    },
    teaser_link_text: 'Jetzt anmelden',
    link_title: null,
    event_schema_start_date: '2019-04-24T17:00:00+0000',
    event_schema_location_city: 'Köln',
    event_schema_location_country: 'DE',
  },
  {
    teaser_uberschrift: [
      {
        type: 'heading1',
        text: 'Kongress e-nrw: Cassini engagiert sich als Strategiepartner',
        spans: [],
      },
    ],
    teaser_text: [
      {
        type: 'paragraph',
        text: 'Cassini begleitet die öffentliche Verwaltung und private Unternehmen bei der Konzeption und Umsetzung umfassender Sicherheitsstrategien und -maßnahmen.',
        spans: [],
      },
    ],
    link: {
      id: 'XKdTTREAANQJnaYQ',
      uid: 'cassini--eventtest',
      type: 'event',
      href: 'https://cassini.cdn.prismic.io/api/v2/documents/search?ref=XKdw-xEAACEAnirl&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XKdTTREAANQJnaYQ%22%29+%5D%5D',
      tags: ['cassini', 'digitale transformation'],
      first_publication_date: '2019-04-05T13:08:37+0000',
      last_publication_date: '2019-04-05T13:08:37+0000',
      slugs: ['cassini_event_test'],
      linked_documents: [],
      lang: 'de-de',
      alternate_languages: [],
      data: {
        event_schema_start_date: '2019-04-24T17:00:00+0000',
        event_schema_end_date: '2019-04-23T20:00:00+0000',
        event_schema_location_city: 'Köln',
        event_schema_location_country: 'DE',
        teaser_dachzeile: null,
        teaser_uberschrift: [
          {
            type: 'heading1',
            text: 'Kongress e-nrw: Cassini engagiert sich als Strategiepartner',
            spans: [],
          },
        ],
        teaser_text: [
          {
            type: 'paragraph',
            text: 'Cassini begleitet die öffentliche Verwaltung und private Unternehmen bei der Konzeption und Umsetzung umfassender Sicherheitsstrategien und -maßnahmen.',
            spans: [],
          },
        ],
        teaser_link_text: 'Jetzt anmelden',
        teaser_bild: {
          MD: {},
          XS: {},
        },
      },
    },
    teaser_link_text: 'Jetzt anmelden',
    link_title: null,
    event_schema_start_date: '2019-04-24T17:00:00+0000',
    event_schema_location_city: 'Köln',
    event_schema_location_country: 'DE',
  },
  {
    teaser_uberschrift: [
      {
        type: 'heading1',
        text: 'Kongress e-nrw: Cassini engagiert sich als Strategiepartner',
        spans: [],
      },
    ],
    teaser_text: [
      {
        type: 'paragraph',
        text: 'Cassini begleitet die öffentliche Verwaltung und private Unternehmen bei der Konzeption und Umsetzung umfassender Sicherheitsstrategien und -maßnahmen.',
        spans: [],
      },
    ],
    link: {
      id: 'XKdTTREAANQJnaYQ',
      uid: 'cassini--eventtest',
      type: 'event',
      href: 'https://cassini.cdn.prismic.io/api/v2/documents/search?ref=XKdw-xEAACEAnirl&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XKdTTREAANQJnaYQ%22%29+%5D%5D',
      tags: ['cassini', 'digitale transformation'],
      first_publication_date: '2019-04-05T13:08:37+0000',
      last_publication_date: '2019-04-05T13:08:37+0000',
      slugs: ['cassini_event_test'],
      linked_documents: [],
      lang: 'de-de',
      alternate_languages: [],
      data: {
        event_schema_start_date: '2019-04-24T17:00:00+0000',
        event_schema_end_date: '2019-04-23T20:00:00+0000',
        event_schema_location_city: 'Köln',
        event_schema_location_country: 'DE',
        teaser_dachzeile: null,
        teaser_uberschrift: [
          {
            type: 'heading1',
            text: 'Kongress e-nrw: Cassini engagiert sich als Strategiepartner',
            spans: [],
          },
        ],
        teaser_text: [
          {
            type: 'paragraph',
            text: 'Cassini begleitet die öffentliche Verwaltung und private Unternehmen bei der Konzeption und Umsetzung umfassender Sicherheitsstrategien und -maßnahmen.',
            spans: [],
          },
        ],
        teaser_link_text: 'Jetzt anmelden',
        teaser_bild: {
          MD: {},
          XS: {},
        },
      },
    },
    teaser_link_text: 'Jetzt anmelden',
    link_title: null,
    event_schema_start_date: '2019-04-24T17:00:00+0000',
    event_schema_location_city: 'Köln',
    event_schema_location_country: 'DE',
  },
  {
    teaser_uberschrift: [
      {
        type: 'heading1',
        text: 'Kongress e-nrw: Cassini engagiert sich als Strategiepartner',
        spans: [],
      },
    ],
    teaser_text: [
      {
        type: 'paragraph',
        text: 'Cassini begleitet die öffentliche Verwaltung und private Unternehmen bei der Konzeption und Umsetzung umfassender Sicherheitsstrategien und -maßnahmen.',
        spans: [],
      },
    ],
    link: {
      id: 'XKdTTREAANQJnaYQ',
      uid: 'cassini--eventtest',
      type: 'event',
      href: 'https://cassini.cdn.prismic.io/api/v2/documents/search?ref=XKdw-xEAACEAnirl&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XKdTTREAANQJnaYQ%22%29+%5D%5D',
      tags: ['cassini', 'digitale transformation'],
      first_publication_date: '2019-04-05T13:08:37+0000',
      last_publication_date: '2019-04-05T13:08:37+0000',
      slugs: ['cassini_event_test'],
      linked_documents: [],
      lang: 'de-de',
      alternate_languages: [],
      data: {
        event_schema_start_date: '2019-04-24T17:00:00+0000',
        event_schema_end_date: '2019-04-23T20:00:00+0000',
        event_schema_location_city: 'Köln',
        event_schema_location_country: 'DE',
        teaser_dachzeile: null,
        teaser_uberschrift: [
          {
            type: 'heading1',
            text: 'Kongress e-nrw: Cassini engagiert sich als Strategiepartner',
            spans: [],
          },
        ],
        teaser_text: [
          {
            type: 'paragraph',
            text: 'Cassini begleitet die öffentliche Verwaltung und private Unternehmen bei der Konzeption und Umsetzung umfassender Sicherheitsstrategien und -maßnahmen.',
            spans: [],
          },
        ],
        teaser_link_text: 'Jetzt anmelden',
        teaser_bild: {
          MD: {},
          XS: {},
        },
      },
    },
    teaser_link_text: 'Jetzt anmelden',
    link_title: null,
    event_schema_start_date: '2019-04-24T17:00:00+0000',
    event_schema_location_city: 'Köln',
    event_schema_location_country: 'DE',
  },
  {
    teaser_uberschrift: [
      {
        type: 'heading1',
        text: 'Kongress e-nrw: Cassini engagiert sich als Strategiepartner',
        spans: [],
      },
    ],
    teaser_text: [
      {
        type: 'paragraph',
        text: 'Cassini begleitet die öffentliche Verwaltung und private Unternehmen bei der Konzeption und Umsetzung umfassender Sicherheitsstrategien und -maßnahmen.',
        spans: [],
      },
    ],
    link: {
      id: 'XKdTTREAANQJnaYQ',
      uid: 'cassini--eventtest',
      type: 'event',
      href: 'https://cassini.cdn.prismic.io/api/v2/documents/search?ref=XKdw-xEAACEAnirl&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XKdTTREAANQJnaYQ%22%29+%5D%5D',
      tags: ['cassini', 'digitale transformation'],
      first_publication_date: '2019-04-05T13:08:37+0000',
      last_publication_date: '2019-04-05T13:08:37+0000',
      slugs: ['cassini_event_test'],
      linked_documents: [],
      lang: 'de-de',
      alternate_languages: [],
      data: {
        event_schema_start_date: '2019-04-24T17:00:00+0000',
        event_schema_end_date: '2019-04-23T20:00:00+0000',
        event_schema_location_city: 'Köln',
        event_schema_location_country: 'DE',
        teaser_dachzeile: null,
        teaser_uberschrift: [
          {
            type: 'heading1',
            text: 'Kongress e-nrw: Cassini engagiert sich als Strategiepartner',
            spans: [],
          },
        ],
        teaser_text: [
          {
            type: 'paragraph',
            text: 'Cassini begleitet die öffentliche Verwaltung und private Unternehmen bei der Konzeption und Umsetzung umfassender Sicherheitsstrategien und -maßnahmen.',
            spans: [],
          },
        ],
        teaser_link_text: 'Jetzt anmelden',
        teaser_bild: {
          MD: {},
          XS: {},
        },
      },
    },
    teaser_link_text: 'Jetzt anmelden',
    link_title: null,
    event_schema_start_date: '2019-04-24T17:00:00+0000',
    event_schema_location_city: 'Köln',
    event_schema_location_country: 'DE',
  },
  {
    teaser_uberschrift: [
      {
        type: 'heading1',
        text: 'Kongress e-nrw: Cassini engagiert sich als Strategiepartner',
        spans: [],
      },
    ],
    teaser_text: [
      {
        type: 'paragraph',
        text: 'Cassini begleitet die öffentliche Verwaltung und private Unternehmen bei der Konzeption und Umsetzung umfassender Sicherheitsstrategien und -maßnahmen.',
        spans: [],
      },
    ],
    link: {
      id: 'XKdTTREAANQJnaYQ',
      uid: 'cassini--eventtest',
      type: 'event',
      href: 'https://cassini.cdn.prismic.io/api/v2/documents/search?ref=XKdw-xEAACEAnirl&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XKdTTREAANQJnaYQ%22%29+%5D%5D',
      tags: ['cassini', 'digitale transformation'],
      first_publication_date: '2019-04-05T13:08:37+0000',
      last_publication_date: '2019-04-05T13:08:37+0000',
      slugs: ['cassini_event_test'],
      linked_documents: [],
      lang: 'de-de',
      alternate_languages: [],
      data: {
        event_schema_start_date: '2019-04-24T17:00:00+0000',
        event_schema_end_date: '2019-04-23T20:00:00+0000',
        event_schema_location_city: 'Köln',
        event_schema_location_country: 'DE',
        teaser_dachzeile: null,
        teaser_uberschrift: [
          {
            type: 'heading1',
            text: 'Kongress e-nrw: Cassini engagiert sich als Strategiepartner',
            spans: [],
          },
        ],
        teaser_text: [
          {
            type: 'paragraph',
            text: 'Cassini begleitet die öffentliche Verwaltung und private Unternehmen bei der Konzeption und Umsetzung umfassender Sicherheitsstrategien und -maßnahmen.',
            spans: [],
          },
        ],
        teaser_link_text: 'Jetzt anmelden',
        teaser_bild: {
          MD: {},
          XS: {},
        },
      },
    },
    teaser_link_text: 'Jetzt anmelden',
    link_title: null,
    event_schema_start_date: '2019-04-24T17:00:00+0000',
    event_schema_location_city: 'Köln',
    event_schema_location_country: 'DE',
  },
  {
    teaser_uberschrift: [
      {
        type: 'heading1',
        text: 'Kongress e-nrw: Cassini engagiert sich als Strategiepartner',
        spans: [],
      },
    ],
    teaser_text: [
      {
        type: 'paragraph',
        text: 'Cassini begleitet die öffentliche Verwaltung und private Unternehmen bei der Konzeption und Umsetzung umfassender Sicherheitsstrategien und -maßnahmen.',
        spans: [],
      },
    ],
    link: {
      id: 'XKdTTREAANQJnaYQ',
      uid: 'cassini--eventtest',
      type: 'event',
      href: 'https://cassini.cdn.prismic.io/api/v2/documents/search?ref=XKdw-xEAACEAnirl&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XKdTTREAANQJnaYQ%22%29+%5D%5D',
      tags: ['cassini', 'digitale transformation'],
      first_publication_date: '2019-04-05T13:08:37+0000',
      last_publication_date: '2019-04-05T13:08:37+0000',
      slugs: ['cassini_event_test'],
      linked_documents: [],
      lang: 'de-de',
      alternate_languages: [],
      data: {
        event_schema_start_date: '2019-04-24T17:00:00+0000',
        event_schema_end_date: '2019-04-23T20:00:00+0000',
        event_schema_location_city: 'Köln',
        event_schema_location_country: 'DE',
        teaser_dachzeile: null,
        teaser_uberschrift: [
          {
            type: 'heading1',
            text: 'Kongress e-nrw: Cassini engagiert sich als Strategiepartner',
            spans: [],
          },
        ],
        teaser_text: [
          {
            type: 'paragraph',
            text: 'Cassini begleitet die öffentliche Verwaltung und private Unternehmen bei der Konzeption und Umsetzung umfassender Sicherheitsstrategien und -maßnahmen.',
            spans: [],
          },
        ],
        teaser_link_text: 'Jetzt anmelden',
        teaser_bild: {
          MD: {},
          XS: {},
        },
      },
    },
    teaser_link_text: 'Jetzt anmelden',
    link_title: null,
    event_schema_start_date: '2019-04-24T17:00:00+0000',
    event_schema_location_city: 'Köln',
    event_schema_location_country: 'DE',
  },
];

export default EventsOverviewMock;
