// custom-tab-bar/index.js
Component({
  data: {
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
        pagePath: "/pages/men/men",
        bulge:true,
        text: "item3",
        iconPath: "/images/tabbar/publish.png",
        selectedIconPath: "/images/tabbar/publish-selected.png"
      },
      {
        pagePath: "/pages/color/color",
        text: "item4",
        iconPath: "/images/tabbar/popularization.png",
        selectedIconPath: "/images/tabbar/popularization-selected.png"
      },
      {
        pagePath: "/pages/me/me",
        text: "item5",
        iconPath: "/images/tabbar/me.png",
        selectedIconPath: "/images/tabbar/me-selected.png"
      },
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url}) 
    }
  }
})
