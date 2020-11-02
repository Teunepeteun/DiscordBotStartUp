const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '?';

const fs = require('fs');
const nonstop = require('./commands/nonstop');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Red is online!');
    console.log('This bot is created by Freerunner6#2295!')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'imposter'){
        
        client.commands.get('imposter').execute(message, args);

    } else if (command === 'vote.red') {
        message.channel.send(':star: Red was an Imposter! :star:');
        message.channel.send(':warning: One imposter remains :warning:');
    } else if (command === 'nonstop') {
        
        client.commands.get('nonstop').execute(message, args);

    } else if (command === 'nolife') {

        client.commands.get('nolife').execute(message, args);

    } else if (command === 'life') {
        client.commands.get('life').execute(message, args);
    } else if (command === 'vote.black') {
        message.channel.send(':star: Black was not an Imposter! :star:');
        message.channel.send(':warning: ? imposter remains :warning:');
    } else if (command === 'vote.cyan') {
        message.channel.send(':star: Cyan was not an Imposter! :star:');
        message.channel.send(':warning: ? imposter remains :warning:');
    } else if (command === 'vote.brown') {
        message.channel.send(':star: Brown was not an Imposter! :star:');
        message.channel.send(':warning: ? imposter remains :warning:');
    }

});

client.login('Your bot token');
