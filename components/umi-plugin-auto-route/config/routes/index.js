"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var sysSetting_1 = require("./sysSetting");
exports["default"] = __spreadArray(__spreadArray([
    {
        name: '登录',
        path: '/login',
        component: './login',
        layout: false,
        hideInMenu: true
    },
    { name: '首页', path: '/home', component: './home', icon: 'smile' }
], sysSetting_1["default"], true), [
    { path: '/', redirect: '/home' },
    { component: './404' },
], false);
