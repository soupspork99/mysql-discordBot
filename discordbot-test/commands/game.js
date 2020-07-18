//very incomplete game



module.exports = {

    name: 'game',
    description: 'a very incomplete game',
    execute(message) {
        message.channel.send({
            embed: {
                color: 3447003,
                description: "A very simple Embed!"
            }

        })
    }
};