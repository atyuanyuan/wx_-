// pages/list/list.js
let datas = require('../../datas/list-data');  // 只能使用相对路径
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 更新数据
    this.setData({
      listArr: datas.list_data
    })
  },
  toDetail(event) {
    console.log(event);
    // 获取点击板块的下标
    let index = event.currentTarget.dataset.index;
    // 跳转页面到详情页detail   传参的形式
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index
    })
  },
  
  //点击轮播切换到详情页
  swiperToDetail(event) {
    //获取点击板块的下标
    let index = event.target.dataset.index;
    console.log(event);
    // 跳转页面到详情页detail 传参的形式
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index
    })
  }
  
})