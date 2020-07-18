module.exports = {

    name: 'secret',
    description: 'a list of secret commands',
    execute(message, args) {
        message.channel.send({
            embed: {
                color: 3447003,
                title: 'List of secret Commands for JessieBot',
                description: "?clutch\n?GhostApe\n?send(hehe)"
            }
        });
    }
};