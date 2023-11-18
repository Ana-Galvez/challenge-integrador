const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage ({
    destination: (req, file, cb) => cb(null,path.resolve(__dirname,'../../public/img')),
    filename: (req, file, cb) => cb(null, Date.now() + '_' + file.originalname )
})

const uploadfile =  multer({storage })

module.exports = uploadfile;