module.exports = {

    name: 'formatting',
    description: 'an explination on the formatting of many commands',
    execute(message) {
        message.channel.send({
            embed: {
                color: 3447003,
                title: 'Formatting for complex commands',
                description: "?text example: ?text 123-456-7890\n"
            }
        });
    }

};