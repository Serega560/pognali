class AppService {
    async getCountries(letter, cb) {
        return await fetch(`localhost:3000/api/countries?letter=${letter}`)
            .then((data) => {
                if (data.ok) {
                    return data.json();
                } else {
                    throw new Error('Ошибка сервера.')
                }
            })
            .then((data) => {
                return cb(data);
            })
            .catch((e) => console.error(e));
    }
}

export const appService = new AppService();