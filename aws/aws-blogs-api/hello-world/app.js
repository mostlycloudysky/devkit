const axios = require('axios')
let response;

/**
 * Amazon API URL : https://aws.amazon.com/api/dirs/items/search?item.directoryId=blog-posts&sort_by=item.additionalFields.createdDate&sort_order=desc&size=10&item.locale=en_US
 */

exports.lambdaHandler = async (event, context) => {
    const url = "https://aws.amazon.com/api/dirs/items/search?item.directoryId=blog-posts&sort_by=item.additionalFields.createdDate&sort_order=desc&size=10&item.locale=en_US"

    try {
        const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'AWS Blogs API Data',
                location: ret.data
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
