const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) =>
{
    const header = req.headers.token
    if (header)
    {
        const token = header.split(" ")[1];
        jwt.verify(token, process.env.JWT_KEY, (err, user) => //return error or if ok return user
        {
            if (err) res.status(401).json("Token is not valid")
            req.user = user;
            next();
        });
    } else
    {
        return res.status(401).json("you are not authenticated")
    }
};

const verifyTokenAndAuthorization = (req, res, next) =>
{

    verifyToken(req, res, () =>
    {

        if (req.user.id === req.params.id || req.user.isAdmin)
        {
            next()                          //continue with root function (next)
        } else
        {
            res.status(403).json("you have no rights to that")
        };
    });
}
const verifyTokenAndAdmin = (req, res, next) =>
{
    verifyToken(req, res, () =>
    {
        if (req.user.isAdmin)
        {
            next();
        } else
        {
            res.status(403).json("you have no rights to that");
        }
    });
};


module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }