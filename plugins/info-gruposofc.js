let media = imagen4
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
_Querés pasarla de la puta madre?_
       *UNETE A LOS GRUPOS DE BLACK_BOT*
       *Y TE DIVERTIRAS MAS QUE TU NOVIA EN LA CAMA DE TU AMIGO*

|GRUPO 1|😃
_https://chat.whatsapp.com/GxxpMawzPaW6MR0p2vH432_
|GRUPO 2|🥵
_https://chat.whatsapp.com/I1vjFTvfZQbJI4aw0Vj5dk_
|GRUPO 3| 👻
_https://chat.whatsapp.com/CntRn9MHu6oI29HWU6tVrC_
|GRUPO 4|
https://chat.whatsapp.com/CntRn9MHu6oI29HWU6tVrA
`.trim(), wm, media, [['💟 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💟', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
