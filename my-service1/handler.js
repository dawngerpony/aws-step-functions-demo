'use strict';
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

module.exports.hello = (event, context, callback) => {
    console.log(event);
    const eventBody = JSON.parse(event.body);
    var params = {
        Bucket: eventBody.bucket,  // 2
    };
    s3.listObjectsV2(params, function(err, data) {  // 3
        if (err) {
            console.log(err, err.stack);
        } else {
            const response = getFilenames(data);
            callback(null, response);
        }
    });
};

function getFilenames(data) {
    const filenames = data['Contents'].map(a => a.Key);
    const output = JSON.stringify({
        "filenames": filenames
        // "bucket_list": data // 4
    });
    const response = {
        statusCode: 200,
        body: output,
    };
    return response;
}
