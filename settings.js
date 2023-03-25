const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.ANTI_BADWORD = 'true' // true of false
global.AUTO_REACT = '𝚝𝚛𝚞𝚎' // true of false
global.INBOX_BLOCK_MSG ='BLOCK !!!'
global.INBOX_BLOCK = 'on' //inbox block
global.alivemsg = '_Hey Bro My Bot Is Alive Now 👻🌺🥀_                                                                                         *Type { .menu } To Get More Commands*                                                                               ❮🧸͚̩̆̆̆̆̆⊱─⃟🍒♥⃝๛⃞⃯💝අ̶හි̲̅මි̶ වී̲̅⃝⃡ම̶̷͟🧸 දු̲̅ක̶ක̶්̡̅   ̶න̶ම̶්ꪶ𖣔ꫂ අ̶ත̲̅හැ̲̅රි̶̏ම̶̷᭳͟ ⃝  ̲̅ලො̲̅කු̶̲̅ම̲̅⃞🔝🧸 ස̲̅තු̶̲̅ට̶̳̳යි̶̏๛⃞⃯♥🐹❮🧸͚̩̆̆̆̆̆⊱─⃟🍒                                                                                         ```By Vihanga MD 😙♥️```
global.alivepic = 'https://i.ibb.co/BBMFqyb/fcddf4260e88d5e5bf55e7043436d8fd-0.jpg'
global.owner = ['0716124952'] //ur owner number
global.ownername = "𝚅𝙸𝙷𝙰𝙽𝙶𝙰_𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻 🖤" //ur owner name
global.ytname = "YT: Dark" //ur yt chanel name
global.socialm = "GitHub: Dark" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//bot bomdy 
global.session = "UG4wUTBEQzk=" //session Id
global.ownernomer = "94716124952" //ur number
global.lang = "SI" //Select Language "EN" to English "SI" to sinhala 
global.premium = ['94786802371'] //ur premium number
global.botname = '𝚅𝙸𝙷𝙰𝙽𝙶𝙰_𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻_𝙳𝙰𝚁𝙺_𝙽𝙴𝚁𝙾 𝚅8 💞' //ur bot name
global.linkz = "https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtu.be/WiIqCdiDjFo" //ur website to be displayed
global.botscript = 'https://www.darknero.ga/' //script link
global.themeemoji = "🦄" //ur theme emoji
global.packname = "Dark Nero By @𝚅𝙸𝙷𝙰𝙽𝙶𝙰" //ur sticker watermark packname
global.author = "Dark Nero Creating By Cyber Yakuza Team" //ur sticker watermark author
global.wm = "Dark Bot Inc." //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Here you go!',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'ᴘʟᴇᴀꜱᴇ ᴡɪᴛʜ...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

//media target
global.thum = fs.readFileSync("./NeroMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./NeroMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./NeroMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./NeroMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
