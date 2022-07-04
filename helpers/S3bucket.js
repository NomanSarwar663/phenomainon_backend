const AWS = require('aws-sdk')
const fs = require('fs');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.SECRET_KEY
});

const S3Bucket =  async (filePath)=>{
    
// //configuring parameters
//     const params = {
//             Bucket: process.env.BUCKET_NAME,
//             Key: filePath, // File name you want to save as in S3
//             Body: fs.createReadStream(filePath)
//         };
//     s3.upload(params, function (err, data) {
//             //handle error
//             if (err) {
//               console.log("Error", err);
//             }
          
//             //success
//             if (data) {
//               console.log("Uploaded in:", data.Location);
//               return res.json({path : data.Location})
              
              
//             }
//           });
}

module.exports = {
    S3Bucket
}