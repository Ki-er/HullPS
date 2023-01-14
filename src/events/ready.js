const client = require('../index');

client.on('ready', () => {
	console.log('HullPS is online');

	const Activities = ['Slash Commands'];

	setInterval(() => {
		client.user.setActivity(
			Activities[Math.floor(Math.random() * Activities.length)],
			{ type: 'WATCHING' }
		);
	}, 180000);

	setInterval(() => {
		const { memberCount } = client.guilds.cache.get('427865794467069962');
		const channel = client.channels.cache.get('906167542249308160');
		channel.setName(`Discord Members: ${memberCount.toLocaleString()}`);
	}, 600000);
});
