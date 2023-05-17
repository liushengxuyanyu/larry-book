<style>
  /* body { background-color: #000 !important; } */
  /* h1,h2,h3,h4,h5,h6,h7,p { color: #999 !important; } */
  /* h3 {
    display: inline-flex;
    align-items: center;
    font-weight: 700;
    color: #fff;
    background: linear-gradient(#fff 50%,#fc625d 80%);
    padding: 3px 10px 4px;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    margin-right: 3px;
    font-size: 20px;
    margin-top: -1.1rem !important;
  } */
  h3 {
    font-size: 20px;
  }
  h3:before {
    content: "";
    border-bottom: 2px solid #ef7060;
    width: 100%;
    display: block;
    height: 10px;
    position: absolute;
    margin-top: 21px;
  }
  b {
    color: red;
  }
</style>

## 1. 简述

### 响应式简述

所谓**响应式(Reactive)**，放在一个前端框架中，指的就是框架能够主动**观察(Observe)**状态数据的变化(即 Vue 中的 data)，并收集所有**依赖(Depend)**该数据的**监控(Watch)**回调代码，在数据发生改动时，主动执行该监控回调以更新目标数据或者更新视图。

相应地，在 Vue 版本 2.6.14 的源码中，存在以下几个核心的类来专门实现响应式：

1. Observer
2. Dep
3. Watcher
4. Scheduler

###
