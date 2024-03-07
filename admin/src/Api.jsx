export function login(credentials) {
    const { email, password } = credentials;

    return new Promise((resolve, reject) => {


        setTimeout(() => {

            if (email === "asd@asd.com" && password === "1234") {

                resolve();
            }

            reject();

        }, 3000)

    })



}