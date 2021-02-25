let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Drawl Nag
Script: @Nurotomo
Github: 
https://github.com/lastsymphony/testv2

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @arpunchs
➥ YouTube:
aditya jatayu

*Thanks To :*
Nurotomo
MfarelS
last
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ SmartFren: 6289670394574
╠➥ Tsel: 6289670394574
╠➥ Indosat: 6289670394574
║>Request? Wa.me/6289670394574
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

