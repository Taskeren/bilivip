// ==UserScript==
// @name         BiliVip
// @homepage     https://github.com/nitu2003/bilivip
// @supportURL   https://github.com/nitu2003/bilivip/issues
// @version      0.1
// @description  变成年度小会员！
// @author       Taskeren
// @match        *://space.bilibili.com/*
// @grant        none
// ==/UserScript==

var biliVipEle = null
var biliVipType = null

function initBiliVip() {
    biliVipEle = document.querySelector(".h-vipType")
    biliVipType = biliVipEle.getAttribute("bilivip") || 0

    // 修改元素
    biliVipEle.href = "#"
    biliVipEle.target = "_self"
    biliVipEle.addEventListener("click", (e)=>switchBiliVip())
}

function switchBiliVip() {
    if(biliVipType == 0) {
        // 变成小会员
        biliVipEle.style.backgroundColor = "rgb(109, 190, 130)"
        biliVipEle.innerText = "年度小会员"
        biliVipEle.setAttribute("bilivip", 1)
        biliVipType = 1
        console.log("切换到小会员")
    }
    else {
        biliVipEle.style.backgroundColor = "#f45a8d"
        biliVipEle.innerText = "年度大会员"
        biliVipEle.setAttribute("bilivip", 0)
        biliVipType = 0
        console.log("切换到大会员")
    }
}

setTimeout(function() { initBiliVip() }, 1000)
