module.exports = {

    name: "bancheck",
    descrption: "a command that checks if you can ban someone",
    execute(message) {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            message.channel.send("you cannot ban people")
        } else {
            message.channel.send('you can ban people')
        }
    }
};