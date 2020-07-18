module.exports = {

    name: 'commands',
    description: 'a list of useable commands',
    execute(message, args) {
        message.channel.send({
            embed: {
                color: 3447003,
                title: 'List of Commands for JessieBot',
                description: "?commands\n?what should the bot do?\n?server\n?userinfo\n?game\n?kick\n?ban\n?ping\n?bancheck\n?kickcheck\n?text\n?formatting\n"
            }
        });
    }

};