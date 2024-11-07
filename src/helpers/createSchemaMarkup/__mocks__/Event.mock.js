const EventSchemaMock = {
  __html: `{
          "@context": "http://schema.org",
          "@type": "BusinessEvent",
          "name": "Default Seitentitel",
          "performer": "",
          "description": "Das ist die Default-Beschreibung",
          "image": "",
          "startDate": "",
          "endDate": "",
          "location": {
            "@type": "Place",
            "name": "",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "",
              "addressLocality": "",
              "postalCode": "",
              "addressCountry": "DE"
            }
          }
        }`,
};

export default EventSchemaMock;
