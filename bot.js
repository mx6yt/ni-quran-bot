const Discord = require("discord.js");
const client = new Discord.Client();
const yt = require('ytdl-core');

client.on('ready', () => {
console.log('- Logged in as ${client.user.tag} !');
console.log('- QuranBot Edited By ! ♪ , A l l w a i ♔#2019 !');
console.log('- The QuranBot is ready Now !');
});

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('.' + str);
}

function pluck(array) {
    return array.map(function(item) { return item['name']; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }

  }

var servers = {};

var q1 = "$quran 1"

var q2 = "$quran 2"

var q3 = "$quran 3"

var q4 = "$quran 4"

function play(connection, message) {
	var server = servers[message.guild.id];

	server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));

	server.queue.shift();

	server.dispatcher.on("end", function() {
		if (server.queue[0]) play(connection, message);
		else connection.disconnect();
	});
}

var PREFIX = "$";

client.on("message", message => {

	                    if (message.content === q1 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`- :x: **| يرجاء الدخول الى روم صوتي اولاً.**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=V4b9f9BQTKI', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
  	                    if (message.content === q2 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`- :x: **| يرجاء الدخول الى روم صوتي اولاً .**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/0m02xNtR8gA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
    	                    if (message.content === q3 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`- :x: **| يرجاء الدخول الى روم صوتي اولاً .**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=4JvY-MccxNk', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
      	                    if (message.content === q4 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`- :x: **| يرجاء الدخول الى روم صوتي اولاً .**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  } 

  if(message.content === "$stop" ) {
      			var servers = {};

			if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	
  }

if(message.content === "$help") {
message.author.sendMessage(`- :hearts: **| __Nile Network__ QuranBot - (Help Menu)**

- **:mosque: | $quran 1 : القران الكريم كامل بصوت الشيخ عبدالباسط عبدالصمد**

- **:mosque: | $quran 2 : سورة البقرة كاملة - القارئ الحاج ميثم التمار**

- **:mosque: | $quran 3 : القرءآن الكريم كامل بصوت الشيخ عبد الرحمن السديس وسعود الشريم**

- **:mosque: | $quran 4 : القرءآن الكريم كامل بصوت الشيخ المعيقلي**

- **:mosque: | $stop : لإيقاف تشغيل صوت الإية الكريمة**`)
}
});

client.login(process.env.BOT_TOKEN);
