const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on("guildMemberRemove", function(member){
     client.channels.cache.get(process.env.USER_TRACKING_CHANNEL_ID).send(`${member.user.tag} has left the server!`);
});

client.login(process.env.CLIENT_TOKEN);
