const EventBanderoleSliceMock = {
  anmeldelink: {
    link_type: 'Web',
    url: 'https://example.com',
  },
  anmeldelink_text: 'Jetzt anmelden',
  anmeldelink_title: 'Melden Sie sich an!',
  ort: [
    {
      type: 'heading3',
      text: 'Ort',
      spans: [],
    },
    {
      type: 'paragraph',
      text: 'Maritim Hotel\nHeumarkt 20,\n50667 Köln\nDeutschland',
      spans: [],
    },
  ],
  datum: [
    {
      type: 'heading3',
      text: 'Datum & Zeit',
      spans: [],
    },
    {
      type: 'paragraph',
      text: '31.10.2018 - 02.10.2018\n08:00 - 17:00 Uhr\n08:00 - 12:00 Uhr',
      spans: [],
    },
  ],
  zusatzinformation: [
    {
      type: 'heading3',
      text: 'Tickets für',
      spans: [],
    },
    {
      type: 'paragraph',
      text: '500 Personen',
      spans: [],
    },
  ],
};
export const EventBanderoleSliceMockNoBtn = {
  anmeldelink: {
    link_type: 'Any',
  },
  anmeldelink_text: null,
  anmeldelink_title: null,
  ort: [
    {
      type: 'heading3',
      text: 'Ort',
      spans: [],
    },
    {
      type: 'paragraph',
      text: 'Maritim Hotel\nHeumarkt 20,\n50667 Köln\nDeutschland',
      spans: [],
    },
  ],
  datum: [
    {
      type: 'heading3',
      text: 'Datum & Zeit',
      spans: [],
    },
    {
      type: 'paragraph',
      text: '31.10.2018 - 02.10.2018\n08:00 - 17:00 Uhr\n08:00 - 12:00 Uhr',
      spans: [],
    },
  ],
  zusatzinformation: [
    {
      type: 'heading3',
      text: 'Tickets für',
      spans: [],
    },
    {
      type: 'paragraph',
      text: '500 Personen',
      spans: [],
    },
  ],
};
export default EventBanderoleSliceMock;
