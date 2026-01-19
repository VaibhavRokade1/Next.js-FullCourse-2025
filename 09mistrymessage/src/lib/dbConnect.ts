import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const Connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (Connection.isConnected) {
    console.log(`Already Connected.`);
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL || "");
    Connection.isConnected = db.connections[0].readyState;

    console.log("Database Connected Successfully...");
  } catch (error) {
    console.log("Connection failed : ", error);
    process.exit(1);
  }
}

export default dbConnect;
