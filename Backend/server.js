const http = require("http");
const app = require("./app");
const connectTodb = require("./db/db");

const port = process.env.PORT || 5000;

(async () => {
  await connectTodb(); // ⬅️ WAIT FOR DB

  const server = http.createServer(app);
  server.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
})();
