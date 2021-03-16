module.exports = {
	name: 'm5',
	description: 'Flash M5!',
	execute(message, args) {
		message.channel.send('Flashed Mastery', {files: ["./M5.png"]});
	},
};
