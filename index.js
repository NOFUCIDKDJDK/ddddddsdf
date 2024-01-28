const Discord = require('discord.js'); //import client from discord

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    // check if message isn't from us
    if (msg.author == client.user) {
  
    }
    else if (msg.content === 'ping pene') {
      msg.reply('tu madre!');
    }
    else {
        msg.reply(msg.content);
    }
});

client.login(process.env.TOKEN); //login bot using token
