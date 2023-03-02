import axios from 'axios';

export function getIndexMd() {
  return axios({
    url: '/document/index.md',
    method: 'get'
  });
}
