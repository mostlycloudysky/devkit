import json
import requests
import html
import json
import os


def lambda_handler(event, context):

    parsed_blogs = []
    try:
        response = requests.get(
            "https://aws.amazon.com/api/dirs/items/search?item.directoryId=blog-posts&sort_by=item.additionalFields.createdDate&sort_order=desc&size=10&item.locale=en_US")

        blog_data = response.json()

        for item in blog_data["items"]:
            blog_item = item['item']
            additional_fields = blog_item["additionalFields"]
            item_url = additional_fields["link"]

        parsed_blogs.append({
            'item_url': item_url,
            'title': html.unescape(additional_fields['title']),
            'post_excerpt': html.unescape(additional_fields.get('postExcerpt', '')),
            'featured_image_url': additional_fields.get('featuredImageUrl'),
            'authors': html.unescape(json.loads(blog_item['author'])),
            'date_created': blog_item['dateCreated'],
            'date_updated': blog_item['dateUpdated'],
        })

    except requests.RequestException as e:
        # Send some context about this error to Lambda Logs
        print(e)

        raise e

    return {
        "statusCode": 200,
        "body": json.dumps({
            "data": json.dumps(parsed_blogs)
        }),
    }
