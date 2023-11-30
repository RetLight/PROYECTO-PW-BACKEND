import RepositoryBase from "../repository/base.js";
import modelo from '../model/usuario.js'

const Repository = new RepositoryBase(modelo);

const findAll = async (req,res) => {

    const usuario = await Repository.findAll();

    return res.status(200).json(usuario);

}

const create = async (req,res) => {
    const result = await Repository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async (req,res) => {
    const id = req.params.id;
    const result = await Repository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = async (req,res) => {
    const result = await Repository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = async (req,res) => {
    const id = req.params.id;
    
    const result = await Repository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const usuarioController = { findAll, create, findOne, update, remove }

export default usuarioController;