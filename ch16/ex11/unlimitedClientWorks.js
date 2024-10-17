import net from "net";

const PORT = 3000;
const HOST = "localhost";
const CLIENT_COUNT_MAX = 10_000_00;

for (let i = 0; i < CLIENT_COUNT_MAX; i++) {
  const client = new net.Socket();
  client.connect(PORT, HOST, () => {
    console.log(`Connected to ${HOST}:${PORT}`);
  });

  client.on("error", (err) => {
    console.log("limited: " + i);
    process.exit(1);
  });
}
