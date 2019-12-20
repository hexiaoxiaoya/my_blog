const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const serverHandle = (req,res) => {
    // 设置响应格式json
    res.setHeader('Content-Type", "application/json')

    // 处理blog路由
    const blogData = handleBlogRouter(req,res)
    if (blogData) {
        res.end(JSON.stringify(blogData))
        return
    }

    // 处理user路由
    const userData = handleBlogRouter(req,res)
    if (userData) {
        res.end(JSON.stringify(userData))
        return
    }

    // 未匹配到路由，返回 404
    res.writeHead(404, {"Content-type": "text/plain"})
    res.write("404 Not Found\n")
    res.end()
}

module.exports = serverHandle