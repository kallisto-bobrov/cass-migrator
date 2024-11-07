import fsPromises from 'fs/promises';

export const convertRedirects = async () => {
  console.log(process.argv);
  try {
    const contents = await fsPromises.readFile(
      `./scripts/convertRedirects/src/${process.argv[2]}`,
      'utf-8',
    );
    const lines = contents.trim().split(/\n|\r/g);
    let list = [];
    let status = 'from';
    lines.forEach((line, i) => {
      if (line === 'von:') {
        status = 'from';
        list.push({ from: [] });
      } else if (line === 'zu:') {
        status = 'to';
        list[list.length - 1] = { ...list[list.length - 1], to: [] };
      } else if (status === 'from') {
        const transformedLine = line
          .replace('https://www.cassini.de/', '/')
          .replace('https://cassini.de', '/');
        list[list.length - 1].from.push(transformedLine);
      } else if (status === 'to') {
        list[list.length - 1].to.push(line);
      }
    });
    const redirects = listToRedirects(list);
    const redirectsText = JSON.stringify(redirects, null, 2);
    await fsPromises.writeFile(
      `./scripts/convertRedirects/dist/${process.argv[2].replace('.txt', '.json')}`,
      redirectsText,
    );
  } catch (e) {
    console.error(e);
  }
};

function listToRedirects(list) {
  const redirects = list.map(({ from, to }) => {
    return from.map((item) => {
      return {
        source: item,
        destination: to[0],
        permanent: true,
      };
    });
  });
  return redirects.flat();
}

convertRedirects();
