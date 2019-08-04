// Core
import uuidv4 from 'uuid';

// Instruments
import { lessons } from '../odm';

export class Lessons {
    constructor(data) {
        this.data = data;
    }

    _tranformDataCreateLesson(data) {
        const { title, description, order } = data;

        const lesson = {
            title,
            description,
            order,
            hash: uuidv4(),
        };

        return lesson;
    }

    async create() {
        const data = await lessons.create(this._tranformDataCreateLesson(this.data));

        return data;
    }
}
