module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	execute(message, args) {                                          //dit command gebruik ik als ik een command heb veranderd en ik te lui ben om de bot opnieuw op
const commandName = args[0].toLowerCase();                          //te starten
const command = message.client.commands.get(commandName)
	|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

if (!command) return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);

delete require.cache[require.resolve(`./${commandName}.js`)];

try {
	const newCommand = require(`./${commandName}.js`);
	message.client.commands.set(newCommand.name, newCommand);
} catch (error) {
	console.log(error);
	message.channel.send(`There was an error while reloading a command \`${commandName}\`:\n\`${error.message}\``);
}

message.channel.send(`Command \`${commandName}\` was reloaded!`);

	},
};
