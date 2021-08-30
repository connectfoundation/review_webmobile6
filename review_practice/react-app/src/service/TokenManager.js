const USER_INFO = 'userInfo';

export const getToken = () =>
    localStorage.getItem(USER_INFO) ? JSON.parse(localStorage.getItem(USER_INFO)).token : null;

export const setToken = ({ id, name, email, token }) => {
    localStorage.setItem(USER_INFO, JSON.stringify({ id, name, email, token }));
};

export const clearToken = () => {
    localStorage.removeItem(USER_INFO);
};
