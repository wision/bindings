const fs = require('fs');

// clean up binaries for all but current platform
fs.readdir(__dirname, (err, files) => {
    if (err) {
        return;
    }

    for (const file of files) {
        if (file.match(/^uws_.*\.node$/) && !file.includes(process.platform + '_' + process.versions.modules)) {
            fs.unlinkSync(file)
        }
    }
});
