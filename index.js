const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.username} - Auto reponder ready to use`);
})

client.on('messageCreate', (message) => {
  if (message.content.startsWith('<@ID>')) { // Replace <@ID> according to the command tag you want
    message.channel.send('Hello, can anyone help?'); // Change the response message according to what you want
  }
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
