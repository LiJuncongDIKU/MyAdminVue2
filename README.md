# my-admin-vue2
  这是一个用来方便自己的项目，使用一些自己熟悉的技术和布局做的控制台，让自己再搬砖的路上走好，并且写好一些容易忽略的细节好吗

## 进行了一些操作
### UI库的选择
+ 虽然ElementUI for vue2.x已经停止维护了，但是用着很习惯。
+ 按需引入需要`babel-plugin-component`, 按官网修改`Babel`的配置
  + 点：`.babelrc` 和 `babel.config.js`区别
    + `babelrc` 只会影响本项目中的代码
    + `babel.config.js`会影响整个项目中的代码，包含`node_modules`中的代码

+ 路由守卫会早晚会用到，尤其是权限之类的


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).