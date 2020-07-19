const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
});

/*client.on("messageDelete", function(message){
     client.channels.cache.get(process.env.DELETED_CHANNEL_ID).send('Message deleted: ' + message.content + ' by author ' + message.author.tag);
});*/

client.on("guildMemberRemove", function(member){
     client.channels.cache.get(process.env.USER_TRACKING_CHANNEL_ID).send(`${member.user.tag} has left the server`);
});

client.login(process.env.CLIENT_TOKEN);
