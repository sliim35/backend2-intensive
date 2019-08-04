import mongoose from 'mongoose';

const lessonsSchema = new mongoose.Schema(
    {
        title:       String,
        description: String,
        order:       Number,
        hash:        {
            type:   String,
            unique: true,
        },
        availability: [ String ],
        content:      {
            videos: [
                {
                    title: String,
                    order: Number,
                    uri:   String,
                },
            ],
            keynotes: [
                {
                    title: String,
                    order: Number,
                    uri:   String,
                },
            ],
        },
    },
    { timestamps: { createdAt: 'created', updatedAt: 'modified' } },
);

lessonsSchema.index({ title: 'text', description: 'text' });

export const lessons = mongoose.model('lessons', lessonsSchema);
