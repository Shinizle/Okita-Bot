// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
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
        if (message.content === '>rip') {
            // Create the attachment using Attachment
            const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
            // Send the attachment in the message channel
            message.channel.send(attachment);
        }
    });
    // Create an event listener for messages
    client.on('message', message => {
      // If the message is "what is my avatar"
      if (message.content === ">ava") {
        // Send the user's avatar URL
        message.reply(message.author.avatarURL + '\n');
      }
    });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
