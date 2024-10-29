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
        type: Number
    },
    speciesDiscovered: {
        type: [db.SchemaTypes.ObjectId],
        ref:"Species"
    }
})

const Explorer = db.model("Explorer", explorerSchema);

export default Explorer