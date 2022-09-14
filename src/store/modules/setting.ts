import { defineStore } from 'pinia';

const useSettingStore = defineStore('setting', {
  state: () => {
    return {
      layout: 'side'
    };
  },
  getters: {},
  actions: {
    changeSetting() {
      if(this.layout=='side'){
        this.layout='top'
      }else{
        this.layout='side'
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

export default useSettingStore;
