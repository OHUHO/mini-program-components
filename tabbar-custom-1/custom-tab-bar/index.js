// custom-tab-bar/index.js
Component({
  data: {
    selected: 0,
    color: "#F9A7A7",
    selectedColor: "#226967",
    backgroundColor: "#ffffff",
    show: true,
    list: [
      {
        pagePath: "/pages/index/index",
        text: "item1",
        iconPath: "/images/tabbar/index.png",
        selectedIconPath: "/images/tabbar/index-selected.png"
      },
      {
        pagePath: "/pages/pop/pop",
        text: "item2",
        iconPath: "/images/tabbar/hospital.png",
        selectedIconPath: "/images/tabbar/hospital-selected.png"
      },
      {
        pagePath: "/pages/color/color",
        text: "item3",
        iconPath: "/images/tabbar/popularization.png",
        selectedIconPath: "/images/tabbar/popularization-selected.png"
      },
      {
        pagePath: "/pages/me/me",
        text: "item4",
        iconPath: "/images/tabbar/me.png",
        selectedIconPath: "/images/tabbar/me-selected.png"
      },
    ],

  },

  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url,
        success: (res) => {
          let page = getCurrentPages().pop();
          if (page == undefined || page == null) return;
          page.onLoad()
        }
      })
      this.setData({
        selected: data.index
      })
    },
    publish() {
      // 调用组件中的方法显示弹窗
      // this.selectComponent("#publishElement").showModal()
      wx.scanCode({
        success (res) {
          console.log(res)
        }
      })
    },


  },
})
