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
    	message.reply('https://goo.gl/qM3x9z');
  	}
    else if (message.content === ">addrole Fire") {
    	member.addRole(Fire).catch(console.error);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
