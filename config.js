const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

global.APIKeys = {
	'https://zenzapis.xyz': 'cb2f7f0302',
}

global.owner = ['6281998903280']
global.premium = ['6281998903280', '6287780336166', '628895986560', '6289649955199', '6288806066502']
global.packname = 'Use Your Brain'
global.author = 'WhatsApp Bot'
global.sessionName = 'session'
global.prefa = ['','!','.']
global.sp = '•'
global.limitawal = {
    premium: "Infinity",
    free: 50
}
global.thumb = fs.readFileSync('./lib/reika.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }
global.mess = {
    success: '😆 Success',
    admin: 'Fitur Khusus Admin Group!😐',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!😐',
    owner: 'Fitur Khusus Owner Bot😅',
    group: 'Fitur Digunakan Hanya Untuk Group!😐',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!😐',
    bot: 'Fitur Khusus Pengguna/Premium Nomor Bot😳',
    wait: 'Sedang Mengirim Hasil...🏃',
    endLimit: 'Limit Harian Anda Telah Habis😔, Limit Akan Direset Setiap Jam 12😃',
    menu: `*Makasih Udah Hubungi Reika🌻.*
Simbol Awalan Yg Berlaku =  [  #   !   .   /   ]
Tanpa Simbol Awalan Juga Bisa.

Berikut Fitur Reika.
m1 = Fitur Downloader.
m2 = Fitur Tools.
m3 = Fitur Wibu.
m4 = Fitur Grup.
m5 = Fitur Coli. (Premium)
m6 = Fitur Pencarian.
m7 = Credits.

Bot Ditangani Oleh Kyura`,
    m1: `- *#ytmp3* _[url]_
Unduh Lagu Via Link YouTube.
Cntoh : #ytmp3 https://youtu.be/E2jre5tUj9M

- *#ytmp4* _[url]_
Unduh Video Via Link YouTube.
Cntoh : #ytmp4 https://youtu.be/E2jre5tUj9M

- *#yts* _[judulnya]_
Mencari Judul,Link,Video Di YouTube.
Cntoh : #yts kyuralyric

*Keterangan* : _[url]_ = Isi URL/Link setelah command.
_[judulnya]_ = Isi Judul yang ingin Kamu cari.
Command = Fitur yang mau kamu Gunakan.`,

   m2: `- *#s*
Membuat Sticker Dari Media Video/Foto.
_Disarankan Resolusinya Kotak/1:1._

- *#toimg*
Mengubah Sticker Ke Media Foto.

- *#tovid*
Mengubah GIF/Sticker Ke Media Video.

- *#togif*
Mengubah Video/Sticker Menjadi Media GIF

- *#tourl*
Mengubah Semua Media Menjadi URL Link.

- *#tovn*
Mengubah Video/Audio Menjadi Voice Note.

- *#tomp3*
Mengubah Video Menjadi Media Audio.`,

   m3: `- *#waifu*
Ngegacha Waifu Waifu Anime.

- *#neko*
Ngegacha Neko/Kucing Anime.

- ~#kiss~
Belum Dikerjakan.

- ~#dance~
Belum Dikerjakan.

- ~#cringe~
Belum Dikerjakan.`,
   m4: `- *#ephemeral*
Berikan Waktu Sewaan Bot Ke Grup.

- *#setppgc*
Mengganti Photo Profile Grup.

- *#setname*
Mengganti Nama Grup.

- *#setdesc*
Mengganti Deskripsi Grup.

- *#group open/close*
Mengatur Grup Terbuka/Tertutup.

- *#editinfo*
Mengatur Edit Info Grup.

- *#hidetag*
Nge Tag Seluruh Anggota Grup Sembunyi".

- *#tagall*
Tag Seluruh Anggota Grup.

- *#totag*
Nge Tag Seluruh Anggota menggunakan Media.

- *#mute*
Mengatur bot untuk nonaktif/aktif

- *#promote*
Mengatur seseorang menjadi Admin.

- *#demote*
Memberhentikan Seseorang menjadi bukan Admin.

- *#vote*
Melakukan Voting Suara Satu Grup.

- *#devote*
Membatalkan Vote

- *#upvote*
Mengiya kan Vote

- *#cekvote*
Mengecek Hasil Voting

- *#hapusvote*
Menghapus Voting yang ada di grup.`,

   m5: `nanti aja, kyura lagi capek.`,
   m6: `- *#gimage*
Mencari Gambar Melalui Google.

- *#pinterest*
Mencari Gambar Melalui Pinterest.

- *#wallpaper*
Mencari Wallpaper.

- *#wikimedia*
Mencari Informasi Mengenai Media.`,
   m7: `*CREDITS TO :*
DIKA ARDIANT 
GH : https://github.com/DikaArdnt

FATIH
GH : https://github.com/FatihArridho

KYURA
GH : https://github.com/kyuraoct`,
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
