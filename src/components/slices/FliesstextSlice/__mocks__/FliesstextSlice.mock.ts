const FliesstextSliceMock = {
  ankerlink_titel: 'slice-2',
  kapitel: 'anzeigen',
  uberschrift: [
    {
      type: 'heading2',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      spans: [],
    },
  ],
  textgrosse: 'gross',
  text: [
    {
      type: 'heading3',
      text: 'Ich bin eine H3',
      spans: [],
    },
    {
      type: 'paragraph',
      text: 'Cassini wurde gegründet, weil wir glauben, dass Digitalisierung und Disruption eine neue Form der Beratung erfordert. Visionär denken. Unternehmerisch handeln. Wegweisend führen. Visionär: geprägt von Pioniergeist und Mut. Unternehmerisch: Mit Beratern, die echte Entrepreneure sind, Verantwortung tragen und für ihr Handeln geradestehen. Wegweisend: Mit dem Wissen um innovative Technologien und Strategien, um sie gezielt für den Wettbewerbsvorsprung unserer Klienten einzusetzen.',
      spans: [
        {
          start: 339,
          end: 407,
          type: 'em',
        },
      ],
    },
    {
      type: 'heading4',
      text: 'Ich bin eine H4',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'lorem ipsum',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Ipsum Lorem',
      spans: [],
    },
    {
      type: 'paragraph',
      text: 'Ich bin eine weitere H4',
      spans: [],
    },
    {
      type: 'o-list-item',
      text: 'Lorem ipsum',
      spans: [],
    },
    {
      type: 'o-list-item',
      text: 'Ipsum Lorem in dubio pro reo',
      spans: [],
    },
  ],
};
export default FliesstextSliceMock;
