//Core
import uuidv4 from 'uuid/v4';
import bcrypt from 'bcrypt';

// Instruments
import { users } from '../odm';

export class Users {
    constructor(data) {
        this.data = data;
    }

    async _tranformDataCreateUser(data) {
        const { name, emails, phones, password, sex, role } = data;
        const [ first, last ] = name.split(' ');
        const hashedPassword = await bcrypt.hash(password, 11);

        const user = {
            name: {
                first,
                last,
            },
            password: hashedPassword,
            phones,
            emails,
            sex,
            roles:    [ role ],
            hash:     uuidv4(),
        };


        return user;
    }

    async create() {
        const data = await users.create(await this._tranformDataCreateUser(this.data));

        return data;
    }
}
