import model from "./model.js"; 
import { v4 as uuidv4 } from "uuid";

export default function UsersDao() {
  const createUser = (user) => {
    const newUser = { ...user, _id: uuidv4() };
    return model.create(newUser);
  };

  const findUsersByRole = (role) => model.find({ role: role }); // or just model.find({ role }) 

  const findAllUsers = () => model.find();

  const findUserById = (userId) =>  model.findById(userId);     // retrieves a user document by its primary key

  const findUserByUsername = (username) => model.findOne({ username: username });

  const findUserByCredentials = (username, password) => model.findOne({ username, password });

  const findUsersByPartialName = (partialName) => { 
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive 
    return model.find({ 
      $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }], 
    }); 
  }; 

  const updateUser = (userId, user) =>  model.updateOne({ _id: userId }, { $set: user }); 

  const deleteUser = (userId) =>  model.findByIdAndDelete( userId );


  return {
    createUser,
    findUsersByRole,
    findAllUsers,
    findUserById,
    findUserByUsername,
    findUserByCredentials,
    findUsersByPartialName,
    updateUser,
    deleteUser,
  };
}
