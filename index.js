const Discord = require('discord.js'); //import client from discord

const client = new Discord.Client();


client.login(process.env.TOKEN); //login bot using token
