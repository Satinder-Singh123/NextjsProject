import mongoose from "mongoose";

const config = {
  isConnected: 0,
};
export const connectDb = async () => {
  if (config.isConnected) {
    return;
  }
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });
    console.log("db connected !!!!!");
    config.isConnected = connection.readyState;
    //    console.log(connection)
    //console.log("connected with  host", connection.host);
  } catch (error) {
    console.log(error);
    console.log("failed to connect database");
  }
};
