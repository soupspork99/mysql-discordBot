module.exports = {

    name: 'kick',
    description: 'a command that kicks people',
    execute(message) {
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            message.channel.send("You don't have permission to use that command.");
        } else {
            const member = message.mentions.members.first();
            member.kick();
            message.reply('A member was kicked.');
        }
    }
};