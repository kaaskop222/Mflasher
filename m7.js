module.exports = {
	name: 'm7',
	description: 'Flash M7!',
	execute(message, args) {
		message.channel.send('Flashed Mastery', {files: ["./M7.png"]});
	},
};