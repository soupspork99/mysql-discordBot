require('dotenv').config();
const Discord = require('discord.js');
const ytdl = require("ytdl-core");
const mysql = require('mysql2');
const yts = require('youtube-search');
const Twit = require('twit');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
//--------------------------------------------------------------------------------------------------------------------------

const prefix = '?'

const swearWords = ["ball", "cock", "sex"];

const connectionDB = mysql.createConnection({
    host: 'localhost',
    user: process.env.DBuser,
    password: process.env.DBpass,
    database: process.env.DBName
});

const queue = new Map();




//time
var today = new Date();

var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date + ' ' + time;

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













client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({
        activity: {
            status: 'online',
            name: 'with soup',
        }
    });
});















//message commands

client.on('message', (message) => {

    if (message.author.bot) return;

    msg = message.content.toLocaleLowerCase();

    mention = message.mentions.users.first();

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const PING = client.ws.ping

    const UPTIME = client.uptime

    const swearWords = ["ball", "cock", "sex", "cum"];

    const serverQueue = queue.get(message.guild.id);




    if (swearWords.some(word => message.content.includes(word)) && !message.content.includes(prefix, 0)) {
        message.reply("hehe sex funny");
    } else if (message.content === "what should the bot do?") {
        message.reply('YOUR MOM, HAHA SO FUNNY!!!!!!!!')
    } else if (!message.content.startsWith(prefix)) {
        return;
    } else if (!client.commands.has(command)) {
        return;
    } else {
        try {
            client.commands.get(command).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    }


    connectionDB.query(
        `INSERT INTO Logs VALUES('${message.author.username}', '${message.author.id}',' ${message.content}', '${dateTime}')`
    )

});












//async messages e.g.(PING and any requests from API)
client.on("message", async message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    msg = message.content.toLocaleLowerCase();

    mention = message.mentions.users.first();

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

});


















//guild add (members join server)
/*
client.on("guildMemberAdd", member => {

    const channel = member.guild.channels.find(c => c.name === "arrivals");
    if (!channel) return;

    channel.send(`${member}, welcome to this hellhole.`);
});*/

//DATABASE COMMANDS: SHOW DATABASES;, USE MessageLogs;,  SELECT * FROM Logs;, SELECT * FROM Logs WHERE textDisc LIKE 'string';

// Server add URL:  https://discordapp.com/oauth2/authorize?&client_id=728434710128361472&scope=bot&permissions=8

client.login(process.env.token);