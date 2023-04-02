import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/demo',
  name: 'FastCrud',
  component: LAYOUT,
  redirect: '/demo/crud',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: 'demo',
  },
  children: [
    {
      path: 'crud',
      name: 'CrudDemo',
      component: () => import('/@/views/demo/crud/index.vue'),
      meta: {
        title: 'FastCrud',
      },
    },
    {
      path: 'bpmn',
      name: 'FastBpmn',
      component: () => import('/@/views/demo/bpmn/index.vue'),
      meta: {
        title: 'FastBpmn',
      },
    },
    {
      path: 'https://github.com/fast-crud/fs-in-vben-starter',
      name: '源码(github)',
      meta: {
        title: '源码(github)',
      },
    },
    {
      path: 'https://gitee.com/fast-crud/fs-in-vben-starter',
      name: '源码(gitee)',
      meta: {
        title: '源码(gitee)',
      },
    },
    {
      path: 'http://fast-crud.docmirror.cn/',
      name: '文档（document）',
      meta: {
        title: '文档（document）',
      },
    },
  ],
};

export default dashboard;
