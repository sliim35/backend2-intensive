// Core
import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    name: {
        first: {
            type:     String,
            required: true,
        },
        last: {
            type:     String,
            required: true,
        },
    },
    emails: [
        {
            email:   String,
            primary: Boolean,
        },
    ],
    phones: [
        {
            phone:   String,
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
    socials: {
        facebook: String,
        linkedin: String,
        github:   String,
        skype:    String,
    },
});

export const users = mongoose.model('users', usersSchema);
