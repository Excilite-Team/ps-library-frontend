import axios from 'axios';
import config from '../config.json';

class Api {
    constructor() {
        this.api = axios.create({
            baseUrl: config.apiUrl
        });
    }

    get(url, options = {}) {
        return this.query(url, "GET", {}, options);
    }

    post(url, body = {}, options = {}) {
        return this.query(url, "POST", body, options);
    }

    put(url, body = {}, options = {}) {
        return this.query(url, "PUT", body, options);
    }

    delete(url, options = {}) {
        return this.query(url, "DELETE", {}, options);
    }

    async query(url, method, body = {}, options = {}) {
        try {
            const response = await this.api({
                url,
                method,
                data: body,
                ...options
            });
            return {
                success: true,
                data: response
            }
        }
        catch(error) {
            return {
                success: false,
                data: error
            };
        }
    }
};

export default new Api();