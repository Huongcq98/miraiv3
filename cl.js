module.exports.config = {
    name: "cl",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team, Hung Cho, Huongcq98",
    description: "Đánh bạc Chẵn Lẻ",
    commandCategory: "game-sp",
    usages: "cl agrs[0] agrs[1]",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Currencies }) {
     const getRandomInt = (min, max) => {
       return Math.floor(Math.random() * (max - min)) + min;
    const moneyUser = (await Currencies.getData(event.senderID)).money;
    var moneyBet = parseInt(args[1]);
    var number = getRandomInt(0, 2), win = false
    var data = await Currencies.getData(event.senderID);
    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage("[Chẵn Lẻ] Số coin đặt cược không được để trống hoặc là số coin âm", event.threadID, event.messageID);
	if (moneyBet > moneyUser) return api.sendMessage("[Chẵn Lẻ] Số coin bạn đặt lớn hơn số dư của bạn!", event.threadID, event.messageID);
	if (moneyBet < 50) return api.sendMessage("[Chẵn Lẻ] Số coin đặt không được dưới 50 coin!", event.threadID, event.messageID);
  if (!args[0]) api.sendMessage("Không có số dự đoán.", event.threadID, event.messageID)
   else {
     if (args[0] > 2) api.sendMessage("Dự đoán không được lớn hơn 2.", event.threadID, event.messageID)
    else {
          if (args[0] == number){
            moneyBet *= 2
            win = true;
          }
            switch (win) {
              case true: {
                api.sendMessage(`Bạn đã thắng với 
                ${moneyBet} coin`, event.threadID, event.messageID);
                await Currencies.increaseMoney(event.senderID, moneyBet);
                break;
              }
              case false: {
                api.sendMessage(`Bạn đã thua và mất ${moneyBet} coin`, event.threadID, event.messageID);
                await Currencies.decreaseMoney(event.senderID, moneyBet);
                break;
              }
            }
            }
    }  
   }
}
