'use strict';
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

module.exports.hello = (event, context, callback) => {
    console.log(event);
    const eventBody = JSON.parse(event.body);
    var params = {
        // Bucket: 'step-function-test1',  // 2
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

    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //         message: 'Go Serverless v1.0! Your function executed successfully!',
    //         input: event,
    //     }),
    // };
    //
    // callback(null, response);

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
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
