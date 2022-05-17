import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x935bC28891D4587B5c534feA90347c7636908a32");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Decentrament Stage-1",
        description: "This NFT will give you access to DecentramentDAO!",
        image: readFileSync("scripts/assets/elite.mp4"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();