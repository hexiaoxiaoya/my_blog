const serverHandle = (req,res) => {
    // 设置响应格式json
    res.setHeader('Content-Type", "application/json')

    const resData = {
        name:'何方',
        site:'moon',
        env: process.env.NODE_ENV
    }

    res.end(
        JSON.stringify(resData)
    )
}

module.exports = serverHandle