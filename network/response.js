exports.success = function (req, res, message = '', statusCode = 200) {
  
  res.status(statusCode).send({
      error: false,
      statusCode,
      body: {
        message
      }
  });
}

exports.error = function (req, res, message = 'Internal server error', statusCode = 500) {

  res.status(statusCode).send({
      error: true,
      statusCpde,
      body: {
        message
      }
  });
}