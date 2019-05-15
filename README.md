# learn-react
react.js小书练手demo
#### 前端组件化： make-react
> make-react部分: 点赞(likeButton)按钮的复用 -> 通过 class 构建一个 likebutton, 并引入state -> 在 state 变化的同时构建新的 likeButton DOM, 并将其插入到页面
整个过程本质: 数据驱动视图

#### 实现redux: make-redux
> redux 本质上是一种架构模式, 通过观察者模式, 统一了修改 state 的方式, 只能是通过 dispatch, 并且加上 subscribe (订阅) 就可以实现 dispatch 时触发 subscribe 加的事件函数
