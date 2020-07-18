function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dmSpam() {
    let i = 0
    do {

        mention.send('mad');
        await sleep(1300);
        i++

    } while (i < 1000)
    i = 0
}

module.exports = {

    name: 'send',
    description: 'spam someone, idk',
    execute(message, msg, mention, args) {

        if (mention == null) { return }
        message.delete();
        mentionMessage = message.content.slice(8);

        dmSpam()
    }

};