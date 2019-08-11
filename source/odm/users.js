// Core
import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    name: {
        first: String,
        last:  String,
    },
    phones: [
        {
            phone:   String,
            primary: Boolean,
        },
    ],
    emails: [
        {
            email: {
                type:   String,
                unique: true,
            },
            primary: Boolean,
        },
    ],
    password: {
        type:   String,
        select: false,
    },
    sex: {
        type: String,
        enum: [ 'm', 'f' ],
    },
    roles:  [ String ],
    social: {
        facebook: String,
        linkedin: String,
        github:   String,
        skype:    String,
    },
    notes: String,
    hash:  {
        type:   String,
        unique: true,
    },
    disabled: Boolean,
    created:  Date,
    modified: Date,
});

usersSchema.index({ 'name.first': 1, 'name.last': 1, title: 'text', description: 'text' });

export const users = mongoose.model('users', usersSchema);
