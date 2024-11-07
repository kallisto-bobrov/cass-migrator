import dotenv from 'dotenv'
dotenv.config()

async function init() {
  //return res.status(200).json({ ok: true });
  //Get all types
  const typesRes = await fetch(
    "https://customtypes.prismic.io/customtypes",
    {
      headers: {
        repository: process.env.Src_Repository,
        Authorization: `Bearer ${process.env.Src_Write_Token}`,
      },
    }
  );
  const types = await typesRes.json();

  // migrate all types
  for (let i = 0; i < types.length; i++) {
    await fetch("https://customtypes.prismic.io/customtypes/insert", {
      method: "POST",
      headers: {
        repository: process.env.Dest_Repository,
        Authorization: `Bearer ${process.env.Dest_Write_Token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(types[i]),
    });
  }
}

init();