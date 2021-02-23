
const fs = require('fs');

const folderName = process.argv[2] || 'Projects';

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('in the callback...');
//     if (err) throw err;
// });

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/Pets.html`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
    fs.writeFileSync(`${folderName}/petApp.js`, '')
} catch (e) {
    console.log('something went wrong!');
    console.log(e);
}


