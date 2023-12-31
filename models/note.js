const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema ({
    title: String,
    content: String,
    createDate: String,
    updateDate: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Note', notesSchema)