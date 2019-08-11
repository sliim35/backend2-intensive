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
        const { name, email, phone, password, sex, role } = data;
        const [ first, last ] = name.split(' ');
        const hashedPassword = await bcrypt.hash(password, 11);

        const user = {
            name: {
                first,
                last,
            },
            password: hashedPassword,
            phones:   [{ phone }],
            emails:   [{ email }],
            sex,
            roles:    [ role ],
            hash:     uuidv4(),
        };

        return user;
    }

    async create() {
        const data = await users.create(this._tranformDataCreateUser(this.data));

        return data;
    }
}
