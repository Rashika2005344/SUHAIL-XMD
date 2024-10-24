const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_48_10_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMCxcbiAgICAgICAgOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMixcbiAgICAgICAgMjUyLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgyLFxuICAgICAgICA4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYwLFxuICAgICAgICA5MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDg3LFxuICAgICAgICA5MixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTksXG4gICAgICAgIDM0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjksXG4gICAgICAgIDUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjExLFxuICAgICAgICA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDU5LFxuICAgICAgICA1NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInUwM1RYcFlneW1ISk0vSFBpQktHZkQ1dFpUVmt3OWEwSUl6akpwM3hqQ0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpWdjNtSzdaUVZ5RnBsb1RzdlRNaFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTFmMWUxMjMtMGY2MS00OGI2LTk3M2QtZmQ5MzMzYzBiZDQyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDAsXG4gICAgICA5MixcbiAgICAgIDU4LFxuICAgICAgMTgwLFxuICAgICAgMjQ2LFxuICAgICAgMzIsXG4gICAgICA1MSxcbiAgICAgIDE5MCxcbiAgICAgIDE0OSxcbiAgICAgIDIzOSxcbiAgICAgIDk1LFxuICAgICAgMTc1LFxuICAgICAgMTIyLFxuICAgICAgMjM4LFxuICAgICAgMTkwLFxuICAgICAgMjQ4LFxuICAgICAgNTEsXG4gICAgICA5MyxcbiAgICAgIDEzOSxcbiAgICAgIDY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDE5MyxcbiAgICAgIDE5OCxcbiAgICAgIDQ2LFxuICAgICAgMjA4LFxuICAgICAgMjExLFxuICAgICAgMTkxLFxuICAgICAgNjAsXG4gICAgICAxNTEsXG4gICAgICAxNjYsXG4gICAgICAyNDQsXG4gICAgICAyMjMsXG4gICAgICAyNTQsXG4gICAgICAxNjgsXG4gICAgICAxNDcsXG4gICAgICAxODQsXG4gICAgICA1OSxcbiAgICAgIDY4LFxuICAgICAgMjM0LFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhQUDkyNlc2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3NTA1MzYyMDozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIm5vdGl5YVwiLFxuICAgIFwibGlkXCI6IFwiNjQ1MTA4OTUzNTgxODA6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXFJdWFVREVJcm82TGdHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJybnU5YzRuQ0lENzFnaDlXZDRUdEhudklPVVozelJrbWtCZWtMUVJVblc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNMRFYxZFFhVVM0dWMvMWpHelNTSkRLbktOUUI2QU00OHhVcGUwN3FGaCsyazUvNmQ0cEt6Z1RnMGhaMmN1TWNZNWk5aXdVUGlWbkV6Y20raURYcUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNDR2RmMlBCbThRT1E0a2p1bzFNUnJsZEQwclVOR2k0UlUyN25hS1JRSGJUZkIzMUZNSEtFTDk5SG5UN3VCdWp3Y3VJK1hncGpVb1grcWw3SUVPU0FBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc1MDUzNjIwOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTc3MDUwOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUgvN1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSC83Lmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
