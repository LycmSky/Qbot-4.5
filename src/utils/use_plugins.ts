const bot = require("../index")

module.exports = (plugin: string) => {
    const { event, handler } = require(`../plugins/${plugin}/index`)
    bot.client.on(`${event}`, (message: object) => {
        handler(bot, message)
    })
    bot.logger.info(`加载模块：${plugin}`)
}

export { }