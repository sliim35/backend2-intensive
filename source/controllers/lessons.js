// Instruments
import { Lessons as LessonsModel } from '../models';

export class Lessons {
    constructor(data) {
        this.models = {
            lessons: new LessonsModel(data),
        };
    }

    async create() {
        const data = await this.models.lessons.create();

        return data;
    }

    async getAll() {
        const data = await this.models.lessons.getAll();

        return data;
    }

    async getByHash() {
        const data = await this.models.lessons.getByHash();

        return data;
    }

    async updateByHash() {
        const data = await this.models.lessons.updateByHash();

        return data;
    }

    async removeByHash() {
        const data = await this.models.lessons.removeByHash();

        return data;
    }
}
