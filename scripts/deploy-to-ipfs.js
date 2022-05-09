const {create, globSource} = require("ipfs-http-client");
// const fs = require("fs");
require('dotenv').config()

async function uploadFile() {
  const ipfs = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    path: "api/v0",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.INFURA_PROJECT_ID + ":" + process.env.INFURA_PROJECT_SECRET
        ).toString("base64")
    }
  });


  async function upload(path, addFunction) {
    const file = fs.readFileSync(path);
    const addCall = await addFunction({ path: "build/", content: file });

    console.log(path, ":\n", addCall.cid);
    return addCall.cid;
  }

  const add = await ipfs.add("./build");
  console.log(add.cid);
//   return await upload("./build/", ipfs.add);
}

async function main() {
  console.log("Uploading file");
  const cid = await uploadFile();
  console.log("CID", cid);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
