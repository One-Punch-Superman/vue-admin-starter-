import { defineStore } from 'pinia';
import store from '@/store';

const InitUserInfo = {
  roles: []
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
    async login() {},
    async getUserInfo() {},
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
