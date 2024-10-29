import db from "../db.js";

const Schema = db.Schema;

const speciesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    discoveryLocation: {
        type: String,
        required: true
    },
    rarity: {
        type: Number,
        enum: [1,2,3,4,5],
        required: true
    },
    documented: {
        type: Boolean,
        required: true
    }
})

const species = db.model("Species", speciesSchema);

export default species
