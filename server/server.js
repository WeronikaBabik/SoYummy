const { serverPort } = require("./config");
const { app } = require("./app");
const db = require("./db");

app.listen(serverPort, async () => {
  try {
    await db.connect();
    console.log("Database connection established");
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
  console.log(`Our app listening on port: ${serverPort}`);
});
