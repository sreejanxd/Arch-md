/* 

   Contact: https://wa.me/917439382677
   Telegram: https://t.me/sreejan-xd    
   Developer : https://wa.me/917439382677
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")
require('dotenv').config(); 

//======= Change settings =======\\
global.owner = process.env.OWNER_NUMBER || "917439382677"
global.botname = process.env.BOT_NAME || "𝐀𝐥𝐨𝐧𝐞 𝐒𝐫𝐞𝐞𝐣𝐚𝐧"
global.ownername = process.env.OWNER_NAME || "𝐒𝐫𝐞𝐞𝐣𝐚𝐧"; //set bot owner name here 
global.prefix = process.env.PREFIX || "."; // your desired prefix symbol only
global.timezone = process.env.TIME_ZONE || "India/kolkata";
global.author = process.env.AUTHOR  || "𝐀𝐥𝐨𝐧𝐞";
global.packname = process.env.PACK_NAME  || "𝐒𝐫𝐞𝐞𝐣𝐚𝐧";
global.startup = process.env.STARTUP_MSG === 'true';
global.typeMenu = process.env.MENU_TYPE  || "v2";
global.onlypc = process.env.ONLYPC_MSG  || "Sorry buddy the bot won't work directly in group chat to reduce spam use in private chat";
global.onlygroup = process.env.ONLYGC_MSG  || "Sorry buddy the bot won't work directly in private chat to reduce spam use in group";


global.simbol = "♘"
global.tempatDB = 'database.json' // dont change might cause big errors 
global.pairing_code = false // if deploying on panel set true if on any other platform leave it false

// Settings Image Url
global.image = {
menu: "https://cdn.ironman.my.id/i/cdcil5.jpg", 
reply: "https://cdn.ironman.my.id/i/cdcil5.jpg", 
}

// Message Command 
global.mess = {
	owner: "*Access Denied* This feature is for bot owners only!",
	admin: "*Access Denied* This feature is for group admins only!!",
	botAdmin: "*Access Denied* This feature is only for when the bot is an admin.!",
	group: "*Access Denied* This feature is for groups only!",
	private: "*Access Denied* This feature is for private chat only!!",
	ban: "*Access Denied* you have been banned contact owner to unban!!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
