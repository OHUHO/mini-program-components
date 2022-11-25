const app = getApp()

Page({
  data: {
    menuHeight: 0,
    menuMarginTop: 0,
    
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
    var height = res.height //胶囊高度
    var top = res.top //胶囊距离顶部的高度
    this.setData({
      menuHeight: height,
      menuMarginTop: top,
    })
  
  },


  selectBar(e) {
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
