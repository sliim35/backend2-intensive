// Instruments
import { Logs as LogsModel } from '../models';

export class Logs {
    constructor(data) {
        this.models = {
            logs: new LogsModel(data),
        };
    }

    async create() {
        const data = await this.models.logs.create();

        return data;
    }
}
