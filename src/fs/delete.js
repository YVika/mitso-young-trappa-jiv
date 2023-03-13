import fs from "fs/promises";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const remove = async () => {
    try{
        await fs.rm(path.resolve(__dirname,'files','fileToRemove.txt'), {}, (err) => {
            if(err) throw err;
            console.log('Removing completed');
        });
    }
    catch(err){
        console.log("FS operation failed")
    }
};

await remove();