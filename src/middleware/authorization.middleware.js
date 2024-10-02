import jwt from 'jsonwebtoken';


const JWT_SECRET = process.env.JWT_SECRET

///generateToken api ?
const authorization = (req, res, next) => {


    if (!JWT_SECRET) {
        return res.status(500).json({ message: 'Server configuration error. JWT_SECRET is missing.' });
    }

    // Get the token from the request header (usually sent as 'Authorization: Bearer <token>')
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Not logged in. No token provided.' });
    }

    try {
        // Verify the token using the secret
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Attach the decoded user information to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token.' });
    }
};

export default authorization;
