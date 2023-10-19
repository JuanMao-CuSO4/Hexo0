// index.js

// 1. 导入 Vditor 构造函数和样式
const Vditor = require('vditor')  
require('vditor/dist/index.css')

// 2. 获取需要渲染 Vditor 的元素
const el = document.getElementById('vditor') 

// 3. 初始化 Vditor 实例
const vditor = new Vditor(el, {
  // 配置选项
})

// 4. 使用 Vditor API
vditor.setValue('Hello World!')

// 获取内容
const value = vditor.getValue()
console.log(value)