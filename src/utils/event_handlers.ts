const logger = require("./log4js")
const { client } = require("../index")

module.exports.online = () => {
    logger.info("登录成功！")
}

module.exports.loginSlider = (e: any) => {
    logger.info('输入滑块地址获取的ticket后继续。\n滑块地址:    ' + e.url)
    process.stdin.once('data', (data) => {
        client.submitSlider(data.toString().trim())
    })
}

module.exports.loginDevice = (e: any) => {
    logger.info('请选择验证方式:(1：短信验证   其他：扫码验证)')
    process.stdin.once('data', (data) => {
        if (data.toString().trim() === '1') {
            client.sendSmsCode()
            logger.info('请输入手机收到的短信验证码:')
            process.stdin.once('data', (res) => {
                client.submitSmsCode(res.toString().trim())
            })
        } else {
            logger.info('扫码完成后回车继续：' + e.url)
            process.stdin.once('data', () => {
                client.login()
            })
        }
    })
}

export { }