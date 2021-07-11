const { readdir } = require('fs');
const {join}=require('path');
module.exports = function () {
    return new Promise((res, rej) => {
        readdir(join(__dirname,'./media'), (err, files) => {
            if (!err) {
                res(files);
            } else {
                rej(err);
            }
        })
    })
}


