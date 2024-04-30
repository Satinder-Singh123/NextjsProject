//  import { User } from "../models/user"
import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });
    console.log("db connected !!!!!");

    console.log("connected with  host", connection.host);
  } catch (error) {
    console.log(error);
    console.log("failed to connect database");
  }
};

// export const connectDb = () => {
//   mongoose
//     .connect(process.env.MONGO_DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => console.log("Database connected!"))
//     .catch((err) => console.log(err));
// };
