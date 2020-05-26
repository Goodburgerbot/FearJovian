const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const config = require("./config.json");
const prefix = config.json

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("mu!help to start", {
    type: "PLAYING",
  });
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
const { Permissions } = require('discord.js');
  const permissions = new Permissions([
    'MANAGE_CHANNELS',
    'EMBED_LINKS',
    'ATTACH_FILES',
    'READ_MESSAGE_HISTORY',
    'MANAGE_ROLES',
  'ADMINISTRATOR',
  'BAN_MEMBERS',
  'KICK_MEMBERS',
  'MANAGE_GUILD',
  'VIEW_AUDIT_LOG',
  'MANAGE_NICKNAMES',
  'MANAGE_WEBHOOKS',
  'MANAGE_MESSAGES',
  'ADD_REACTIONS',
  'CONNECT',
  'SPEAK',
  'MUTE_MEMBERS',
  'DEAFEN_MEMBERS',
  'SEND_MESSAGES',
  'CREATE_INSTANT_INVITE',
]);
  
    if (command === "ban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        "You do not have permissions to ban people, sorry."
      );
    }

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        "I don't have permission to ban people contact a staff member to fix this issue."
      );
    }

    let target =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!target) {
      return message.channel.send(
        "Invalid arguments provided.\nUsage: " +
          `\`mu!ban <@member> <reason>\``
      );
    }

 if (!target.bannable) {
      return message.channel.send(
        "I cannot ban that user due to role hierarchy."
      );
    }

    let reason = args.slice(1);
    if (!reason) {
      reason = "no reason given";
    }
    
    message.channel.send(`Successfully banned ${target.user.tag}!`);
    target.ban(reason + `Banned by ${message.author.tag}`);
        console.error(`ban done by ${message.author.tag}`);
}
   if(command === 'unban'|| command === 'ub') {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        "You do not have permissions to do ban, sorry."
      );
    }
    if (isNaN(args[0]))
       message.channel.send("You need to provide an ID.");
    
    let member = args[0];
    if(!member)
       message.reply("Please mention a valid Banned Member ID");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
await message.guild.members.unban(member)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't unban because of : ${error}`));
      if(!permissions.has('BAN_MEMBERS')) {
    message.reply(`${member} has been unbanned by ${message.author.tag} because: ${reason}`);
      console.log(`unban worked!`)
        console.error(`unban done by ${message.author.tag}`);
      }
}
