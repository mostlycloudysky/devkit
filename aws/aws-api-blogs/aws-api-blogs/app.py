import json
from traceback import print_tb
import requests
import html
import json
import os

HTTP_BLOG_URL = (
    'https://aws.amazon.com/api/dirs/items/search'
    '?item.directoryId=blog-posts&sort_by=item.additionalFields.createdDate'
    '&sort_order=desc&size=10&item.locale=en_US'
)


def lambda_handler(event, context):

    print(event["queryStringParameters"]['page'])

    qs = event["queryStringParameters"]['page']

    api_url = HTTP_BLOG_URL + f'&page={qs}'
    parsed_blogs = []
    try:
        response = requests.get(api_url)

        blog_data = response.json()

        for item in blog_data["items"]:
            blog_item = item['item']
            additional_fields = blog_item["additionalFields"]
            categories = []
            for tag in item['tags']:
                if tag['tagNamespaceId'] == 'blog-posts#category':
                    description = json.loads(tag['description'])
                    if not description['name'].startswith('*'):
                        categories.append(html.unescape(description['name']))

            parsed_blogs.append({
                'item_url': additional_fields["link"],
                'title': html.unescape(additional_fields['title']),
                'categories': categories,
                'post_excerpt': html.unescape(additional_fields.get('postExcerpt', '')),
                'featured_image_url': additional_fields.get('featuredImageUrl'),
                'authors': html.unescape(json.loads(blog_item['author'])),
                'date_created': blog_item['dateCreated'],
                'date_updated': blog_item['dateUpdated'],
                'id': blog_item['id']
            })

            print(parsed_blogs)

    except requests.RequestException as e:
        # Send some context about this error to Lambda Logs
        print(e)

        raise e

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        "body": json.dumps({
            "data": parsed_blogs
        }),
    }
