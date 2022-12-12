import { request } from 'express';
import userSchema from '../Schema/userSchema.js';

export const addUser = async (request, response) => {

const user = request.body;
const newUser = userSchema(user);
try{
    await newUser.save();
    return response.status(201).json(newUser);

}catch(error){
    return response.status(500).json({message: error.message})
}
}

export const getUsers = async (request, response) => {
    try{
        const users = await userSchema.find();
        return response.status(200).json(users);
    }catch(error){
        return response.status(500).json({message: error.message})
    }
}

export const getUser = async (request, response) => {
    try{
        const user = await userSchema.find({_id : request.params.id});
        //const users = await userSchema.findById(request.params.id);

        return response.status(200).json(user);
    }catch(error){
        return response.status(500).json({message: error.message})
    }
}

export const editUser = async (request, response) => {
    let user = request.body;
    const editUser = new userSchema(user);
    try{
        const user = await userSchema.updateOne({_id: request.params.id}, editUser);
        return response.status(201).json(editUser);
    }catch(error){
        return response.status(500).json({message : error.message});
    }
}

export const deleteUser = async (request, response) => {
    try{
         await userSchema.deleteOne({_id: request.params.id});
         return response.status(200).json({message: "User deleted successfully"});
    }catch(error){
        return response.status(500).json({message : error.message})
    }
}