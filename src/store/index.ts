import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const store = createPinia();
store.use(piniaPluginPersistedstate);

export * from './modules/user';
export * from './modules/setting';

export default store;
