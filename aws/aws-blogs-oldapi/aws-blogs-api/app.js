const axios = require('axios')
let response;

let payload = {
"results":[]  
}

/**
 * Amazon API URL : https://aws.amazon.com/api/dirs/items/search?item.directoryId=blog-posts&sort_by=item.additionalFields.createdDate&sort_order=desc&size=10&item.locale=en_US
 */

exports.lambdaHandler = async (event, context) => {

    if (event.httpMethod !== 'GET') {
        throw new Error(`getMethod only accept GET method, you tried: ${event.httpMethod}`);
    }

    const page = event.queryStringParameters.page || 1

    const url = `https://aws.amazon.com/api/dirs/items/search?item.directoryId=blog-posts&sort_by=item.additionalFields.createdDate&sort_order=desc&size=10&item.locale=en_US&page=${page}`

    try {
        const ret = await axios(url);
        

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                data: ret.data
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
