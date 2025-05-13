function paginate(array, page = 1, limit = 10) {
    const start = (page - 1) * limit;
    const end = start + limit;
    return {
      data: array.slice(start, end),
      totalPages: Math.ceil(array.length / limit),
    };
  }
  
module.exports = { paginate };