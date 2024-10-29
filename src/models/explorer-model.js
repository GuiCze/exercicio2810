import db from "../db.js";

const Schema = db.Schema;

const explorerSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    fieldOfStudy: {
        type: String,
        required: true
    },
    expeditionsParticipated: {
        type: Number,
        required: true
    },
    speciesDiscovered: {
        type: [db.SchemaTypes.ObjectId],
        ref:"Species",
        required: true
    }
})

const Explorer = db.model("Explorer", explorerSchema);

export default Explorer