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
});

client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '>rip') {
        // Create the attachment using Attachment
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},`, attachment);
    }
    if (message.content === ">opop") {
        message.reply('https://goo.gl/qM3x9z');
    }
    if (message.content === "anjing" || message.content === "njir" || message.content === "anjir") {
          message.reply('woof woof hehe');
        }
    if (message.content === ">helo") {
          message.reply('https://goo.gl/H785Cy');
    }
    // If the message is '!rip'
    if (message.content === "!opop") {
        message.channel.send("", { files: ["https://cdn.discordapp.com/attachments/417293593514999820/417314511041855488/zRj4H2Jh.png"]});
    }
    if (message.content === "!hello") {
        message.channel.send("", { files: ["https://cdn.discordapp.com/attachments/483868862987894799/484506814218764296/Stamp45.png"]});
    }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NDE3Mjk0MjgzMDkyMTMxODQw.DXrFcA.d9iEtK-bJ_5HBjuYQug487YSJ9w');
