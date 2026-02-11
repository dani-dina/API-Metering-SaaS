import app from "./app.js";
import connectDB from "./database/connect.js";

const PORT = process.env.PORT || 5000;

async function startServer() {
  await connectDB();

  const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  process.on("SIGTERM", () => {
    server.close(() => {
      console.log("Server closed gracefully");
    });
  });
}

startServer();
