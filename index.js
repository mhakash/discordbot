console.log("initiating bot");

const Discord = require('discord.js');
const {prefix, token} = require('./config.json'); 

const client = new Discord.Client();

client.once('ready', ()=>{
  console.log('Ready!');
});

client.on('message', message => {
  console.log(message.content);
	if (message.content === `${prefix}ping`) {
    message.channel.send('Pong.');
  } else if (message.content === `${prefix}beep`) {
    message.channel.send('Boop.');
  } else if (message.content === `${prefix}server`) {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  }
  
});

client.login(token);
