module.exports = {

    name: 'ping',
    description: 'the ping of the server and client and uptime',
    async execute(message, client) {
        function msToTime(ms) {
            days = Math.floor(ms / 86400000); // 24*60*60*1000
            daysms = ms % 86400000; // 24*60*60*1000
            hours = Math.floor(daysms / 3600000); // 60*60*1000
            hoursms = ms % 3600000; // 60*60*1000
            minutes = Math.floor(hoursms / 60000); // 60*1000
            minutesms = ms % 60000; // 60*1000
            sec = Math.floor(minutesms / 1000);

            let str = "";
            if (days) str = str + days + "d";
            if (hours) str = str + hours + "h";
            if (minutes) str = str + minutes + "m";
            if (sec) str = str + sec + "s";

            return str;
        }

        const msg = await message.channel.send(` Pinging....`);

        msg.edit(`Server ping is ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI ping is ${Math.round(client.ws.ping)}ms\nServer uptime is ${msToTime(client.uptime)}`);
    }
};