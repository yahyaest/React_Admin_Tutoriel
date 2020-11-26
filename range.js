//Middleware Function
module.exports = (req, res,next)=>{
    res.header('Content-Range', 'posts 0-4/20')
    next()
}