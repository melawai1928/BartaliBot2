const Discord = require("discord.js");
const cheerio = require("cheerio");
const rp = require("request-promise");
const { head } = require("request");
const { get } = require("request");

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

   
        //embed
        const finfo = new Discord.RichEmbed()
        .setDescription(`**Family Name:** [**${fname}**](${link})\n**Character Name:** ${cname}\n**Class:** ${classs}\n**Guild:** ${guild}`)
        .setFooter(`Hunted by: ${message.author.tag}`)
        //embed tumbnail

        if ( `${classs}` === `Archer`) {
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character29.jpg')
        }
        else if(`${classs}` === `Berserker`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character12.jpg')
        }
        else if(`${classs}` === `Corsair`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character10.jpg')
        }
        else if(`${classs}` === `Dark Knight`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character27.jpg')
        }
        else if(`${classs}` === `Drakania`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character7.jpg')
        }
        else if(`${classs}` === `Guardian`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character5.jpg')
        }
        else if(`${classs}` === `Hashashin`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character1.jpg')
        }
        else if(`${classs}` === `Kunoichi`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character25.jpg')
        }
        else if(`${classs}` === `Lahn`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character11.jpg')
        }
        else if(`${classs}` === `Maehwa`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character21.jpg')
        }
        else if(`${classs}` === `Mystic`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character26.jpg')
        }
        else if(`${classs}` === `Musa`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character20.jpg')
        }
        else if(`${classs}` === `Ninja`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character26.jpg')
        }
        else if(`${classs}` === `Nova`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character9.jpg')
        }
        else if(`${classs}` === `Ranger`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character4.jpg')
        }
        else if(`${classs}` === `Shai`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character17.jpg')
        }
        else if(`${classs}` === `Sorceress`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character8.jpg')
        }
        else if(`${classs}` === `Striker`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character19.jpg')
        }
        else if(`${classs}` === `Tamer`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character16.jpg')
        }
        else if(`${classs}` === `Witch`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character31.jpg')
        }
        else if(`${classs}` === `Wizard`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character28.jpg')
        }
        else if(`${classs}` === `Valkyrie`){
            finfo.setThumbnail('https://s1.pearlcdn.com/SEA/contents/img/common/character/character24.jpg')
        }

        message.channel.send(finfo)
        
    })
}

module.exports.help = {
    name: "fn"
}