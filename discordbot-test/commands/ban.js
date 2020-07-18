module.exports = {

    name: 'ban',
    description: 'a command to ban people with the ability to check weather the person can ban or not.',
    execute(message) {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            message.channel.send("You don't have permission to use that command.");
        } else {
            const member = message.mentions.members.first();
            message.guild.members.ban(member);
            console.log('A member was Banned.');
            message.reply('You banned someone, hopefully they deserverd it!')
        }
    }


};