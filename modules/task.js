const mongoose = require('mongoose')
const taskSchema = mongoose.Schema(
    {
        name: {
            type: 'string',
            required: [true, 'must be provided'],
            maxLength: [20,'max length is 20 characters'],
            trim: true
        },
        compeleted:{
            type: Boolean,
            default: false       }
    }
)
module.exports = mongoose.model('task', taskSchema);