const mF = require('./functions');
// mF significa "My Functions"
const path = require('path');

const dirpath = path.join(__dirname, 'data', 'sub');

mF.readDir(dirpath).then(files => 
    mF.endWith(files, ".srt"))
    .then(fileSRT=>mF.readFiles(fileSRT))
    .then(content=>content.join('\n'))
    .then(allcontent=>allcontent.split('\n'))
    .then(mF.removeIfEmpty)
    .then(line=>mF.removeIfHas(line, '-->'))
    .then(mF.removeIfNumber)
    .then(console.log);

