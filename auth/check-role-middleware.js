module.exports = function(role) {
    return (req, res, next) => {
        if(req.decodedToken.roles && req.decodedToken.roles.includes(role)){
            next()
        } else {
            res.status(403).json({ mesage: 'You have no power here' })
        }
    }
}