const Discord = require("discord.js");
const cheerio = require("cheerio");
const rp = require("request-promise");
const { head } = require("request");

module.exports.run = async (bot, message, args, msg) =>{
    let profile = args.slice(0).join('+');
    if (!profile) return message.reply("Nicknya mana bro");

    const URL = (`https://www.sea.playblackdesert.com/Adventure?searchType=2&searchKeyword=${profile}`)
    const headerObj = {
        uri: URL
    };
    rp(headerObj)
    .then(html => {
        var $ = cheerio.load(html)
        
        const avatar = $("#wrap > div > div.container > article > div > div > div.box_list_area > ul > li > div.user > div > span.character_desc > span.img_area.icon_character.icn_character7.sml").attr("src");
        const fname = $("#wrap > div > div.container > article > div > div > div.box_list_area > ul > li > div.title > a").text()
        const cname = $("#wrap > div > div.container > article > div > div > div.box_list_area > ul > li > div.user > div > span.character_desc > span.text_area > span.text").text();
        const classs = $("#wrap > div > div.container > article > div > div > div.box_list_area > ul > li > div.user > div > span.character_class > span.name").text();
        const guild = $("#wrap > div > div.container > article > div > div > div.box_list_area > ul > li > div.state > a").text();
        const link = $("#wrap > div > div.container > article > div > div > div.box_list_area > ul > li > div.title > a").attr("href");

        const embed = new Discord.RichEmbed()
        .setDescription(`**Family Name:** [**${fname}**](${link})\n**Character Name:** ${cname}\n**Class:** ${classs}\n**Guild:** ${guild}`)
        .setThumbnail('https://www.onlygfx.com/wp-content/uploads/2017/11/wanted-stamp-3.png')
        .setColor("#0051FF")
        .setTimestamp()
        .setFooter(`Hunted by: ${message.author.tag}`)
        message.channel.send(embed)
    })
}

module.exports.help = {
    name: "fn"
}