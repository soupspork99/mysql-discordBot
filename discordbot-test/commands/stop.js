module.exports = {
    name: 'stop',
    description: 'a command that stops music',
    execute(message, serverQueue) {
        if (!message.member.voice.channel)
            return message.channel.send(
                "You have to be in a voice channel to stop the music!"
            );
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
    }
}