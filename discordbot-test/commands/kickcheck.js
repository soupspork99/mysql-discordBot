module.exports = {

    name: 'kickcheck',
    description: 'a comamnd that checks if you can kick someone',
    execute(message) {
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            message.channel.send("you cannot kick people")
        } else {
            message.channel.send('you can kick people')
        }
    }
};