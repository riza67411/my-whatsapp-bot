exports.allmenu = (namabot, pushname, sender, isOwner, isPrem, cekvipp, getLimit, limitawal, limit, balance, getBalance, simbolnya, petik, prefix) => {
return`*👤 User Info*
${simbolnya} Nama: ${pushname} 
${simbolnya} Nomor: @${sender.split("@")[0]} 
${simbolnya} Status: ${isOwner?`Owner`:isPrem?`Premium`:`Gratisan`} 
${simbolnya} Expired Prem: ${isOwner?`Unlimited Owner`:isPrem ? `${cekvipp.days}d, ${cekvipp.hours}h, ${cekvipp.minutes}m, ${cekvipp.seconds}s`:'Not Premium'}
${simbolnya} Limit : ${isOwner?`Unlimited`: isPrem ? `Unlimited Premium` : getLimit(sender, limitawal, limit) +' / '+limitawal}
${simbolnya} Balance : ${getBalance(sender, balance)}

*⚙️ Owner*
${simbolnya} ${prefix}bc [text]
${simbolnya} ${prefix}bcimage [reply foto]
${simbolnya} ${prefix}ban @tag
${simbolnya} ${prefix}unban @tag
${simbolnya} ${prefix}block @tag
${simbolnya} ${prefix}unblock @tag
${simbolnya} ${prefix}setbiobot [text]
${simbolnya} ${prefix}setnamabot [text]
${simbolnya} ${prefix}resetlimit
${simbolnya} ${prefix}prem add @tag waktu
${simbolnya} ${prefix}prem del
${simbolnya} ${prefix}sewa add waktu
${simbolnya} ${prefix}sewa del
${simbolnya} ${prefix}setcmd [reply stiker]
${simbolnya} ${prefix}delcmd [reply stiker]
${simbolnya} ${prefix}listcmd
${simbolnya} ${prefix}auto [ketik/vn]
${simbolnya} > [eval]
${simbolnya} => [async]
${simbolnya} $ [cmd termux]

*Download*
${simbolnya} ${prefix}play [query]
${simbolnya} ${prefix}ytmp3 [url]
${simbolnya} ${prefix}ytmp4 [url]
${simbolnya} ${prefix}video [query]
${simbolnya} ${prefix}igdl [url]
${simbolnya} ${prefix}igstory [username]
${simbolnya} ${prefix}igphoto [url]
${simbolnya} ${prefix}igreel [url]
${simbolnya} ${prefix}igvideo [url]
${simbolnya} ${prefix}igtv [url]
${simbolnya} ${prefix}tiktok [url]
${simbolnya} ${prefix}tiktokaudio [url]
${simbolnya} ${prefix}tiktoknowm [url]
${simbolnya} ${prefix}mediafire [url]

*♻️ Convert*
${simbolnya} ${prefix}sticker [tag foto/vid]
${simbolnya} ${prefix}swm [text|text2]
${simbolnya} ${prefix}take [text|text2]
${simbolnya} ${prefix}attp [text]
${simbolnya} ${prefix}semoji 🐦
${simbolnya} ${prefix}toimg [reply stiker]
${simbolnya} ${prefix}tourl [reply foto/vid]
${simbolnya} ${prefix}tomp4 [reply stiker gif]
${simbolnya} ${prefix}togif [reply stiker gif]
${simbolnya} ${prefix}tomp3 [reply vid]
${simbolnya} ${prefix}tovn [reply music]
${simbolnya} ${prefix}tinyurl [link]
${simbolnya} ${prefix}kontak 62***|nama
${simbolnya} ${prefix}bass  [reply music]
${simbolnya} ${prefix}slow  [reply music]
${simbolnya} ${prefix}fast [reply music]
${simbolnya} ${prefix}robot [reply music]
${simbolnya} ${prefix}detikvn [durasi]
${simbolnya} ${prefix}tupai [reply music]
${simbolnya} ${prefix}vibrato [reply music]

*✏️ Editor*
${simbolnya} ${prefix}memegen teks atas | teks bawah
${simbolnya} ${prefix}stickmeme teks

*🔍 Search*
${simbolnya} ${prefix}pinterest [query]
${simbolnya} ${prefix}wikipedia [query]
${simbolnya} ${prefix}playstore [query]
${simbolnya} ${prefix}yts [query]

*📁 Storage*
${simbolnya} ${prefix}addrespon [pesan|respon]
${simbolnya} ${prefix}delrespon [pesan]
${simbolnya} ${prefix}listrespon
${simbolnya} ${prefix}listbadword
${simbolnya} ${prefix}addbadword [text]
${simbolnya} ${prefix}delbadword [text]
${simbolnya} ${prefix}addvn [text]
${simbolnya} ${prefix}listvn
${simbolnya} ${prefix}delvn [text]
${simbolnya} ${prefix}addimage [text]
${simbolnya} ${prefix}listimage
${simbolnya} ${prefix}delimage [text]
${simbolnya} ${prefix}addvideo [text]
${simbolnya} ${prefix}listvideo 
${simbolnya} ${prefix}delvideo [text]
${simbolnya} ${prefix}addsticker [text]
${simbolnya} ${prefix}liststicker
${simbolnya} ${prefix}delstik [text]

*🎮 Fun*
${simbolnya} ${prefix}slot
${simbolnya} ${prefix}truth
${simbolnya} ${prefix}dare
${simbolnya} ${prefix}voting @tag | alasan | waktu
${simbolnya} ${prefix}delvote
${simbolnya} vote
${simbolnya} devote
   
*🏘️ Group*
${simbolnya} ${prefix}sider [reply pesan bot]
${simbolnya} ${prefix}afk [reason]
${simbolnya} ${prefix}hidetag [text]
${simbolnya} ${prefix}notif [text]
${simbolnya} ${prefix}jadian
${simbolnya} ${prefix}listonline
${simbolnya} ${prefix}tagall
${simbolnya} ${prefix}ceksewa
${simbolnya} ${prefix}add 628XX
${simbolnya} ${prefix}kick @tag
${simbolnya} ${prefix}promote @tag
${simbolnya} ${prefix}demote @tag
${simbolnya} ${prefix}resetlink
${simbolnya} ${prefix}linkgc
${simbolnya} ${prefix}setdesc [text]
${simbolnya} ${prefix}setnamagrup [text]
${simbolnya} ${prefix}grup [open/close]
${simbolnya} ${prefix}antibadword [on/off]
${simbolnya} ${prefix}welcome [on/off]
${simbolnya} ${prefix}antilink [on/off]
${simbolnya} ${prefix}antitroli [on/off]

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
${simbolnya} ${prefix}buylimit [nominal]
${simbolnya} ${prefix}giftlimit @tag | nominal
${simbolnya} ${prefix}buyprem [need 1k limit]
   
*📝 Maker*
${simbolnya} ${prefix}nuliskanan [text]
${simbolnya} ${prefix}nuliskiri [text]
${simbolnya} ${prefix}foliokanan [text]
${simbolnya} ${prefix}foliokiri [text]
${simbolnya} ${prefix}naruto [text]
${simbolnya} ${prefix}shadow [text]
${simbolnya} ${prefix}lovemsg [text]
${simbolnya} ${prefix}doubleheart [text]
${simbolnya} ${prefix}coffecup [text]
${simbolnya} ${prefix}lovetext [text]
${simbolnya} ${prefix}butterfly [text]
${simbolnya} ${prefix}romantic [text]
${simbolnya} ${prefix}smoke [text]
${simbolnya} ${prefix}burnpaper [text]
${simbolnya} ${prefix}grass [text]

*✨ Others*
${simbolnya} ${prefix}pantun
${simbolnya} ${prefix}faktaunik
${simbolnya} ${prefix}donasi
${simbolnya} ${prefix}asupan
${simbolnya} ${prefix}nulis
${simbolnya} ${prefix}getnumber [reply user]
${simbolnya} ${prefix}getpic @tag
${simbolnya} ${prefix}wame 
${simbolnya} ${prefix}towame`
}

© Netrythical Copyright 2021
