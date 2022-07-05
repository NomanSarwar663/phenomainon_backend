const fs = require('fs');
const multer = require('multer')
const path = require('path');
const AWS = require('aws-sdk')
const multerS3 = require('multer-s3')


const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.SECRET_KEY
});

// const storage = multerS3({
//     s3: s3,
//     bucket: process.env.BUCKET_NAME,
//     key: function (req, file, cb) {
//         const directory = file.fieldname;
//         const filePath = `uploads/${directory}/${file.originalname}`;
//         cb(null, filePath)
//     }
//   })

module.exports.fileUpload = multer({
    storage:multerS3({
        s3: s3,
        bucket: process.env.BUCKET_NAME,
        key: function (req, file, cb) {
            const directory = file.fieldname;
            const filePath = directory+"/"+ file.originalname;
            cb(null, filePath)
        }
      })
    })
