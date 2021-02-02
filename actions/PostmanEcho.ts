import axios from 'axios';

const API_URL = 'postman-echo.com/';

const PostmanEcho = (names: Array<any>, nums: Array<any>) => {
    return axios.post(API_URL + 'post', {nums, names});
};

export default PostmanEcho;