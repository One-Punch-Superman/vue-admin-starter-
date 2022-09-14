import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';
import  useSettingStore  from './modules/setting';


const store = createPinia();
store.use(piniaPluginPersist);

export {
  useSettingStore
}

export default store;
