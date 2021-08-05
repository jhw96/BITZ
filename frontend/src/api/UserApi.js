import axios from 'axios';

const BASE_URL = 'http://i5a504.p.ssafy.io:8080'

// JHW - 플레이어 로그인 axios 요청
const requestLogin = (data, callback, errorCallback) => {
  axios({
    method: 'post',
    url: BASE_URL + '/account/readuserauth',
    data: data,
  })
    .then(callback)
    .catch(errorCallback);
}; // requestLogin End

// PJW - 비즈니스 로그인 axios 요청
const requestBusinessLogin = (data, callback, errorCallback) => {
  axios({
    method: 'post',
    url: BASE_URL + '/accountbusiness/readbusinessauth',
    data: data,
  })
    .then(callback)
    .catch(errorCallback);
}; // requestBusinessLogin End

// KOW - 플레이어 회원가입 axios 요청
const requestJoin = (data, callback, errorCallback) => {
  axios({
    method: 'post',
    url: BASE_URL + '/account/createuser',
    data: data,
  })
    .then(callback)
    .catch(errorCallback);
}; // requestJoin End

// JHW - 비즈니스 회원가입 axios 요청
const requestBusinessJoin = (data, headers, callback, errorCallback) => {
  axios({
    method: 'post',
    url: BASE_URL + '/accountbusiness/createbusiness',
    data: data,
    headers: headers,
  })
    .then(callback)
    .catch(errorCallback);
}; // requestJoin End

// PJW - 비밀번호 변경
const changePassword = (data, callback, errorCallback) => {
  axios({
    method: 'put',
    url: BASE_URL + '/account/updatepassword',
    data: data,
  })
    .then(callback)
    .catch(errorCallback);
}; // changePassword End

// KOW - 비밀번호 찾기 axios 요청
const findPwd = (data, callback, errorCallback) => {
  axios({
    method: 'PUT',
    url: BASE_URL + '/account/readpassword',
    data: data,
  })
    .then(callback)
    .catch(errorCallback)
}

const firstLogin = (data, callback, errorCallback) => {
  axios({
    method: 'POST',
    url: BASE_URL + '/account/readfirstuserauth',
    data: data,
  })
    .then(callback)
    .catch(errorCallback)
}

const UserApi = {
  requestJoin: (data, callback, errorCallback) => requestJoin(data, callback, errorCallback),
  requestLogin: (data, callback, errorCallback) => requestLogin(data, callback, errorCallback),
  changePassword: (data, callback, errorCallback) => changePassword(data, callback, errorCallback),
  findPwd: (data, callback, errorCallback) => findPwd(data, callback, errorCallback),
  firstLogin: (data, callback, errorCallback) => firstLogin(data, callback, errorCallback),
  requestBusinessJoin: (data, headers, callback, errorCallback) => requestBusinessJoin(data, headers, callback, errorCallback),
  requestBusinessLogin: (data, headers, callback, errorCallback) => requestBusinessLogin(data, headers, callback, errorCallback),
};

export default UserApi;
