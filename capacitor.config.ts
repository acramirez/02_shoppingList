import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: '02_shoppingList',
  webDir: 'www',
  android: {
    path: '02_shoppingList_Android',
  },
  ios: {
    path: '02_shoppingList_iOS',
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
