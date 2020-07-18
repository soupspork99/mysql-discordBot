module.exports = {
    name: 'serverinfo',
    description: 'a command that displays server info',
    execute(message) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
};