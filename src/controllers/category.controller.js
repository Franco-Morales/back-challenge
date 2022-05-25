import { Category } from "../models";


const getAll = async (req, res) => {
    try {
        const data = await Category.find();

        res.json({ data });
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}

const getById = async (req, res) => {
    let { id } = req.params;

    try {
        const doc = await Category.findById(id);

        if(!doc) return res.status(404).json({ message: "Cateory not found" });

        res.json({ data: doc });
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}

const saveOne = async (req, res) => {
    let { name } = req.body;
    try {
        const doc = new Category({ name });

        await doc.save();

        res.status(201).json({ message: `Category saved with id:${doc._id}`});
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}


const updateOneById = async (req, res) => {
    let { name } = req.body;
    const { id: _id } = req.params;

    try {
        const doc = await Category.findByIdAndUpdate(_id, { name });
        
        res.json({ message: `Updated Category with id:${doc._id}`});
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}


const deleteOneById = async (req, res) => {
    const { id } = req.params;

    try {
        const doc = await Category.findByIdAndDelete(id);

        res.json({ message: `Deleted Category with id:${doc._id}` });
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}


export {
    getAll,
    getById,
    saveOne,
    updateOneById,
    deleteOneById
}