import { defineStore } from 'pinia';
import SETTING_CONFIG from '@/config/setting';

export const useSettingStore = defineStore('setting', {
  state: () => {
    return {
      ...SETTING_CONFIG,
      isShowSetting: false
    };
  },
  getters: {},
  actions: {
    changeSetting() {
      if (this.layout === 'side') {
        this.layout = 'top';
      } else {
        this.layout = 'side';
      }
    },
    updateConfig(payload: any) {
      for (const key in payload) {
        if (payload[key] !== undefined) {
          this[key] = payload[key];
        }
      }
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
