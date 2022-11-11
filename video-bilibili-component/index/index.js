function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  data: {
    // 视频封面
    poster: 'https://gimg0.baidu.com/gimg/src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F1a3bf51c21fb046eb10604fa21ad0a2d.jpeg&refer=http%3A%2F%2Fwww.baidu.com&app=2026&size=f672_448&n=0&g=0n&q=80?sec=0&t=b0afbfa6902e4633e02b15f2678eeaba#pskt#&imgName=avatar&imgLink=https%3A%2F%2Fhaokan.baidu.com%2Fweb%2Fsearch%2Fpage%3Fquery%3D%25E5%25AE%25A0%25E7%2589%25A9%26sfrom%3Drecommend',
    src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ],
    isPlay: false,
    lastClickTime: 0,

    tabs: ["简介", "评论"],
    activeIndex: 0,
    scrollLeft: 0,

    videoRecommendList:[
      {
        poster:'/images/8.jpeg',
        title:'微信小程序组件',
        author:'用户1',
        viewCounts:18,
        commentCounts:98,
      },
      {
        poster:'/images/7.jpeg',
        title:'微信小程序基础容器',
        author:'用户2',
        viewCounts:18,
        commentCounts:98,
      },
      {
        poster:'/images/6.jpeg',
        title:'微信小程序框架',
        author:'用户3',
        viewCounts:18,
        commentCounts:98,
      },
      {
        poster:'/images/7.jpeg',
        title:'微信小程序API',
        author:'用户4',
        viewCounts:18,
        commentCounts:98,
      }
    ],

    commentNum: 99,
    commentList: [
      {
        "num": 44,
        "commentId": 23,
        "messageId": 22,
        "userId": "220118CK3F6DGSCH",
        "username": "用户1",
        "portrait": "/images/6.jpeg",
        "creatTime": "03-09",
        "commentDetail": "微信小程序开发，宠物医生主要包含医生和科普两个大的板块。",
        "replyList": [
          {
            "replyId": 34,
            "commentId": 23,
            "userId": "220118CK3F6DGSCH",
            "username": "用户2",
            "portrait": "/images/grill.jpeg",
            "toUsername": "用户1",
            "creatTime": "03-09",
            "replyDetail": "冲冲冲！！！"
          },
          {
            "replyId": 40,
            "commentId": 23,
            "userId": "220118CK3F6DGSCH",
            "username": "用户3",
            "portrait": "/images/8.jpeg",
            "toUsername": "用户1",
            "creatTime": "11-06",
            "replyDetail": "宠物医生来了"
          }
        ]
      },
      {
        "commentId": 31,
        "messageId": 22,
        "userId": "220118CK3F6DGSCH",
        "username": "用户4",
        "portrait": "/images/7.jpeg",
        "creatTime": "11-06",
        "commentDetail": "再来一条评论",
        "replyList": [
          {
            "replyId": 41,
            "commentId": 31,
            "userId": "220118CK3F6DGSCH",
            "username": "用户2",
            "portrait": "/images/grill.jpeg",
            "toUsername": "用户4",
            "creatTime": "11-06",
            "replyDetail": "回复一评论"
          }
        ]
      },
      {
        "commentId": 32,
        "messageId": 22,
        "userId": "220118CK3F6DGSCH",
        "username": "用户3",
        "portrait": "/images/8.jpeg",
        "creatTime": "11-06",
        "commentDetail": "时间一直倒数着《倒数》—— 邓紫棋",
        "replyList": []
      },
      {
        "commentId": 32,
        "messageId": 22,
        "userId": "220118CK3F6DGSCH",
        "username": "用户3",
        "portrait": "/images/8.jpeg",
        "creatTime": "11-06",
        "commentDetail": "再来一条评论",
        "replyList": [
          {
            "replyId": 42,
            "commentId": 32,
            "userId": "220118CK3F6DGSCH",
            "username": "用户1",
            "portrait": "/images/6.jpeg",
            "toUsername": "用户3",
            "creatTime": "11-06",
            "replyDetail": "回复00"
          },
          {
            "replyId": 43,
            "commentId": 32,
            "userId": "220118CK3F6DGSCH",
            "username": "用户4",
            "portrait": "/images/7.jpeg",
            "toUsername": "用户1",
            "creatTime": "11-06",
            "replyDetail": "回复01"
          }
        ]
      },
    ],

  },
  // 输入弹幕
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  // 弹幕
  bindSendDanmu: function () {
    // 发送弹幕
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
    // 保存到数据库中


  },
  // 播放
  bindPlay: function () {
    this.videoContext.play()
    this.setData({
      isPlay: true
    })
  },
  // 暂停
  bindPause: function () {
    this.videoContext.pause()
    this.setData({
      isPlay: false
    })
  },
  // 双击 播放/暂停
  doubleClickPlayAndPause: function (e) {
    var currentClickTime = e.timeStamp
    var lastClickTime = this.data.lastClickTime
    if (lastClickTime != 0) {
      if (currentClickTime - lastClickTime < 350) {
        // console.log("次双击事件")
        var isPlay = this.data.isPlay
        if (isPlay) {
          this.bindPause()
        } else {
          this.bindPlay()
        }
      }
    } else {
      // console.log("单击事件")
    }
    this.setData({
      lastClickTime: currentClickTime
    })
  },

  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },


  tabClick: function (e) {
    var cur = e.currentTarget.id;
    this.setData({
      activeIndex: cur,
      scrollLeft: cur >= 2 ? ((cur) * 82) : 0	//判断当前选中的个数是否是第3个
    });

  },
  change: function (e) {
    this.setData({
      activeIndex: e.detail.current,
      scrollLeft: e.detail.current >= 2 ? ((e.detail.current) * 82) : 0
    })
  },

})