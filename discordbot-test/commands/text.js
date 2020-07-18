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


        //415-650-7823

        let textContent = `${collected.first().content}`

        TWclient.messages
            .create({
                body: textContent,
                from: '+14154309292',
                to: phoneNum
            })
            .then(message => console.log(message.sid));

        console.log(textContent)
    })
}*/
