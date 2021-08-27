module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
const { threadID, messageID } = event;
const { resolve } = global.nodemodule["path"];
const path = resolve(__dirname, '../commands', 'cache', 'antiout.json');
const { antiout } = require(path);

if (antiout.hasOwnProperty(threadID) && antiout[threadID] == true) {
      let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = (await api.getUserInfo(event.logMessageData.leftParticipantFbId))[event.logMessageData.leftParticipantFbId].name || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên đá";
 if (type == "tự rời") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`Không thể thêm lại thành viên ${name} vào nhóm :( `, event.threadID)
   } else api.sendMessage(`Á đù con lợn ${name} đã cố gắng trốn khỏi nhóm nhưng không được bot đâu :) `, event.threadID);
  })
 }
    }
 
}