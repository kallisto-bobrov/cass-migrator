const PrismicCopyTextMock = {
  text: [
    { type: 'heading1', text: 'Das ist eine H1', spans: [] },
    { type: 'heading2', text: 'Das ist eine H2', spans: [] },
    { type: 'heading3', text: 'Das ist eine H3', spans: [] },
    { type: 'heading4', text: 'Das ist eine H4', spans: [] },
    {
      type: 'paragraph',
      text: 'Dies ist ein Text, welcher von der Prismic-Richtext-Render-Componete verarbeitet wird. Das Wort "bold" muss fett und das Wort "itallic" kursiv sein. Das ist ein Link.',
      spans: [
        {
          end: 102,
          start: 96,
          type: 'strong',
        },
        {
          end: 136,
          start: 126,
          type: 'em',
        },
        {
          data: {
            link_type: 'Web',
            target: '_blank',
            url: 'https://example.com',
          },
          end: 189,
          start: 161,
          type: 'hyperlink',
        },
      ],
    },
    { type: 'paragraph', text: 'Unordered List:', spans: [] },
    { type: 'list-item', text: 'Erster Punkt', spans: [] },
    { type: 'list-item', text: 'Zweiter Punkt', spans: [] },
    { type: 'paragraph', text: 'Ordered List:', spans: [] },
    { type: 'o-list-item', text: 'Erster Punkt', spans: [] },
    { type: 'o-list-item', text: 'Zweiter Punkt', spans: [] },
  ],
};

export default PrismicCopyTextMock;
