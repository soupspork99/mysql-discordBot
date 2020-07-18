const Twit = require('twit');



module.exports = {

    name: 'searchtweet',
    description: 'a command that shitilly searches tweets',
    execute(message) {

        var T = new Twit({
            consumer_key: process.env.TwitterConsumerKey,
            consumer_secret: process.env.TwitterConsumerSecret,
            access_token: process.env.TwitterAccessToken,
            access_token_secret: process.env.TwitterAccessTokenSecret
        })

        let tweetSearch = message.content.substring(14)


        T.get('search/tweets', { q: `${tweetSearch} since:2011-07-11`, count: 1 }, function(err, data, response) {
            var tweets = data.statuses;
            console.log(tweets)
            for (var i = 0; i < tweets.length; i++) {
                var tweeted = tweets[i].text
            }

            message.channel.send(tweeted)
        })

    }
}