const path = require('path');
const fs = require('fs');
const { paginate } = require('./utils/paginate');

const customers = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data', 'customers.json'), 'utf-8')
);

exports.handler = async (event) => {
  const pageStr = event.queryStringParameters?.page || "1";
  const limitStr = event.queryStringParameters?.limit || "10";

  const page = parseInt(pageStr, 10);
  const limit = parseInt(limitStr, 10);

  // Validate page and limit
  if (
    isNaN(page) || page <= 0 ||
    isNaN(limit) || limit <= 0
  ) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Invalid query parameters. 'page' and 'limit' must be positive integers.",
      }),
    };
  }

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
