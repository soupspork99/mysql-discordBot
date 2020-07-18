module.exports = {

    name: 'userinfo',
    description: 'displays basic user information',
    execute(message) {

        mention = message.mentions.users.first();

        if (!mention) {
            message.reply('You didnt mention anyone for their user info, try again by mentioning someone!')
        } else {
            message.channel.send(`Your username: ${mention.username}\nYour ID: ${mention.id}`);
        }
    }
};