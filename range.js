//Middleware Function
module.exports = (req, res,next)=>{
    res.header('Content-Range', 'post 0-20/20')
    next()
}
