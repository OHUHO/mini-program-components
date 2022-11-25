const app = getApp()

Page({
  data: {
    menuButtonHeight: 0,
    menuButtonTop: 0,
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
      menuButtonHeight: res.height,
      menuButtonTop: res.top
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
