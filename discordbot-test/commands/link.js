const yts = require('youtube-search');

module.exports = {

    name: 'link',
    description: 'a command that turns a youtube serach qurery into a link',
    execute(message) {

        let searchQuery = message.content.substring(8)

        const opts = {
            maxResults: 1,
            key: process.env.youtubeAPIkey,
            type: 'video'
        };

        yts(searchQuery, opts, function(err, results) {
            if (err) return console.log(err);

            var video = results;

            for (var i = 0; i < video.length; i++) {
                const videoted = video[i].link

                message.channel.send(videoted)

            }

        })
    }
}