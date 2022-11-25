const app = getApp()

Page({
  data: {
    menuHeight: 0,
    menuTop: 0,
    isRefresh: false,
    currentTab: 0,

    tabList: [
      {
        name: '推荐'
      },
      {
        name: '文章'
      },
      {
        name: '视频'
      }
    ],
  },
  onLoad(){
    const res = wx.getMenuButtonBoundingClientRect()
    this.setData({
      menuHeight: res.height,
      menuTop: res.top
    })
  
  },

  // 获取应用的导航栏信息
  getNavBarInfo(){
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    // 胶囊按钮位置信息
    const menuInfo = wx.getMenuButtonBoundingClientRect();
    
    // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
    var navBarHeight = (menuInfo.top - systemInfo.statusBarHeight) * 2 + menuInfo.height; //导航栏高度
    var statusBarHeight = systemInfo.statusBarHeight; //状态栏高度
    var menuRight = systemInfo.screenWidth - menuInfo.right;  //胶囊距离右方的间距
    var menuBotton = menuInfo.top - systemInfo.statusBarHeight; //胶囊距离底部的间距
    var menuHeight = menuInfo.height; //胶囊高度
    var menuWidth = menuInfo.width; //胶囊宽度
    var windowWidth = systemInfo.windowWidth; //屏幕宽度

    this.setData({

    })

  },

  tabNav(e) {
    let currentTab = e.currentTarget.dataset.index
    this.setData({
      currentTab
    })
  },
  handleSwiper(e) {
    let {current,source} = e.detail
    if (source === 'autoplay' || source === 'touch') {
      const currentTab = current
      this.setData({
        currentTab
      })
    }
  },
  refresherpulling() {
    wx.showLoading({
      title: '刷新中'
    })
    setTimeout(() => {
      this.setData({
        isRefresh: false
      })
      wx.showToast({
        title: '加载完成'
      })
    }, 1000)
  },
})
