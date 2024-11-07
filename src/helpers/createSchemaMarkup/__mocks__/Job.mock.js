const JobSchemaMock = {
  __html: `{
        "@context": "http://schema.org",
        "@type": "JobPosting",
        "datePosted": "null",
        "title": "Default Seitentitel",
        "description": "Das ist die Default-Beschreibung",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Cassini"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "null"
          }
        }
      }`,
};

export default JobSchemaMock;
