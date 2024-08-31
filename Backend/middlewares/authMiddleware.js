const jwt = require('jsonwebtoken');
const secretKey = 'schedule_line_crew&manager:999';

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  // Remove "Bearer " from the token string if present
  const actualToken = token.split(' ')[1];

  jwt.verify(actualToken, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }

    // Attach user information to request object
    req.user = decoded;
    next();
  });
}

module.exports = verifyToken;
