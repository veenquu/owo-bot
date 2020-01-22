const Discord = require("discord.js");
const PREFIX = "!!"

var version = '0.1';
var bot = new Discord.Client();

bot.on("ready", function() {
    console.log('owo its wowking');
    bot.user.setStatus('some kawaii status');
    bot.user.setActivity('!!help - for help UwU', { type: 'PLAYING' });
});

bot.on('guildMemberAdd', member =>{
    console.log('User ' + member.username + ' has joined the Weeb Kingdom!')
    var role = member.guild.roles.find('name', 'unverifed');
    member.addRole(role)


    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;
    channel.send(`👤 **| Welcome to Weeb Kingdom, ${member}, please read the rules in the rules channel!**`)
});

bot.on("message", function(message) {
    let args = message.content.substring(PREFIX.length).split(" ");
    if (message.author.equals(bot.user)) return;

    switch(args[0]){
        case 'status':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('User Name', message.author.username)
            .addField('Version', version)
            .addField('Current Server', message.guild.name)
            .setColor(0xd133ff)
            .setThumbnail(message.author.avatarURL)
            .setFooter("owo!Bot created by jvsiu#6866")
            message.channel.sendEmbed(embed);
        break;      
    }

    if (message.content == "!!help") {
        message.channel.send("Hewwo, I'm OwOBot. I'm created by **jvsiu** \n Here is list of my commands: \n **!!help** - shows this message \n **!!status** - shows user's informations")
    }

    if (message.content == "!!accept") {
        message.delete(1000);
        message.member.addRole('668140037371854869');
        message.member.removeRole('668140008162590732');
    }
});

bot.login(process.env.BOT_TOKEN);