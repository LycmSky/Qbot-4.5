/* 从三方库引入 */
const { createClient } = require("icqq")

/* 从本地文件引入 */
const { account, password } = require("./basic_settings")

/* 创建实例 */
const bot: any = Object
module.exports = bot
bot.client = createClient(account)
bot.use = require("./utils/use_plugins")
bot.logger = require("./utils/log4js")

/* 加载插件 */
bot.use("hello_world")

/* 登陆 */
const handlers = require("./utils/event_handlers")
bot.client.on("system.online", handlers.online)
bot.client.on('system.login.slider', handlers.loginSlider)
bot.client.on('system.login.device', handlers.loginDevice)
bot.client.login(account, password)