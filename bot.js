const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();


client.once('ready', () => {
	console.log('Бот успешно запущен.');
});
	
	client.on('message', message => {
	console.log(message.content);
	if (message.content === `${prefix}ping`) {
	message.channel.send('Понг!');
	}
	if (message.content === `${prefix}server`) {
	message.channel.send(`Название: ${message.guild.name}\nРегион: ${message.guild.region}\nДата создания:${message.guild.createdAt}\nВсего участников на этом сервере: ${message.guild.memberCount}`);
	}
	if (message.content.startsWith(`${prefix}user`)) {
	if (!message.mentions.users.size) {
	return message.reply('вам необходимо упомянуть пользователя');
	}
	const taggedUser = message.mentions.users.first();
	message.channel.send(`Информация о пользователе ${taggedUser.username}\nDiscord tag: ${taggedUser.tag}\nID: ${taggedUser.id}\nДата регистрации: ${taggedUser.createdAt}`);
	}
	if (message.content === `${prefix}bot`) {
	message.channel.send(`Мой префикс: ${prefix}\nУзнать все команды: ${prefix}help\nБот может быть приглашён на сервер только пользователем English Tea#0403 (создатель бота).`);
	}
	if (message.content === `${prefix}help`) {
	message.channel.send(`Все команды:\n${prefix}ping - Понг!\n${prefix}server - информация о сервере\n${prefix}user - информация о пользователе\n${prefix}bot - информация о боте\n${prefix}everyone - позвать всех участников`);
	}
	if (message.content === `${prefix}everyone`) {
	message.reply(`позвал всех!\n@everyone`);
	}
        if (message.content === "Олег") {
        message.reply("Олег насрал на этого бота");
        }
});

client.login(token);
