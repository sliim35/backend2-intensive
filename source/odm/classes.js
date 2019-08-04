// Core
import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const classesSchema = new mongoose.Schema(
    {
        title:       String,
        description: String,
        hash:        {
            type:   String,
            unique: true,
        },
        students: [
            {
                user:     ObjectId,
                status:   String,
                expelled: Boolean,
                notes:    String,
            },
        ],
        lessons: [
            {
                lesson:    ObjectId,
                scheduled: Date,
            },
        ],
        duration: {
            started: Date,
            closed:  Date,
        },
        order: Number,
    },
    { timestamps: { createdAt: 'created', updatedAt: 'modified' } },
);

classesSchema.index({ title: 'text', description: 'text' });

export const classes = mongoose.model('classes', classesSchema);
