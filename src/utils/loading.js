import Vue from 'vue'

let loading
let needLoadingRequestCount = 0 // 声明一个对象用于存储请求个数
function startLoading() {
  loading = Vue.prototype.$loading({
    lock: true,
    text: '努力加载中...',
    background: 'rgba(255,255,255,.4)',
    target: document.querySelector('.loading') // 设置加载动画区域
  })
}

function endLoading() {
  loading.close()
}
export function showLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}
export function hideLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

export default {
  showLoading,
  hideLoading
}
