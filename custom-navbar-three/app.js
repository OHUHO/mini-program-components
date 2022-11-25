App({
  onLaunch() {

    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    console.log(systemInfo)
    // 胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    console.log(menuButtonInfo)
    // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
    this.globalData.navBarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height; //导航栏高度
    this.globalData.statusBarHeight = systemInfo.statusBarHeight; //状态栏高度
    this.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;  //胶囊距离右方的间距
    this.globalData.menuBotton = menuButtonInfo.top - systemInfo.statusBarHeight; //胶囊距离底部的间距
    this.globalData.menuHeight = menuButtonInfo.height; //胶囊高度
    this.globalData.menuWidth = menuButtonInfo.width; //胶囊宽度
    this.globalData.windowWidth = systemInfo.windowWidth; //屏幕宽度

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
