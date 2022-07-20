const { Client } = require('discord.js');
const client = new Client({ intents: 32767 });
const config = require('./config.json');
const fs = require("fs")

module.exports = client;

client.login(config.token);

require('./src/index').run(client)