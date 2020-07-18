module.exports = {

    name: 'GhostApe',
    description: 'funny ghost ape meme',
    execute(ytdl, message) {

        const voiceChannel = message.member.voice.channel;

        if (message.channel.type !== 'text') return;


        if (!voiceChannel) {
            return message.reply('please join a voice channel first!');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=IXSM7dQO6UA');
            const dispatcher = connection.play(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }

};