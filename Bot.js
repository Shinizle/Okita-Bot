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
    var message = '';
    if (m.content.startsWith(">avatar")) {
        if (m.content.indexOf(' ') !== -1) {
            if (m.mentions) {
                for (var user of m.mentions) {
                    message += user.avatarURL + '\n';
                }
                message.slice(0, -2);
                bot.sendMessage(m.channel, message);
            } else {
                message = m.author.avatarURL;
                bot.sendMessage(m.channel, message);
            }
        } else {
            message = m.author.avatarURL;
            bot.sendMessage(m.channel, message);
        }
    client.on('message', message => {
        if (message.content === ">hi") {
          message.reply('iya sayang');
        }
        else if (message.content === ">opop") {
          message.reply('https://goo.gl/qM3x9z');
        }

    });


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
