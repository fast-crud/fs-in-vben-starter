import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import '/@/design/index.less';
import '/@/components/VxeTable/src/css/index.scss';
import 'virtual:windi-utilities.css';
// Register icon sprite
import 'virtual:svg-icons-register';
import App from './App.vue';
import { createApp } from 'vue';
import { initAppConfigStore } from '/@/logics/initAppConfig';
import { setupErrorHandle } from '/@/logics/error-handle';
import { router, setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';
import { setupStore } from '/@/store';
import { setupGlobDirectives } from '/@/directives';
import { setupI18n } from '/@/locales/setupI18n';
import { registerGlobComp } from '/@/components/registerGlobComp';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import setupFastCrud from './setup-fast-crud';
import setupFastBpmn from './setup-fast-bpmn';
import './setup-fast-crud.less';

async function bootstrap() {
  const app = createApp(App);

  // Configure store
  // 配置 store
  setupStore(app);

  // Initialize internal system configuration
  // 初始化内部系统配置
  initAppConfigStore();

  // Register global components
  // 注册全局组件
  registerGlobComp(app);

  // Multilingual configuration
  // 多语言配置
  // Asynchronous case: language files may be obtained from the server side
  // 异步案例：语言文件可能从服务器端获取
  const i18n = await setupI18n(app);

  //----------- 安装fast-crud--------------
  app.use(Antd);
  setupFastCrud(app, i18n);

  setupFastBpmn(app,i18n)
  //--------------------------------------
  // Configure routing
  // 配置路由
  setupRouter(app);

  // router-guard
  // 路由守卫
  setupRouterGuard(router);

  // Register global directive
  // 注册全局指令
  setupGlobDirectives(app);

  // Configure global error handling
  // 配置全局错误处理
  setupErrorHandle(app);

  // https://next.router.vuejs.org/api/#isready
  // await router.isReady();

  app.mount('#app');
}

bootstrap();
