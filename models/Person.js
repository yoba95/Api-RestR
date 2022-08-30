import mongoose from "mongoose";
const {Schema, model} = mongoose;

const personSchema = new Schema({

})
export const Person = model("person", personSchema);