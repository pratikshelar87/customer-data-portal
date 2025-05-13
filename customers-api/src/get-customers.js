const path = require('path');
const fs = require('fs');
const { paginate } = require('./utils/paginate');

const customers = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data', 'customers.json'), 'utf-8')
);

exports.handler = async (event) => {
  const page = parseInt(event.queryStringParameters?.page || "1");
  const limit = parseInt(event.queryStringParameters?.limit || "10");

  const { data, totalPages } = paginate(customers, page, limit);

  return {
    statusCode: 200,
    body: JSON.stringify({
      customers: data,
      page,
      totalPages
    }),
  };
};