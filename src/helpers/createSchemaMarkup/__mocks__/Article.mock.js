const ArticleSchemaMock = {
  __html: `{
        "@context": "http://schema.org",
        "@type": "Article",
        "author": "",
        "datePublished": "null",
        "headline": "Default Seitentitel",
        "description": "Das ist die Default-Beschreibung",
        "image": {
          "@type": "imageObject",
          "url": "https://cassini.cdn.prismic.io/cassini/0a98b6b30f5f923d44e30dd9920fd3132485b2ed_og_dummy.png",
          "height": "1200",
          "width": "627"
          },
        "publisher": {
          "@type": "Organization",
          "name": "Cassini",
          "logo": {
          "@type": "imageObject",
          "url": "https://wroomdev.s3.amazonaws.com/tutoblanktemplate%2F97109f41-140e-4dc9-a2c8-96fb10f14051_star.gif"
          }
         }
        }`,
};

export default ArticleSchemaMock;
