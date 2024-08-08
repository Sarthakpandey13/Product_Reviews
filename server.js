
const express = require('express');
const multer = require('multer');
const csv = require('csv-parser');
const AWS = require('aws-sdk');
const stream = require('stream');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set up AWS DynamoDB
AWS.config.update({
    region: 'ap-south-1'
});
const dynamoDb = new AWS.DynamoDB.DocumentClient();

// Set up multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(bodyParser.json());

// Route to handle CSV file upload and processing
app.post('/upload-csv', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const results = [];
    const bufferStream = new stream.PassThrough();
    bufferStream.end(req.file.buffer);

    bufferStream.pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            try {
                await insertDataToDynamoDB(results);
                res.send('Data inserted successfully');
            } catch (error) {
                res.status(500).send('Error inserting data into DynamoDB: ' + error.message);
            }
        })
        .on('error', (error) => res.status(500).send('Error processing CSV file: ' + error.message));
});

const insertDataToDynamoDB = async (records) => {
    const putRequests = records.map(record => ({
        PutRequest: {
            Item: record
        }
    }));

    const params = {
        RequestItems: {
            'Reviews-prod-response': putRequests
        }
    };

    await dynamoDb.batchWrite(params).promise();
};

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
