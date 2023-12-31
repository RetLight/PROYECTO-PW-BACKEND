import repository from "../repository/reserva.js";

const findAll = async (req,res) => {

    const reserva = await repository.findAll();

    return res.status(200).json(reserva);

}

const create = async (req,res) => {
    const result = await repository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async (req,res) => {
    const id = req.params.id;
    const result = await repository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = (req,res) => {
    const result = repository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = (req,res) => {
    const id = req.params.id;
    
    const result = repository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const findAllComplete = (req,res) => {
    const result = service.findAllComplete();

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const controller = { findAll, create, findOne, update, remove, findAllComplete }

export default controller;