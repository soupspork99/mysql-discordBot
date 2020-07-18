module.exports = {};
/*

const TWclient = require('twilio')(accountSid, authToken);

msg = message.content.toLocaleLowerCase();


if (msg.startsWith('?text')) {

    phoneNum = message.content.substring(6)

    console.log(phoneNum)

    const filter = m => m.author.id === message.author.id
    message.reply(`What would you like to text to ${phoneNum}?`).then(r => r.delete(10000))
    message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {


        let textContent = `${collected.first().content}`

        TWclient.messages
            .create({
                body: textContent,
                from: '',
                to: phoneNum
            })
            .then(message => console.log(message.sid));

        console.log(textContent)
    })
}*/
