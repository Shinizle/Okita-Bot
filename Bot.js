const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === ">hi") {
    	message.reply('iya sayang');
  	}
    else if (message.content === ">opop") {
    	message.content('https://goo.gl/qM3x9z');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
