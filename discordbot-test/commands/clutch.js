module.exports = {

    name: 'clutch',
    descrpition: 'a command that plays a very cutch song',
    execute(ytdl, message) {

        const voiceChannel = message.member.voice.channel;


        if (message.channel.type !== 'text') return;


        if (!voiceChannel) {
            return message.reply('please join a voice channel first!');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=Hy8kmNEo1i8');
            const dispatcher = connection.play(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }


};