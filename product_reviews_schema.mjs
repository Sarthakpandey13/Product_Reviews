export const productReviewsSchema = {
    feed: {
      $: {
        'xmlns:vc': 'http://www.w3.org/2007/XMLSchema-versioning',
        'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
        'xsi:noNamespaceSchemaLocation': 'http://www.google.com/shopping/reviews/schema/product/2.3/product_reviews.xsd'
      },
      version: '2.3',
      aggregator: {
        name: 'Sample Reviews Aggregator (if applicable)'
      },
      publisher: {
        name: 'Sample Retailer',
        favicon: 'http://www.example.com/favicon.png'
      },
      reviews: {
        review: []
      }
    }
  };
  