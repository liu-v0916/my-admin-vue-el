# my-admin-vue-el

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 存在的问题

axios 没有封装

### login.vue

elementui: form 表单组件重置和校验，message 消息提示
登录成功后的 token 保存到 sessionStorage 中（token 只在当前网站生效）
项目中除了登录之外的 api 接口，必须在登录后才能访问
