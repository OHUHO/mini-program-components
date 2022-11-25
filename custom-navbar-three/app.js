App({
  onLaunch() {
    this.getNavBarInfo()
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

    this.globalData.navBarHeight = navBarHeight
    this.globalData.statusBarHeight = statusBarHeight
    this.globalData.menuRight = menuRight
    this.globalData.menuBotton = menuBotton
    this.globalData.menuHeight = menuHeight
    this.globalData.menuWidth = menuWidth
    this.globalData.windowWidth = windowWidth
  },

  globalData: {
    navBarHeight: 0, 
    statusBarHeight: 0, 
    menuRight: 0, 
    menuBotton: 0,
    menuHeight: 0,
    menuWidth: 0, 
    windowWidth: 0, 
  }
})
