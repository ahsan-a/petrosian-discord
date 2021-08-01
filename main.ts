import { Client, Message, GatewayIntents } from 'https://deno.land/x/harmony@v2.0.0-rc4/mod.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const client = new Client();

const triggers = ['pipi', 'pampers', 'tigran', 'petrosian'];
const Config = config();

client.on('ready', () => {
	console.log(`Ready! User: ${client.user?.tag}`);
});

client.on('messageCreate', (msg: Message): void => {
	if (msg.author.bot) return;
	if (triggers.some((x) => new RegExp(`([^a-zA-Z]|^)${x}([^a-zA-Z]|$)`, 'gim').test(msg.content))) msg.reply(Config.MESSAGE);
});

// Connect to gateway
client.connect(Config.TOKEN, [GatewayIntents.GUILD_MESSAGES]);
