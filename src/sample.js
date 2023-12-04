import content from './content.txt';
import * as fs from 'fs';
import * as path from 'path';
function sample(){
    console.log("Hello World");
    const c = fs.readFileSync(content);
    const d = document.createElement("div");
    d.innerText = c;
    document.body.append(d);
}

export default sample;