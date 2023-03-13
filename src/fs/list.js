import fs from "fs/promises";
import path from "path";
import * as url from "url";


const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const dir = "files";

const list = async () => {
    let arr = await fs.readdir(__dirname);
    if(!arr.includes(dir))
    {
        console.log("FS operation failed");
    }
    else 
    {
        arr = await fs.readdir(path.join(__dirname, dir));
        for (let i = 0; i < arr.length; i++) {
            console.log(arr.at(i));
        }
    }
};

await list();