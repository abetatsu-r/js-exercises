const p = document.createElement("p");
const br = document.createElement("br");
p.append("日時: ", new Date(), br);
p.append("プロトコル: ", location.protocol, br.cloneNode(true));
p.append("利用環境: ", navigator.userAgent, br.cloneNode(true));
document.querySelector("br").after(p);
