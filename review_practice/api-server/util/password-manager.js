import crypto from 'crypto';

export const encrypt = async password =>
    new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if (err) reject(err);

            const salt = buf.toString('base64');
            crypto.pbkdf2(password, salt, 102342, 64, 'sha512', (error, key) => {
                if (error) reject(error);

                const passwordKey = key.toString('base64');
                resolve({ passwordKey, salt });
            });
        });
    });

export const checkCorrectPassword = async (password, passwordKey, salt) =>
    new Promise((resolve, reject) => {
        crypto.pbkdf2(password, salt.toString(), 102342, 64, 'sha512', (err, key) => {
            if (err) {
                console.log(err);
                reject();
            }

            if (key.toString('base64') === passwordKey.toString()) resolve(true);
            else reject();
        });
    });
