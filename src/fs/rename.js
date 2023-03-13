import fs from "fs/promises";
import path from "path";
import * as url from "url";


const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const dir = "files";
const newName = "properFilename.md";
const oldName = "wrongFilename.txt";

const rename = async () => {
    let arr = await fs.readdir(path.join(__dirname, dir));
    if(arr.includes(!oldName))
    {
        console.log("FS operation failed");
    }
    else if(arr.includes(newName))
    {
        console.log("FS operation failed");
    }
    else
    {
        await fs.rename(path.join(__dirname, dir, oldName), path.join(__dirname, dir, newName));
    }
};

await rename();