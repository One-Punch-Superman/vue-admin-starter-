import { defineStore } from 'pinia';
import store from '@/store';

const InitUserInfo = {
  name: '',
  roles: ['']
};

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
      userInfo: { ...InitUserInfo }
    };
  },
  getters: {},
  actions: {
    async login() {
      const response = {
        code: 200,
        message: '登陆成功',
        data: 'token_***'
      };
      this.token = response.data;
    },
    async getUserInfo() {
      const response = {
        code: 200,
        message: '请求成功',
        data: {
          name: 'CMZ',
          roles: ['admin']
        }
      };
      this.userInfo = response.data;
    },
    async logout() {
      this.token = '';
      this.userInfo = { ...InitUserInfo };
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'setting',
        storage: localStorage
      }
    ]
  }
});

export function getUserStore() {
  return useUserStore(store);
}
