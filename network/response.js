exports.success = function (req, res, message = '', statusCode = 200, body = {}) {
  
  res.status(statusCode).send({
      error: false,
      statusCode,
      message,
      body
  });
}

exports.error = function (req, res, message = 'Internal server error', statusCode = 500, body = {}) {

  res.status(statusCode).send({
      error: true,
      statusCode,
      message,
      body
  });
}