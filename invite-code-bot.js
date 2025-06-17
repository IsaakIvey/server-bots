const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = MTM4NDY1NDAwNzg0NjQzNzA0Ng.GUewv_.m9nIVpO_WTbNV2WM3DGmwXp9m3jiffSkdXCH4U /*change 'Your Discord Token Here to the token of your bot*/

//notes
/*bot will listen to whatever channel it has access to. Will send private message with the current code*/
/*anything with quotes ' ' information goes inside them*/





bot.on('message', function(message)
{
    if(message.channel.type === "dm")
    {
    message.author.send("Nice Try. Please use the proper channel."); 
    }
    else if(message.content == 'Let me enter') /*change '!code' to whatever you would like people to have to say to trigger the bot */
    {
        var fs = require('fs');
        /*change 'C://Program Files (x86)/Steam/steamapps/common/Stardew Valley/Mods/Always On Server/InviteCode.txt' 
below to wherevere yours is stored*/
        fs.readFile('C:\Users\isaak\Desktop\Steam\steamapps\common\Stardew Valley\Mods\StardewUnattendedServer', 'utf8', function(err, data) {  
            if (err) throw err;
            console.log(data);
            message.author.send(data);  
        });
           

    }

}
);


bot.login(TOKEN);
