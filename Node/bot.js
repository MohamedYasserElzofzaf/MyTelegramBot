const Telegraf = require("telegraf");

const bot = new Telegraf("1495727165:AAE0VnissOXQG0ls4kj5Ant45iDSnzDe7hI");

bot.start((ctx) => {
    ctx.reply("Welcome aboard");
});

bot.help((ctx) => {
    ctx.reply("How can i help you !!");
});

bot.settings((ctx) => {
    ctx.reply("You have entered the settings command");
});

bot.launch();