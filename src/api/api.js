import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "efc64734-f39e-4016-a4bc-9e1edee353ce"
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    }
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);

    },
    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
            .then(response => response.data);
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo/`, formData)
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }

}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login(email,password,rememberMe = false, captcha = null) {
        return instance.post('auth/login', {email,password,rememberMe, captcha})
            .then(response => response.data);;
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => response.data);;
    }
}

export const securityAPI = {
    getCaptchaUrl(){
        return instance.get('security/get-captcha-url');
    }
}