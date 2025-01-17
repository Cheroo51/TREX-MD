"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "🔎", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/berabotsmd/TREX-MD';
  const img = 'https://telegra.ph/file/e883c3cc22b0ded5e380e.jpg';


  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*𝐇𝐞𝐲 𝐒𝐬𝐮𝐩 𝐏𝐚𝐥 🤗 𝐢𝐭𝐬 𝐬𝐞𝐞𝐦𝐬 𝐲𝐨𝐮 𝐥𝐢𝐤𝐞 𝐓𝐫𝐞𝐱-𝐌𝐝,  *\n  
      *𝐀𝐥𝐥 𝐘𝐨𝐮 𝐍𝐞𝐞𝐝 𝐓𝐨 𝐊𝐧𝐨𝐰 𝐢𝐬 𝐇𝐞𝐫𝐞.*
╭─────────༻༻༻────────
││ *𝐒𝐞𝐬𝐬𝐢𝐨𝐧* https://zzni-ec6c49062fd5.herokuapp.com/
││ *𝐑𝐞𝐩𝐨:* ${data.html_url}
││ *𝐒𝐭𝐚𝐫𝐬:* ${repoInfo.stars}
││ *𝐅𝐨𝐫𝐤𝐬:* ${repoInfo.forks}
││ *𝐑𝐞𝐥𝐞𝐚𝐬𝐞 𝐃𝐚𝐭𝐞:* ${releaseDate}
││ *𝐔𝐩𝐝𝐚𝐭𝐞𝐝: ${repoInfo.lastUpdate}
││ *𝐎𝐰𝐧𝐞𝐫:*  𝐁𝐄𝐑𝐀
││ *𝐂𝐡𝐚𝐧𝐧𝐞𝐥:* https://whatsapp.com/channel/0029VajJoCoLI8YePbpsnE3q
││ *𝐘𝐨𝐮𝐭𝐮𝐛𝐞:* https://youtube.com/@wemacomic
╰─────────༻༻༻────────
          *𝐓𝐑𝐄𝐗 𝐌𝐃*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
