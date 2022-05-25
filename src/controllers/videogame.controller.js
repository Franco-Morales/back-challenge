import { Videogame } from "../models";


const getAll = async (req, res) => {
    try {
        const data = await Videogame.find();

        res.json({ data });
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}

const getById = async (req, res) => {
    let { id } = req.params;

    try {
        const doc = await Videogame.findById(id);

        if(!doc) return res.status(404).json({ message: "Videogame not found" });

        res.json({ data: doc });
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}

const saveOne = async (req, res) => {
    let { title, desc: description, developer, characters, category, release, cover } = req.body;
    try {
        const doc = new Videogame({ title, description, developer, characters, category, release, cover });

        await doc.save();

        res.status(201).json({ message: `Videogame saved with id:${doc._id}`});
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}


const updateOneById = async (req, res) => {
    let { title, desc: description, developer, characters, category, release, cover } = req.body;
    const { id: _id } = req.params;

    try {
        const doc = await Videogame.findByIdAndUpdate( 
            _id ,
            {
                title, description, developer, characters, category, release, cover
            }
        );
        
        res.json({ message: `Updated videogame with id:${doc._id}`});
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}


const deleteOneById = async (req, res) => {
    const { id } = req.params;

    try {
        const doc = await Videogame.findByIdAndDelete(id);

        res.json({ message: `Deleted videogame with id:${doc._id}` });
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