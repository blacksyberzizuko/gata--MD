import {youtubeSearch} from "@bochilteam/scraper";
import fetch from "node-fetch";
let handler = async (m, {conn, command, text, usedPrefix}) => {
  if (!text)
    throw `*⚠️ INGRESE EL NOMBRE/TITULO DE UNA CANCIÓN*\n\n*➢ EJEMPLO:*\n*${ usedPrefix + command } Phonk*`


    try {
      let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json();
      let {videoId, title, views, published, thumbnail} = await vid2.result[0];
      const url = "https://www.youtube.com/watch?v=" + videoId;
      let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
      let jsonn = await ytLink.json();
      let aud = await jsonn.result.audio;
      let capt = `➢ *TITULO:* ${title}\n➢ *PUBLICADO:* ${published}\n➢ *VISTAS:* ${views}\n➢ 🔗 *LINK:* ${url}`;
      const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: "📋 𝐌𝐀𝐒 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 📋"}, type: 1}];
      const buttonMessage = `*∘ 📩 DESCARGANDO*
${yt_play[0].title}

*∘ ⏰ DURACIÓN* 
${secondString(yt_play[0].duration.seconds)}

*∘ 👤 AUTOR*
${yt_play[0].author.name}

*∘ 📍 CANAL*
${yt_play[0].author.url}

*∘ 📎 LINK*
${yt_play[0].url}

*⌚ ENVIANDO ${additionalText}, POR FAVOR ESPERE.*`.trim()
      let msg = await conn.sendMessage(m.chat, buttonMessage, {quoted: m});
      conn.sendMessage(m.chat, {document: {url: aud}, mimetype: "audio/mpeg", fileName: `${title}.mp3`}, {quoted: msg});
    } catch {
      throw "*[❗𝐈𝐍𝐅𝐎❗] ERROR, POR FAVOR VUELVA A INTENTARLO*";
    }
  }

handler.help = ["playdoc", "play3"].map((v) => v + " <pencarian>");
handler.tags = ["downloader"];
handler.command = /^play3|playdoc?$/i;
handler.dolares = 5;
export default handler;
