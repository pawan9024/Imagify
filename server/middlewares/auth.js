// import jwt from 'jsonwebtoken'


// const userAuth = async (req, res, next) => {
//     const { token } = req.headers ;

//     if(!token){
//         return res.json({success:false, message : 'Not Authorized'})
//     }

//     try{
//         const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

// if(tokenDecode.id){
//     req.body.userId = tokenDecode.id;

// }
// else {
//     return res.json({success:false, message : 'Not Authorized. Login Again'});
// }
// next();

//     } catch(error){

// res.json({success:false, message : error.message});

//     }
// }

// export default userAuth;



import jwt from "jsonwebtoken";

const userAuth = (req, res, next) => {
    try {
        // Expect token from Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Not Authorized"
            });
        }

        const token = authHeader.split(" ")[1]; // Bearer TOKEN

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // ✅ THIS IS THE KEY FIX
        req.user = {
            userId: decoded.id
        };

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};

export default userAuth;
