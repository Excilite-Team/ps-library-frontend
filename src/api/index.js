import axios from 'axios';
import config from '../config.json';

class Api {
    constructor() {
        this.api = axios.create({
            baseUrl: config.apiUrl
        });
    }

    async query(url, method, body = {}, options = { auth: false }) {
        try {
            const response = await this.api({
                url: config.apiUrl + url,
                method,
                data: body,
                headers: options.auth ? {
                    "x-auth-token": this.getToken()
                } : {},
                ...options
            });
            return {
                success: true,
                data: response
            }
        }
        catch (error) {
            return {
                success: false,
                data: error
            };
        }
    }

    async get(url, options = {}) {
        return await this.query(url, "GET", {}, options);
    }

    async post(url, body = {}, options = {}) {
        return await this.query(url, "POST", body, options);
    }

    async put(url, body = {}, options = {}) {
        return await this.query(url, "PUT", body, options);
    }

    async delete(url, options = {}) {
        return await this.query(url, "DELETE", {}, options);
    }

    async auth() {
        return await this.query('/auth', "GET", {}, {
            auth: true
        });
    }

    setToken(token) {
        localStorage.setItem(config.authKey, token);
        return;
    }

    getToken() {
        return localStorage.getItem(config.authKey);
    }

    logOut() {
        localStorage.removeItem(config.authKey);
        window.location.reload();
        return;
    }

    async isAdmin() {
        let { success, data } = await this.auth();
        if (success) {
            return data?.data?.isAdmin;
        } else {
            return false;
        }
    }
};

export default new Api();