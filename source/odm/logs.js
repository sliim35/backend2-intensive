// Core
import mongoose from 'mongoose';

const logsSchema = new mongoose.Schema(
    {
        method:   String,
        path:     String,
        duration: {
            start: Date,
            end:   Date,
        },
        payload: Object,
        agent:   String,
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: false,
        },
        capped: {
            size: 50 * 1024 * 1024,
            max:  50000,
        },
    },
);

export const logs = mongoose.model('logs', logsSchema);
