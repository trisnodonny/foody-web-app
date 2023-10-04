const errorHandler = (err, req, res, next) => {
  let status = 500;
  let message = "Internal Server Error" 

  switch (err.name) {
    case "SequelizeValidationError":
      status = 400;
      message = err.errors[err.errors.length - 1].message
      break;

    case "SequelizeUniqueConstraintError":
      status = 400;
      message = err.errors[0].message
      break;

    case "DataExists":
      status = 400
      message = ""
    
    case "InvalidLogin":
      status = 401;
      message = "Invalid email/password";
      break;

    case "Unauthenticated":
    case "JsonWebTokenError":
      status = 401;
      message = "Invalid Token";
      break;  
      
    case "UserNotFoundError":
      status = 404;
      message = "User not found"
      break;

    case "NotFoundError":
      status = 404;
      message = "Data not found"
      break;

    case "EmailRequired":
      status = 400;
      message = "Email can't be empty";
      break;

    case "PasswordRequired":
      status = 400;
      message = "Password can't be empty";
      break;

    case "Forbidden":
      status = 403;
      message = "You aren't allow to access this point"
      break;

    default:
      break;

  }
  res.status(status).json({ message });
};

module.exports = errorHandler;