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
    updateConfig(payload: any) {
      for (const key in payload) {
        if (payload[key] !== undefined) {
          this[key] = payload[key];
        }
      }
    },
    resetConfig() {
      for (const key in SETTING_CONFIG) {
        this[key] = SETTING_CONFIG[key];
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
