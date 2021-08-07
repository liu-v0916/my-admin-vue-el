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

### 技术栈和组件

vue  
vue-router
axios  
elemetnui  
vue-table-with-tree-grid  
vue-quill-editor
ECharts
lodash

### 实现思路

登录成功后的 token 保存到 sessionStorage 中（token 只在当前网站生效）
项目中除了登录之外的 api 接口，必须在登录后才能访问,没有登录直接访问其他路由会重定向到登录页面

用户 -> 角色 -> 权限

### 待完成

完善角色列表 添加,编辑,删除功能

### 待优化

封装 axios，优化代码结构，抽取重复代码，修改页面样式，封装公共组件，优化代码写法（实现思路和过程）
