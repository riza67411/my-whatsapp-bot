exports.allmenu = (namabot, pushname, sender, isOwner, isPrem, cekvipp, getLimit, limitawal, limit, balance, getBalance, simbolnya, petik, prefix) => {
return`*👤 User Info*
${simbolnya} Nama: ${pushname} 
${simbolnya} Nomor: @${sender.split("@")[0]} 
${simbolnya} Status: ${isOwner?`Owner`:isPrem?`Premium`:`Gratisan`} 
${simbolnya} Expired Prem: ${isOwner?`Unlimited Owner`:isPrem ? `${cekvipp.days}d, ${cekvipp.hours}h, ${cekvipp.minutes}m, ${cekvipp.seconds}s`:'Not Premium'}
${simbolnya} Limit : ${isOwner?`Unlimited`: isPrem ? `Unlimited Premium` : getLimit(sender, limitawal, limit) +' / '+limitawal}
${simbolnya} Balance : ${getBalance(sender, balance)}

*⚙️ Owner*
${simbolnya} ${prefix}bc <text>
${simbolnya} ${prefix}bcimage <reply image>
${simbolnya} ${prefix}ban <tag>
${simbolnya} ${prefix}unban <tag>
${simbolnya} ${prefix}block <tag>
${simbolnya} ${prefix}unblock <tag>
${simbolnya} ${prefix}setbiobot <text>
${simbolnya} ${prefix}setnamabot <text>
${simbolnya} ${prefix}resetlimit
${simbolnya} ${prefix}prem add <tag> <time>
${simbolnya} ${prefix}prem del
${simbolnya} ${prefix}sewa add <time>
${simbolnya} ${prefix}sewa del
${simbolnya} ${prefix}setcmd <reply sticker>
${simbolnya} ${prefix}delcmd <reply stiker>
${simbolnya} ${prefix}listcmd
${simbolnya} ${prefix}auto <ngetik/vn>
${simbolnya} > <eval>
${simbolnya} => <async>
${simbolnya} $ <cmd termux>

*📥 Download*
${simbolnya} ${prefix}play <query>
${simbolnya} ${prefix}ytmp3 <url>
${simbolnya} ${prefix}ytmp4 <url>
${simbolnya} ${prefix}video <query>
${simbolnya} ${prefix}igdl <url>
${simbolnya} ${prefix}igstory <username>
${simbolnya} ${prefix}igphoto <url>
${simbolnya} ${prefix}igreel <url>
${simbolnya} ${prefix}igvideo <url>
${simbolnya} ${prefix}igtv <url>
${simbolnya} ${prefix}tiktok <url>
${simbolnya} ${prefix}tiktokaudio <url>
${simbolnya} ${prefix}tiktoknowm <url>
${simbolnya} ${prefix}mediafire <url>

*♻️ Convert*
${simbolnya} ${prefix}sticker <reply media>
${simbolnya} ${prefix}swm <text>|<text>
${simbolnya} ${prefix}take <text>|<text>
${simbolnya} ${prefix}attp <text>
${simbolnya} ${prefix}semoji <emoji>
${simbolnya} ${prefix}toimg <reply sticker>
${simbolnya} ${prefix}tourl <reply media>
${simbolnya} ${prefix}tomp4 <reply gif sticker>
${simbolnya} ${prefix}togif <reply gif sticker>
${simbolnya} ${prefix}tomp3 <reply video>
${simbolnya} ${prefix}tovn <reply audio>
${simbolnya} ${prefix}tinyurl <url>
${simbolnya} ${prefix}kontak <number>|<name>

*🎶 Voice Changer*
${simbolnya} ${prefix}bass  <reply audio>
${simbolnya} ${prefix}slow  <reply audio>
${simbolnya} ${prefix}fast <reply audio>
${simbolnya} ${prefix}robot <reply audio>
${simbolnya} ${prefix}detikvn <duration>
${simbolnya} ${prefix}tupai <reply audio>
${simbolnya} ${prefix}vibrato <reply audio>

*✏️ Editor*
${simbolnya} ${prefix}memegen <text>|<text>
${simbolnya} ${prefix}stickmeme <text>

*🔍 Search*
${simbolnya} ${prefix}pinterest <query>
${simbolnya} ${prefix}wikipedia <query>
${simbolnya} ${prefix}playstore <query>
${simbolnya} ${prefix}yts <query>

*📁 Storage*
${simbolnya} ${prefix}addrespon <message>|<response>
${simbolnya} ${prefix}delrespon <message>
${simbolnya} ${prefix}listrespon
${simbolnya} ${prefix}listbadword
${simbolnya} ${prefix}addbadword <text>
${simbolnya} ${prefix}delbadword <text>
${simbolnya} ${prefix}addvn <text>
${simbolnya} ${prefix}listvn
${simbolnya} ${prefix}delvn <text>
${simbolnya} ${prefix}addimage <text>
${simbolnya} ${prefix}listimage
${simbolnya} ${prefix}delimage <text>
${simbolnya} ${prefix}addvideo <text>
${simbolnya} ${prefix}listvideo 
${simbolnya} ${prefix}delvideo <text>
${simbolnya} ${prefix}addsticker <text>
${simbolnya} ${prefix}liststicker
${simbolnya} ${prefix}delstik <text>

*🎮 Fun*
${simbolnya} ${prefix}slot
${simbolnya} ${prefix}truth
${simbolnya} ${prefix}dare
${simbolnya} ${prefix}voting <tag>|<reason>|<time>
${simbolnya} ${prefix}delvote
${simbolnya} vote
${simbolnya} devote
   
*🏘️ Group*
${simbolnya} ${prefix}sider <reply message bot>
${simbolnya} ${prefix}afk <reason>
${simbolnya} ${prefix}hidetag <text>
${simbolnya} ${prefix}notif <text>
${simbolnya} ${prefix}jadian
${simbolnya} ${prefix}listonline
${simbolnya} ${prefix}tagall
${simbolnya} ${prefix}ceksewa
${simbolnya} ${prefix}add <number>
${simbolnya} ${prefix}kick <tag>
${simbolnya} ${prefix}promote <tag>
${simbolnya} ${prefix}demote <tag>
${simbolnya} ${prefix}resetlink
${simbolnya} ${prefix}linkgc
${simbolnya} ${prefix}setdesc <text>
${simbolnya} ${prefix}setnamagrup <text>
${simbolnya} ${prefix}grup <open/close>
${simbolnya} ${prefix}antibadword <on/off>
${simbolnya} ${prefix}welcome <on/off>
${simbolnya} ${prefix}antilink <on/off>
${simbolnya} ${prefix}antitroli <on/off>

*🇯🇵 Anime* 
${simbolnya} ${prefix}loli
${simbolnya} ${prefix}neko
${simbolnya} ${prefix}waifu
${simbolnya} ${prefix}shinobu
${simbolnya} ${prefix}megumin
${simbolnya} ${prefix}bully
${simbolnya} ${prefix}cuddle
${simbolnya} ${prefix}cry
${simbolnya} ${prefix}hug
${simbolnya} ${prefix}awoo
${simbolnya} ${prefix}kiss
${simbolnya} ${prefix}lick
${simbolnya} ${prefix}pat
${simbolnya} ${prefix}smug
${simbolnya} ${prefix}bonk
${simbolnya} ${prefix}yeet
${simbolnya} ${prefix}blush
${simbolnya} ${prefix}smile
${simbolnya} ${prefix}wave
${simbolnya} ${prefix}highfive
${simbolnya} ${prefix}handhold
${simbolnya} ${prefix}nom
${simbolnya} ${prefix}bite
${simbolnya} ${prefix}glomp
${simbolnya} ${prefix}slap
${simbolnya} ${prefix}kill
${simbolnya} ${prefix}happy
${simbolnya} ${prefix}wink
${simbolnya} ${prefix}poke
${simbolnya} ${prefix}dance
${simbolnya} ${prefix}cringe
   
*🔖 Limit*
${simbolnya} ${prefix}topbalance
${simbolnya} ${prefix}toplimit
${simbolnya} ${prefix}limit
${simbolnya} ${prefix}level
${simbolnya} ${prefix}balance
${simbolnya} ${prefix}buylimit <nominal>
{simbolnya} ${prefix}giftlimit <tag>| <nominal>
${simbolnya} ${prefix}buyprem 
   
*📝 Maker*
${simbolnya} ${prefix}nuliskanan <text>
${simbolnya} ${prefix}nuliskiri <text>
${simbolnya} ${prefix}foliokanan <text>
${simbolnya} ${prefix}foliokiri <text>
${simbolnya} ${prefix}naruto <text>
${simbolnya} ${prefix}shadow <text>
${simbolnya} ${prefix}lovemsg <text>
${simbolnya} ${prefix}doubleheart <text>
${simbolnya} ${prefix}coffecup <text>
${simbolnya} ${prefix}lovetext <text>
${simbolnya} ${prefix}butterfly <text>
${simbolnya} ${prefix}romantic <text>
${simbolnya} ${prefix}smoke <text>
${simbolnya} ${prefix}burnpaper <text>
${simbolnya} ${prefix}grass <text>

*✨ Others*
${simbolnya} ${prefix}pantun
${simbolnya} ${prefix}faktaunik
${simbolnya} ${prefix}donasi
${simbolnya} ${prefix}asupan
${simbolnya} ${prefix}nulis
${simbolnya} ${prefix}getnumber <reply target message>>
${simbolnya} ${prefix}getpic <tag>
${simbolnya} ${prefix}wame 
${simbolnya} ${prefix}towame

*🤝🏻 Thanks To*
${simbolnya} Allah SWT
${simbolnya} My Parents
${simbolnya} All Contributions
${simbolnya} Zeeone OFC
${simbolnya} All Bot Users

Regards, Ikbal Maulana a.k.a Netrythical
`
}
