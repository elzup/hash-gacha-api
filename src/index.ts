import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello world");
});

app.get("/time-gacha", (_, res) => {
  const t = Date.now();
  res.setHeader("Time-Gacha", +t);

  res.send(timeGaha(new Date(t)));
});

function timeGaha(date: Date) {
  const m000 = date.getMilliseconds() == 0;
  const s10 = date.getSeconds() % 10 === 0;
  if (m000 && s10) {
    return `Ultra_Rare X) 10000exp`;
  }
  if (m000) {
    return `Super_Rare :) 1000exp`;
  }
  if (date.getMilliseconds() % 100 === 0) {
    return `Rare :| 100exp`;
  }
  if (date.getMilliseconds() % 10 === 0) {
    return `Normal 10exp`;
  }

  return `None 1exp`;
}

app.listen(3001, () => console.log("Server is running"));
