import { uploadCSV } from './schema/csv-dynamodb.mjs';
import { getProductId } from './schema/get-productid.mjs';
import { getReviewId } from './schema/get-reviewid.mjs';
import { insertDynamoDB } from './schema/insert-dynamodb.mjs';
import { putDynamoDB } from './schema/put-dynamodb.mjs';
import { updateDynamoDB } from './schema/update-dynamodb.mjs';
import { xmlDynamoDB } from './schema/xml-dynamodb.mjs';

export const uploadCSVHandler = async (event) => {
  try {
    return await uploadCSV(event);
  } catch (error) {
    console.error('Error in uploadCSVHandler:', error);
    throw error;
  }
};

export const getProductIdHandler = async (event) => {
  try {
    return await getProductId(event);
  } catch (error) {
    console.error('Error in getProductIdHandler:', error);
    throw error;
  }
};

export const getReviewIdHandler = async (event) => {
  try {
    return await getReviewId(event);
  } catch (error) {
    console.error('Error in getReviewIdHandler:', error);
    throw error;
  }
};

export const insertDynamoDBHandler = async (event) => {
  try {
    return await insertDynamoDB(event);
  } catch (error) {
    console.error('Error in insertDynamoDBHandler:', error);
    throw error;
  }
};

export const putDynamoDBHandler = async (event) => {
  try {
    return await putDynamoDB(event);
  } catch (error) {
    console.error('Error in putDynamoDBHandler:', error);
    throw error;
  }
};

export const updateDynamoDBHandler = async (event) => {
  try {
    return await updateDynamoDB(event);
  } catch (error) {
    console.error('Error in updateDynamoDBHandler:', error);
    throw error;
  }
};

export const xmlDynamoDBHandler = async (event) => {
  try {
    return await xmlDynamoDB(event);
  } catch (error) {
    console.error('Error in xmlDynamoDBHandler:', error);
    throw error;
  }
};