export async function login(username, password) {
    if (username != null && password != null)
        return await accessToken(username, password)
    else {
        const localforage = require("localforage")
        const rt = localforage.setItem('refresh_token', authentication['refresh_token'])
        return await refeshToken(rt)
    }
}
async function accessToken(username, password) {
    const fetch = require('node-fetch');
    const FormData = require('form-data');
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('grant_type', 'password');
    const response = await fetch('https://api.farmerce.in/oauth/token', {
        method: 'post',
        body: formData,
        headers: {
            'Authorization': 'Basic a2FydGhpazprYXJ0aGlr'
        }
    });
    if (response.status == 200) {
        const authentication = await response.json();
        const authorities = await getAuthorities(authentication)
        if (authorities.includes('ADMIN')) {
            const localforage = require("localforage")
            localforage.setItem('access_token', authentication['access_token'])
            localforage.setItem('refresh_token', authentication['refresh_token'])
            document.cookie = 'access_token=' + authentication['access_token'] + ';expires=3600;'
            return {
                status: response.status,
                authentication: authentication,
            }
        } else {
            return {
                status: response.status,
                message: 'Only Admin User Can Login To The Dashboard'
            }
        }
    } else if (response.status == 401) {
        return {
            status: response.status,
            message: 'Phone Number Entered Does Not Exists'
        }
    } else if (response.status == 400) {
        return {
            status: response.status,
            message: 'Invalid Credentials'
        }
    }
    else {
        return {
            status: response.status,
            message: 'Failed To Login'
        }
    }
}
export async function refeshToken(refresh_token) {
    const fetch = require('node-fetch')
    const FormData = require('form-data')
    const formData = new FormData()
    formData.append('refresh_token', refresh_token)
    formData.append('grant_type', 'refresh_token')
    const response = await fetch('https://api.farmerce.in/oauth/token', {
        method: 'post',
        body: formData,
        headers: {
            'Authorization': 'Basic a2FydGhpazprYXJ0aGlr'
        }
    });
    if (response.status == 200) {
        const authentication = await response.json()
        const authorities = await getAuthorities(authentication)
        if (authorities.includes('ADMIN')) {
            const localforage = require("localforage")
            localforage.setItem('access_token', authentication['access_token'])
            localforage.setItem('refresh_token', authentication['refresh_token'])
            doument.cookie = 'access_token=' + authentication['access_token'] + ';expires=3600;'
            return {
                status: response.status,
                authentication: authentication,
            }
        } else {
            return {
                status: response.status,
                message: 'Only Admin User Can Login To The Dashboard'
            }
        }
    } else if (response.status == 401) {
        return {
            status: response.status,
            message: 'Phone Number Entered Does Not Exists'
        }
    } else if (response.status == 400) {
        return {
            status: response.status,
            message: 'Invalid Credentials'
        }
    }
    else {
        return {
            status: response.status,
            message: 'Failed To Login'
        }
    }
}

async function getAuthorities(authentication) {
    const fetch = require('node-fetch');
    const FormData = require('form-data');
    const formData = new FormData();
    formData.append('token', authentication['access_token']);
    const response = await fetch('https://api.farmerce.in/oauth/check_token', {
        method: 'post',
        body: formData,
        headers: {
            'Authorization': 'Basic a2FydGhpazprYXJ0aGlr'
        }
    });
    if (response.status == 200) {
        const authentication = await response.json();
        return authentication['authorities'];
    }
}
// export default login