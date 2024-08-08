export const productSchema = {
  TableName: '${self:custom.dynamoDBTableName}',
  AttributeDefinitions: [
    { AttributeName: 'reviewer_id', AttributeType: 'S' },
    { AttributeName: 'review_id', AttributeType: 'S' },
    { AttributeName: 'aggregator_name', AttributeType: 'S' },
    { AttributeName: 'publisher_name', AttributeType: 'S' },
    { AttributeName: 'publisher_favicon', AttributeType: 'S' },
    { AttributeName: 'reviewer_name', AttributeType: 'S' },
    { AttributeName: 'review_timestamp', AttributeType: 'S' },
    { AttributeName: 'title', AttributeType: 'S' },
    { AttributeName: 'content', AttributeType: 'S' },
    { AttributeName: 'pros', AttributeType: 'S' },
    { AttributeName: 'cons', AttributeType: 'S' },
    { AttributeName: 'review_url', AttributeType: 'S' },
    { AttributeName: 'reviewer_images', AttributeType: 'S' },
    { AttributeName: 'ratings_overall', AttributeType: 'N' },
    { AttributeName: 'product_ids_gtin', AttributeType: 'S' },
    { AttributeName: 'product_ids_mpn', AttributeType: 'S' },
    { AttributeName: 'product_ids_sku', AttributeType: 'S' },
    { AttributeName: 'product_ids_brand', AttributeType: 'S' },
    { AttributeName: 'product_ids_asin', AttributeType: 'S' },
    { AttributeName: 'product_name', AttributeType: 'S' },
    { AttributeName: 'product_url', AttributeType: 'S' },
    { AttributeName: 'is_spam', AttributeType: 'BOOL' },
    { AttributeName: 'collection_method', AttributeType: 'S' },
    { AttributeName: 'transaction_id', AttributeType: 'S' },
  ],
  KeySchema: [
    { AttributeName: 'reviewer_id', KeyType: 'HASH' }, // Partition key
    { AttributeName: 'review_id', KeyType: 'RANGE' }, // Sort key
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: 'product_ids_mpn-index',
      KeySchema: [{ AttributeName: 'product_ids_mpn', KeyType: 'HASH' }],
      Projection: { ProjectionType: 'ALL' },
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
};







































// export const productSchema = {
//   TableName: '${self:custom.dynamoDBTableName}',
//   AttributeDefinitions: [
//     { AttributeName: 'reviewer_id', AttributeType: 'S' },
//     { AttributeName: 'review_id', AttributeType: 'S' },
//     { AttributeName: 'aggregator_name', AttributeType: 'S' },
//     { AttributeName: 'publisher_name', AttributeType: 'S' },
//     { AttributeName: 'publisher_favicon', AttributeType: 'S' },
//     { AttributeName: 'reviewer_name', AttributeType: 'S' },
//     { AttributeName: 'review_timestamp', AttributeType: 'S' },
//     { AttributeName: 'title', AttributeType: 'S' },
//     { AttributeName: 'content', AttributeType: 'S' },
//     { AttributeName: 'pros', AttributeType: 'S' },
//     { AttributeName: 'cons', AttributeType: 'S' },
//     { AttributeName: 'review_url', AttributeType: 'S' },
//     { AttributeName: 'reviewer_images', AttributeType: 'S' },
//     { AttributeName: 'ratings_overall', AttributeType: 'N' },
//     { AttributeName: 'product_ids_gtin', AttributeType: 'S' },
//     { AttributeName: 'product_ids_mpn', AttributeType: 'S' },
//     { AttributeName: 'product_ids_sku', AttributeType: 'S' },
//     { AttributeName: 'product_ids_brand', AttributeType: 'S' },
//     { AttributeName: 'product_ids_asin', AttributeType: 'S' },
//     { AttributeName: 'product_name', AttributeType: 'S' },
//     { AttributeName: 'product_url', AttributeType: 'S' },
//     { AttributeName: 'is_spam', AttributeType: 'BOOL' },
//     { AttributeName: 'collection_method', AttributeType: 'S' },
//     { AttributeName: 'transaction_id', AttributeType: 'S' },
//   ],
//   KeySchema: [
//     { AttributeName: 'reviewer_id', KeyType: 'HASH' }, // Partition key
//     { AttributeName: 'review_id', KeyType: 'RANGE' }, // Sort key
//   ],
//   GlobalSecondaryIndexes: [
//     {
//       IndexName: 'product_ids_mpn-index',
//       KeySchema: [{ AttributeName: 'product_ids_mpn', KeyType: 'HASH' }],
//       Projection: { ProjectionType: 'ALL' },
//       ProvisionedThroughput: {
//         ReadCapacityUnits: 1,
//         WriteCapacityUnits: 1,
//       },
//     },
//   ],
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 1,
//     WriteCapacityUnits: 1,
//   },
// };
