// Core
import uuidv4 from 'uuid/v4';

// Instruments
import { classes } from '../odm';

export class Classes {
    constructor(data) {
        this.data = data;
    }

    _tranformDataCreateClasses(data) {
        const { title, description, order, started, closed } = data;

        const classObj = {
            title,
            description,
            order,
            duration: {
                started,
                closed,
            },
            hash: uuidv4(),
        };

        return classObj;
    }

    async create() {
        const data = await classes.create(this._tranformDataCreateClasses(this.data));

        return data;
    }
}
