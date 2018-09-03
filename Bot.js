const Discord = require('discord.js');
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDE3Mjk0MjgzMDkyMTMxODQw.DXrFcA.d9iEtK-bJ_5HBjuYQug487YSJ9w';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
    client.on('ready', () => {
      console.log('I am ready!');
    });
    
    client.on('message', message => {
        if (message.content === ">hi") {
          message.reply('iya sayang');
        }
        else if (message.content === ">opop") {
          message.reply('https://goo.gl/qM3x9z');
        }
        else if (message.content === "anjing" || message.content === "njir" || message.content === "anjir") {
          message.reply('woof woof hehe');
        }
        else if (message.content === ">helo") {
          message.reply('https://goo.gl/H785Cy');
        }
        // If the message is '!rip'
        if (message.content.startWith ("!opop")) {
            message.channel.send("", { files: ["https://cdn.discordapp.com/attachments/483868862987894799/484506814218764296/Stamp45.png"]});
        }
        // If the message is '!rip'
        if (message.content === '!rip') {
            // Create the attachment using Attachment
            const attachment = new Attachment('./rip.png');
            // Send the attachment in the message channel with a content
            message.channel.send(`${message.author},`, attachment);
        }
    });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
