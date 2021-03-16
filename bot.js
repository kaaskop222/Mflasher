const fs = require('fs');                                                               //de 1e 3 regels zijn er om te zeggen welke bestanden hij nodig heeft
const Discord = require('discord.js');                                                  //Discord.js is een library
const { prefix, token } = require('./config.json');                                     //hier staat het wachtwoord van de bot in

const client = new Discord.Client();                                                    //hier "maak" ik de discord bot
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));   //hier zeg ik weer dat hij de files in de commands-folder nodig heeft

const cooldowns = new Discord.Collection();                                             //dit is er om ervoor te zorgen dat je commands niet kan spammen

for (const file of commandFiles) {                                                        //hier zeg ik dat elke file in de commands-folder een command is
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {                                                            //hier zegt hij ready! als hij opstart
	console.log('Ready!');
});

client.on("error", (e) => console.error(e));                                            //hier zegt hij de errors die hij heeft
  client.on("warn", (e) => console.warn(e));
  client.on("debug", (e) => console.info(e));

client.on('message', message => {                                                       //hier checkt hij of er een bericht is verzonden
  
  if(message.author.bot) return;                                                        //dit is om de berichten van de bot te negeren
  
  if(message.content.toLowerCase().includes("hmm")){                                    //hier checkt hij of het bericht hmm bevat
    message.channel.send("hmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
  }
  
  if(message.content.toLowerCase().includes("cheese") || message.content.toLowerCase().includes("kaas")){    //hier checkt hij het bericht op kaas of chees
    message.channel.send("CHEESE, CHEESE FOR EVERYONE");
  }
  if(message.content.toLowerCase().includes("fuck jezus")){                                                   //hier checkt hij de jezus en de fuck
    message.channel.send("Daring today aren't we");
  }else if(message.content.toLowerCase().includes("jezus fuck")){
    message.channel.send("Praise the Fuck");
  }else if(message.content.toLowerCase().includes("jezus")){
    message.channel.send("Praise the Lord");
  }else if (message.content.toLowerCase().includes("fuck")){
    message.channel.send("fuck indeed");
  }
  
	if (!message.content.startsWith(prefix)) return;                                    //hier checkt hij of het bericht met ~ begint

	const args = message.content.slice(prefix.length).split(/ +/);                      //hier split hij het bericht bij de spatie(s)
	const commandName = args.shift().toLowerCase();                                     //hier noemt stopt hij de delen van het bericht in een array genaamd args

	if (!client.commands.has(commandName)) return;                                      //hier checkt hij of er na de ~ een command volgt

  const command = client.commands.get(commandName);                                   //hier importeert hij het command van de commandfile
  
  if (command.args && !args.length) {                                                 //hier checkt hij of het bericht argumenten bevat
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {                                                        //hier zegt hij welke argumenten je moet hebben om het command goed uit te voeren
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);                                               //hier geeft hij antwoord op het gebrek/verkeerd gebruik van argumenten
	}
	
	if (!cooldowns.has(command.name)) {
	cooldowns.set(command.name, new Discord.Collection());                              //hier checkt hij of de command op cooldown zit
}

const now = Date.now();
const timestamps = cooldowns.get(command.name);
const cooldownAmount = (command.cooldown || 3) * 1000;

if (timestamps.has(message.author.id)) {
	const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

	if (now < expirationTime) {
		const timeLeft = (expirationTime - now) / 1000;
		return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
	}
}
  
	try {
		command.execute(message, args);                                                     //hier voert hij het command uit en geeft een error als dat niet lukt
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
	
});

client.login(token);                                                                    //hier logt de bot in op de server