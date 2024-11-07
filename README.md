This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## !!Do Not Override Custom Types in Prismic Repo!!

When the Prismic-Next project is initialized with the Prismic Slicemachine, all CustomType models are initially stored as JSON in the [customtypes/](customtypes/) folder.

If CustomTypes are changed later in Prismic, they are not synchronized with the models in the code repo.

When running the Slicemachine, it indicates that there are changes. However, these refer to the old state in the code, which differs from Prismic. The Prismic state is not recognized as a new state. Synchronizing through the Slicemachine UI will overwrite the old code state with the new Prismic state, causing new slices to be permanently lost.

**!! Creating new "Legacy Slices" can still happen in Prismic. However, the CustomTypes in the code repo must be manually updated by copying the new JSON structure from Prismic and pasting it into the CustomType JSON files. !!**

**!! If one considers reinitializing the Slicemachine in the existing project (to update, etc.), the existing CustomTypes will automatically be synchronized !!**

## !!Keep Link Resolving Intact!!

Hierarchical navigation structures in Prismic are implemented through content relationship fields. A CustomType receives such a field, which establishes the relationship to a parent CustomType. For link resolving to work in Prismic, such a field must be limited to one CustomType; otherwise, you will receive an error message from the link resolver when starting the app:

```
Error: [Link resolver error] Invalid resolver category. It must be a content relationship linked to one and only one custom type.
```

The Prismic routing is configured in [src/prismicio.ts](src/prismicio.ts).

## Prismic and static site generation
The app uses Prismic as a headless CMS. The data for some routes is fetched at build time and statically generated.
To make sure the data is up-to-date, the app uses a Prismic webhook to trigger a rebuild when content changes in Prismic.

### Webhook handler
The webhook handler is implemented in https://github.com/kallisto-consulting/cassini-24-webhook-handler and hosted on Heroku: https://dashboard.heroku.com/apps/cassini-prismic-webhook-handle.
The webhook handler triggers a dispatch event in the GitHub repository, which triggers the `Deploy on Despatch` GitHub workflow. 

## Deploy
The app is hosted on Heroku: https://dashboard.heroku.com/apps/cassini-consulting-prod-env and connected to the GitHub repository.
The app is automatically deployed when changes are pushed to the `main` branch.
Please use feature branches for development and create a pull request to merge changes into `main`.

### Deploy on Despatch – GitHub Workflow
The workflow deploys the app to Heroku. 

It is defined in [.github/workflows/main.yml](.github/workflows/main.yml).

## Generate Redirects
* The app uses the `next.config.js` file to define redirects.
* Use `npm run convert-redirects <your-redirect-file.txt>` to convert a list of redirects to the format used in the `next.config.js` file.
* Provide a txt file in the format you find in [scripts/convertRedirects/src/redirects-22-08-24.txt](scripts/convertRedirects/src/redirects-22-08-24.txt).
* Put this file in the folder [scripts/convertRedirects/src/](scripts/convertRedirects/src/).
* Make sure that the line separator of this file is set to LF!
* Run `npm run convert-redirects <your-redirect-file.txt>`.
* The script will generate a new json file in [scripts/convertRedirects/dist/](scripts/convertRedirects/dist/). 
* IMPORTANT!: check the new json file - every "destination" value must inculde "https://" in the beginning! (e.g. "destination": "https://www.cassini.de/leistungen/transformations-und-organisationsberatung") - "destination": "www.cassini.de/leistungen/transformations-und-organisationsberatung" would cause a 500 error.
* Import the json file in the `next.config.js` file.
* IMPORTANT: If a redirect url contains a query parameter, you have to use the `getRedirects` Method in [src/redirects.mjs](src/redirects.mjs).
