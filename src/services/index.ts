import axios from 'axios';
import Cookies from 'js-cookie';
import MD5 from 'crypto-js/md5';
import { notification } from '@tencent/tea-component';

const request = async (options = {}) => {
  const rt = Cookies.get('rt') || '';
  const timestamp = new Date().getTime();
  const key = MD5(rt + timestamp);

  try {
    const res = await axios({
      method: 'get',
      timeout: 15000,
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'tencent-Request-Key': key,
        'tencent-Request-T': timestamp,
        ...(options?.headers || {}),
      },
      ...options,
    });

    return res.data;
  } catch (error) {
    if (error.response) {
      notification.error({
        description: '错误',
      });
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // error.response.data
      // error.response.status
      // error.response.headers
      // if (error.response.status === 401) {
      //   notification.error({
      //     description: concatMessage(error.response.data?.message) || '用户未登录，请先登录',
      //   });
      //   window.location.href = '/';
      // }

      // if (error.response.status === 400) {
      //   message.error({
      //     content: concatMessage(error.response.data?.message) || '未知错误，请联系管理员',
      //   });
      // }

      // if (error.response.status === 404) {
      //   message.error({
      //     content: concatMessage(error.response.data?.message) || '数据不存在，请联系管理员',
      //   });
      // }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // error.request
    } else {
      // Something happened in setting up the request that triggered an Error
      // ('Error', error.message)
    }
    return null;
  }
};

export default request;
