## requestAnimationFrame 执行机制？

https://blog.51cto.com/feng/5289890

## 如何实现图片懒加载？

**方案一: 位置计算 + 滚动事件 (Scroll) + DataSet API**

**方案二: getBoundingClientRect API + Scroll with Throttle + DataSet API**

**方案三: IntersectionObserver API + DataSet API**

方案二使用的方法是: `window.scroll` 监听 `Element.getBoundingClientRect()` 并使用 `_.throttle` 节流

一系列组合动作太复杂了，于是浏览器出了一个三合一事件: `IntersectionObserver API`，一个能够监听元素是否到了当前视口的事件，一步到位！

```js
const observer = new IntersectionObserver((changes) => {
  // changes: 目标元素集合
  changes.forEach((change) => {
    // intersectionRatio
    if (change.isIntersecting) {
      const img = change.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

observer.observe(img);
```

**方案四: LazyLoading 属性**

## 浏览器中如何实现剪切板复制内容的功能？

它一般可以使用第三方库 `clipboard-copy` (opens new window)来实现，源码很简单，可以读一读

目前最为推荐的方式是使用 Clipboard API 进行实现

```js
navigator.clipboard.writeText(text);
```

## cookie 共享策略？

- Cookie 的作用域仅仅由**domain**和**path**决定，与**协议**和**端口**无关。
- **父域名**下设置的 Cookie 所有**子域名**都可被共享
- 不同**子域名**之间的 Cookie 不共享

补充一点,不同协议 http 和 https，也可以共享
但是带有 Secure 属性的不能被 http 共享
带有 HttpOnly 属性的 cookie 无法被 document.cookie 访问

## 如何计算并优化白屏和首屏时间？

`window.performance`

目前白屏常见的优化方案有：

- SSR
- 预渲染
- 骨架屏

优化首屏加载时间的方法：

- CDN 分发（减少传输距离）
- 后端在业务层的缓存
- 静态文件缓存方案
- 前端的资源动态加载
- 减少请求的数量
- 利用好 HTTP 压缩

## 如何取消请求的发送?

1. **XHR 使用 xhr.abort()**

```js
const xhr = new XMLHttpRequest(),
  method = "GET",
  url = "https://developer.mozilla.org/";
xhr.open(method, url, true);

xhr.send();

// 取消发送请求
xhr.abort();
```

2. **fetch 使用 AbortController**

- 发送请求时使用一个 `signal` 选项控制 `fetch` 请求
- `control.abort()` 用以取消请求发送
- 取消请求发送之后会得到异常 `AbortError`

```js
const controller = new AbortController()
const signal = controller.signal

const downloadBtn = document.querySelector('.download');
const abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

// 点击取消按钮时，取消请求的发送
abortBtn.addEventListener('click', function() {
  controller.abort();
  console.log('Download aborted');
});

function fetchVideo() {
  ...
  fetch(url, {signal}).then(function(response) {
    ...
  }).catch(function(e) {
   // 请求被取消之后将会得到一个 AbortError
    reports.textContent = 'Download error: ' + e.message;
  })
}
```

3. **Axios: xhr 与 http/https**

`Axios` 中通过 `cancelToken` 取消请求发送

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios
  .get("/user/12345", {
    cancelToken: source.token,
  })
  .catch(function (thrown) {
    if (axios.isCancel(thrown)) {
      console.log("Request canceled", thrown.message);
    } else {
      // handle error
    }
  });

axios.post(
  "/user/12345",
  {
    name: "new name",
  },
  {
    cancelToken: source.token,
  }
);

// cancel the request (the message parameter is optional)
source.cancel("Operation canceled by the user.");
```

## 当 cookie 没有设置 maxage 时，cookie 会存在多久？

不设置 max-age 和 expires，此 cookie 就是会话级别的，浏览器关闭就没了

## js 动画和 css 动画那个性能比较好？

https://blog.csdn.net/weixin_47450807/article/details/123349438
