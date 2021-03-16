module.exports = {
	name: 'm6',
	description: 'Flash M6!',
	execute(message, args) {
		message.channel.send('Flashed Mastery', {files: ["./M6.png"]});
	},
};