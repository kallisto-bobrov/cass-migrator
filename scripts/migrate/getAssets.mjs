import dotenv from 'dotenv';
dotenv.config();

const assetIds = [
  'XWewExQAACAAHLr9',
  'ZpkaeB5LeNNTxRbM',
  'Zf3LpccYqOFdyCY6',
  'ZnWMepbWFbowew97',
  'Zf3Rk8cYqOFdyCaV',
  'ZnlplpbWFbowezav',
  'ZnlqE5bWFbowezbJ',
  'ZkW-qSol0Zci9MOC',
  'ZkW-tyol0Zci9MOF',
  'ZnqlK5bWFbowe1ZU',
  'XPD-yREAACIA4jQ_',
];

async function init() {
  try {
    //Get all assets
    const myHeaders = new Headers();
    myHeaders.append('repository', process.env.Src_Repository);
    myHeaders.append('Authorization', `Bearer ${process.env.Src_Write_Token}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const ans = await fetch(
      'https://asset-api.prismic.io/assets?limit=4000',
      requestOptions,
    );
    const assets = await ans.text();
    const assetsJson = JSON.parse(assets);
    console.log(assetsJson.total);
    const filteredAssets = assetIds.map((id) => {
      return JSON.parse(assets).items.find((asset) => asset.id === id);
    });

    console.log(filteredAssets);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

init();
