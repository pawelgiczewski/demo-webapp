import axios from 'axios';

export class ApiService {

    constructor() {
        this._client = axios.create({
            baseURL: 'https://cat-fact.herokuapp.com'
        });
    }

    getRandomCatFact() {
        return this._client.get('/facts/random');
    }
}