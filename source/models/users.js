import bcrypt from 'bcrypt';

// Instruments
import { users } from '../odm';

export class Users {
    constructor(data) {
        this.data = data;
    }

    async create() {
        const user = await this._transformCreateUser(this.data);
        const data = await users.create(user);

        return data;
    }

    async _transformCreateUser(data) {
        const { name, email, phone, password, sex, role } = data;
        const hashedPassword = await bcrypt.hash(password, 11);
        const [ first, last ] = name.split(' ');
        const user = {
            name: {
                first,
                last,
            },
            sex,
            emails:   [{ email, primary: true }],
            roles:    [ role ],
            phones:   [{ phone, primary: true }],
            password: hashedPassword,
        };

        return user;
    }
}
