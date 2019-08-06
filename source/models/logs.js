// Instruments
import { logs } from '../odm';

export class Logs {
    constructor(data) {
        this.data = data;
    }

    _tranformDataCreateLogs(req) {
        const { method, body } = req;

        const logs = {
            method,
            payload: body,
        };

        return logs;
    }

    async create() {
        const data = await logs.create(this._tranformDataCreateLogs(this.data));

        return data;
    }
}
