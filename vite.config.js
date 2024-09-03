import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// import ElementPlus from 'unplugin-element-plus/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    //手动引入
    // ElementPlus(),
    // ...
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
  //这个是添加的别名，方便引入
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
    ],
  },
});
