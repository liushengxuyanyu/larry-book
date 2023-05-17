## 地图和定位技术调研方案（H5）

### 概述
  此次需求需要再在京小哥工作台App中，内嵌H5开发...进行路线规划和导航。在不使用小哥App和H5的通信下（涉及到App端提供JS接口的开发成本），借助H5自身的能力去解决地图的路线规划和导航功能。

### 调研结论
1. URI API：是为开发者提供的一种在自己应用或网页中调用H5地图的方法. 开发者只需根据提供的URI API构造一条标准的URI, 便可调用H5地图进行路线规划。同时还可以通过URI API直接调起地图app来实现对应的地图功能。（H5地图本身不支持导航功能，需要借助地图App）

2. 接入地图SDK，涉及到开发成本。（100%能实现我们的需求）

### 三大地图URI API对比

#### 1. 高德
[高德URI API文档链接](https://lbs.amap.com/api/uri-api/summary)
**特点：**
* 统一一个API，不区分安卓和iOS，无需手动判断是是否安装APP，文档提供callnative属性，默认唤起H5地图，当设置callnative=1，装有APP的设备会被自动唤起，且调用的都是一个API
* UI相对较好，支持在内部重新输入起始结束地址进行路线规划

#### 2. 百度
[百度URI API文档链接](https://lbsyun.baidu.com/index.php?title=uri)
**特点：**
* 区分web 和 native，当使用web相关协议，打开H5地图进行路线规划。也可以使用相应的native协议进行唤起百度地图App


#### 3. 腾讯
[腾讯URI API文档链接](https://lbs.qq.com/webApi/uriV1/uriGuide/uriOverview)
**特点：**
* 也是区分web 和native，native好像只支持内部唤起。

* web协议打开H5地图后，点击导航并没有跳转到腾讯地图App（已下载腾讯地图App），而是跳转到下载页