const log4js = require("log4js");

const levels = {
    trace: log4js.levels.TRACE,
    debug: log4js.levels.DEBUG,
    info: log4js.levels.INFO,
    warn: log4js.levels.WARN,
    error: log4js.levels.ERROR,
    fatal: log4js.levels.FATAL,
};

log4js.configure({
    appenders: {
        console: {
            type: "stdout",
            layout: {
                type: "pattern",
                pattern: "%[[%d{yyyy-MM-dd hh:mm:ss}][%p]%c%] - %m",
            },
        }
    },
    categories: {
        default: {
            appenders: ["console"],
            level: "info",
        }
    }
})

module.exports = log4js.getLogger("[Qbot]")