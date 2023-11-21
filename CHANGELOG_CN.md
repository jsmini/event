# 变更日志

## 0.8.0 / 2023-11-19

- 升级 jslib-base 2.3.2
- 支持 sourceMap
- fix: 支持 node >=14.0.0

## 0.7.0 / 2023-9-24

- 升级最新版 jslib-base
- 支持 Node.js ESM
- 升级 @jsmini/is

## 0.6.2 / 2019-10-10

- fix: 修复丢失d.ts的问题

## 0.6.1 / 2019-3-4

- fix: 修复依赖不自动更新的问题

## 0.6.0 / 2019-3-2

- 增加.d.ts文件，支持ts调用

## 0.5.1 / 2018-4-6

- 修复removeListener 同一个函数多次绑定，全部移除的bug

## 0.5.0 / 2018-4-6

- 迁移项目，更改名称

## 0.4.0 / 2018-3-31

- 原生支持ie6-8

## 0.3.0 / 2018-3-31

- 字符串参数自动转换，不再验证类型
- 函数类型参数缺失将报一个异常

## 0.2.0 / 2018-3-25

- 参数错误改为error输出

## 0.1.0 / 2018-3-1

- 添加 EventEmitter 基类
- 添加 EventEmitter#addListener()
- 添加 EventEmitter#on()
- 添加 EventEmitter#once()
- 添加 EventEmitter#removeListener()
- 添加 EventEmitter#off()
- 添加 EventEmitter#removeAllListeners()
- 添加 EventEmitter#emit()
- 添加 EventEmitter#listeners()
- 添加 eventCenter 事件中心实例
