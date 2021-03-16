module.exports = {
	name: 'm4',
	description: 'Flash M4!',
	execute(message, args) {
		message.channel.send('Flashed Mastery', {files: ["./M4.png"]});                   //hier stuurt hij de M4.png file
	},
};
