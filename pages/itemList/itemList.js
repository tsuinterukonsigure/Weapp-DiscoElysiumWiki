// pages/itemList/itemList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 1,
        tools: [
            {
                ava_pic: "https://img1.imgtp.com/2022/08/05/yWQMyLX5.png",
                item_name: "切链器",
                usage: "装备它可以打开世界上所有上锁的容器"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/08/XFGi81xm.png",
                item_name: "撬棍",
                usage: "装备它可以打开世界上所有上锁的容器"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/08/Utssj3pE.png",
                item_name: "手电筒",
                usage: "装备后可依发现阴暗区域的秘密感知球"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/08/cgtrLi9g.png",
                item_name: "“弗利多！”黄色塑料袋",
                usage: "可拾取地上的各种瓶子到弗利特杂货店换钱"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/08/3HPqPbq9.png",
                item_name: "失败与怨恨手册",
                usage: "内陆帝国 +1\n通情达理 +1\n争强好胜 -2"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/08/3HPqPbq9.png",
                item_name: "遗忘手册",
                usage: "争强好胜 +1\n循循善诱 +1\n内陆帝国 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/08/cwamtBhe.png",
                item_name: "录音机“哈蒙沃斯W02”",
                usage: "装备后可以播放磁带"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/09/XBNPbCq8.png",
                item_name: "库瓦桑德KR+2多用工具",
                usage: "装备它可以打开世界上所有上锁的容器"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/09/WiDMMN8O.png",
                item_name: "标准115mm军刀",
                usage: "装备它来打动自己"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/09/brIxnupB.png",
                item_name: "基耶尔A9止战者",
                usage: "在最困难的时候装备它吧"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/09/HSERSx2v.png",
                item_name: "维利耶9MM转管手枪",
                usage: "在最困难的时候装备它吧"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/09/EnfMvcWf.png",
                item_name: "纳克特威A80转管手枪",
                usage: "在最困难的时候装备它吧"
            }
        ],
        clothes: [
            {
                ava_pic: "https://img1.imgtp.com/2022/08/09/EyBJKrV2.png",
                item_name: "橙色毛线帽",
                clo_type: "帽子",
                effect: "反应速度 +1\n能说会道 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/MicvAZpq.png",
                item_name: "“两栖动物”运动遮阳帽",
                clo_type: "帽子",
                effect: "五感发达 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/TL877Uij.png",
                item_name: "迪克·马伦的帽子",
                clo_type: "帽子",
                effect: "博学多闻 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/vv5QuzEY.png",
                item_name: "RCM警督帽",
                clo_type: "帽子",
                effect: "争强好胜 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/yzmfEqWo.png",
                item_name: "革命帽",
                clo_type: "帽子",
                effect: "	马佐夫社会经济学 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/DHA2oxlz.png",
                item_name: "FALN“皮波”羊毛帽",
                clo_type: "帽子",
                effect: "逻辑思维 +2\n五感发达 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/pYaRoFGe.png",
                item_name: "费尔韦瑟T-500头盔",
                clo_type: "帽子",
                effect: "疑神疑鬼 +1\n循循善诱 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/egJzSdOZ.png",
                item_name: "萨马拉圆锥帽",
                clo_type: "帽子",
                effect: "逻辑思维 +1\n循循善诱 -1"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})