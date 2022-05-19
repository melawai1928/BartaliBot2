const cheerio = require('cheerio');
const Discord = require("discord.js")
const rp = require('request-promise');
const config = require("./config.json");
const fs = require("fs");
const request = require("request");
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

fs.readdir("./command/", (err, files) => {
    if (err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() == "js");
    arquivojs.forEach((f, i) => {
        let props = require(`./command/${f}`);
        console.log(`Perintah ${f} Sukses.`)
        bot.commands.set(props.help.name, props);
    });
});


        bot.on("ready", () => {
            console.log(`Bot dimulai, Dengan ${bot.users.size} user, di ${bot.channels.size} Channel, di ${bot.guilds.size} server.`);
            bot.user.setPresence({

                game: {
                    name: 'MT DOG.',
                    type: 0
                }
            });
        });


bot.on("message", async message => {

    if (message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(bot, message, args);

});

   bot.login(config.token); 