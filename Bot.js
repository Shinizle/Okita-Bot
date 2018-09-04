// Extract the required classes from the discord.js module
const { Client, Attachment } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
  client.user.setPresence({ game: { name: 'with Ai', type: "GAME", url: "http://www.shinizle.tech/"}});
});
client.on('message', message => {
    if (message.content === "anjing" || message.content === "njir" || message.content === "anjir") {
       message.reply('woof woof hehe');
    }
    if (message.content === "!event") {
          message.reply("\n ```September Schedule: \n  \n● 8/31 - 9/9: The Other Side of the Sky \n● 9/9 - 9/15: Ranger Sign Bravo! (rerun) \n● 9/16 - 9/22: Rise of the Beasts \n● 9/23 - 9/29: Xeno Sagittarius (second run, no new weapon) \n● 9/30 - 10/8: New story event```");
    }
    // If the message is '!rip'
    if (message.content === "!opop") {
        message.channel.send("", { files: ["https://cdn.discordapp.com/attachments/417293593514999820/417314511041855488/zRj4H2Jh.png"]});
    }
    if (message.content === "!hello") {
        message.channel.send("", { files: ["https://cdn.discordapp.com/attachments/483868862987894799/484506814218764296/Stamp45.png"]});
    }
    if (message.content === "!otsu") {
        message.channel.send("", { files: ["https://cdn.discordapp.com/attachments/484198935930339354/486053252706729994/Stamp10.png"]});
    }
    if (message.content === "!ok") {
        message.channel.send("", { files: ["https://cdn.discordapp.com/attachments/484198935930339354/486053459871793164/Stamp44.png"]});
    }
    if (message.content === "!dokkan") {
        message.channel.send("", { files: ["https://cdn.discordapp.com/attachments/484198935930339354/486054035040894989/Stamp148.png"]});
    }
    if (message.content === "!teehe") {
        message.channel.send("", { files: ["https://cdn.discordapp.com/attachments/484198935930339354/486054073913573376/Stamp142.png"]});
    }
    if (message.content === "!letsgo") {
        message.channel.send("", { files: ["https://cdn.discordapp.com/attachments/484198935930339354/486054103047471104/Stamp75.png"]});
    }
    if (message.content === "!aye") {
        message.channel.send("", { files: ["https://gbf.wiki/images/d/d2/Stamp147.png"]});
    }
    if (message.content === "!notgood") {
        message.channel.send("", { files: ["https://gbf.wiki/images/5/52/Stamp146.png"]});
    }
    if (message.content === "!anoo") {
        message.channel.send("", { files: ["https://gbf.wiki/images/d/dd/Stamp64.png"]});
    }
    if (message.content === "!hawawa") {
        message.channel.send("", { files: ["https://pa1.narvii.com/6521/08fb8fe3ec5f63a5409579c67715e69651fd2410_hq.gif"]});
    }
    if (message.content === "!exited") {
        message.channel.send("", { files: ["https://cdn.discordapp.com/attachments/483868862987894799/486430240638238742/KannaExcited.gif"]});
    }
    if (message.content === "!asyik") {
        message.channel.send("", { files: ["https://cdn.discordapp.com/attachments/483868862987894799/486431343123759104/ezgif-4-585ef23bbe.gif"]});
    }
    if (message.content === "!uhuy") {
        message.channel.send("", { files: ["https://cdn.discordapp.com/attachments/483868862987894799/486431833496485888/396575918593802240.gif"]});
    }
    if (message.content === "!pensi") {
        message.channel.send("", { files: ["https://cdn.discordapp.com/attachments/483868862987894799/486432106411589642/20-31-25-CXhzdoQ_d.jpg"]});
    }
    //if (message.content === "!otsu") {
        //message.channel.send("", { files: [""]});
    //}
});
// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NDE3Mjk0MjgzMDkyMTMxODQw.DXrFcA.d9iEtK-bJ_5HBjuYQug487YSJ9w');
