module.exports.event = "message"
module.exports.handler = (bot: any, message: any) => {
    if (message.raw_message === "你好") {
        message.reply(`${message.sender.nickname}你好！我叫${bot.client.nickname}!`, false)
    }
}