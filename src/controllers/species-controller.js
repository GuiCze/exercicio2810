import Species from "../models/species-model.js";

const store = async (req,res)=>{
    try{
    const connect = await Species.create(req.body)
    res.status(201).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const index = async (req,res)=>{
    try{
        const connect = await Species.find()
        res.status(200).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const show = async (req,res)=>{
    try{
        const connect = await Species.findById(req.params.id)
        res.status(200).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const update = async (req,res)=>{
    try{
        console.log("aqui");
        const connect = await Species.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const destroy = async (req,res)=>{
    try{
        const connect = await Species.findByIdAndDelete(req.params.id)
        res.status(200).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}


export default {store, index, show, update, destroy}