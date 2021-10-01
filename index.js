const Discord = require('discord.js');

const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();

const { WelcomerZerotwo } = require("zerotwo-welcomer");
const welcome = new WelcomerZerotwo();


const client = new Discord.Client();


const prefix = 'w!'

client.on("ready", async () => {
    console.log(`${client.user.username} is Online!`)

    // This Will be the Status Of our Bot
    client.user.setActivity("Strg C at Coding", {type: "WATCHING"})
});

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome-to-hub');
	if (!channel) return;

   let data = await canva.welcome(member, { link: "https://c4.wallpaperflare.com/wallpaper/380/523/681/design-neon-abstract-light-design-hd-wallpaper-preview.jpg" })

    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );

    channel.send(
      `Willkommen, ${member}!`,
      attachment
    );   
   });









client.login("")