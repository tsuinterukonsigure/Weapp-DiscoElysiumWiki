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
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/fT3DfH4K.png",
                item_name: "货车司机帽",
                clo_type: "帽子"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/3wxxDkpw.png",
                item_name: "“次伊苏林迪集结点”墨镜",
                clo_type: "眼镜",
                effect: "五感发达 -1\n内陆帝国 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/dZazsaUB.png",
                item_name: "自杀墨镜",
                clo_type: "眼镜",
                effect: "食髓知味 +1\n逻辑思维 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/Ont6DR7h.png",
                item_name: "大四眼处方眼镜",
                clo_type: "眼镜",
                effect: "博学多闻 +2\n五感发达 -4"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/hRRg1n5b.png",
                item_name: "超大号明星墨镜",
                clo_type: "眼镜",
                effect: "鬼祟玲珑 +1\n见微知著 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/k9bO3zsV.png",
                item_name: "翻盖眼镜“审计者”",
                clo_type: "眼镜",
                effect: "逻辑思维 +1\n争强好胜 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/6S3jgNfg.png",
                item_name: "加姆洛克骑警太阳镜",
                clo_type: "眼镜",
                effect: "通情达理 +1\n逻辑思维 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/jWZ6PxYT.png",
                item_name: "优雅的办公墨镜",
                clo_type: "眼镜",
                effect: "见微知著 +1\n故弄玄虚 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/F2dqSiRo.png",
                item_name: "迪斯科短上衣",
                clo_type: "外套",
                effect: "同舟共济 +1：卤素水印"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/LcDLz4Es.png",
                item_name: "弹球创客大衣",
                clo_type: "外套",
                effect: "通情达理 +1\n眼明手巧 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/XlC2S2ar.png",
                item_name: "“弗利多”塑料雨衣",
                clo_type: "外套",
                effect: "钢筋铁骨 +1：\n弗利多军队的一部分"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/3tNdW6Ye.png",
                item_name: "萨拉米尔泽休闲夹克",
                clo_type: "外套",
                effect: "标新立异 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/aNeAZFse.png",
                item_name: "信号蓝海军大衣",
                clo_type: "外套",
                effect: "循循善诱 +1\n疑神疑鬼 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/yEivwmS7.png",
                clo_type: "外套",
                item_name: "RCM指挥官夹克",
                effect: "同舟共济 +1\n见微知著 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/AUF0asiB.png",
                item_name: "反光的建筑工马甲",
                clo_type: "外套",
                effect: "钢筋铁骨 +1：安全第一\n反应速度 -1：不可能丢失"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/Ukw57Y0a.png",
                item_name: "FALN“Faln”防风夹克",
                clo_type: "外套",
                effect: "坚忍不拔 +1\n疑神疑鬼 +1\n故弄玄虚 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/zcdsy8oj.png",
                item_name: "RCM巡逻斗篷",
                clo_type: "外套",
                effect: "同舟共济 +1\n天人感应 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/RiJB1hNM.png",
                item_name: "动力防风夹克“海浪”",
                clo_type: "外套",
                effect: "从容自若 +1\n天人感应 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/Z2GUvLdA.png",
                item_name: "皮夹克“花花世界我一人干翻”",
                clo_type: "外套",
                effect: "疑神疑鬼 +1\n能说会道 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/2nEeOtnn.png",
                item_name: "皮夹克“弱水三千只取一尿饮”",
                clo_type: "外套",
                effect: "故弄玄虚 +1\n争强好胜 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/mFRpKYhh.png",
                item_name: "派对龙牌丝绸长袍",
                clo_type: "外套",
                effect: "故弄玄虚 +1\n食髓知味 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/64YMypNT.png",
                item_name: "极地滑雪衫",
                clo_type: "外套",
                effect: "从容自若 +1\n天人感应 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/8TdiDkyL.png",
                item_name: "跨岛西服外套",
                clo_type: "外套",
                effect: "循循善诱 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/LsQmeyID.png",
                item_name: "皇家卡宾枪手夹克",
                clo_type: "外套",
                effect: "瑞瓦肖民族性 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/sYxY3QEm.png",
                item_name: "科洛杰夫夹克",
                clo_type: "外套"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/N5bzrgFc.png",
                item_name: "梅斯克古惑仔丝巾",
                clo_type: "脖子",
                effect: "坚忍不拔 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/G5hA9nNx.png",
                item_name: "恐怖领带",
                clo_type: "脖子",
                effect: "内陆帝国 +1：\n生动的想象力"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/jNUumpBV.png",
                item_name: "蝴蝶结",
                clo_type: "脖子",
                effect: "故弄玄虚 +2"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/R9CQgQRd.png",
                item_name: "“落日”勋章",
                clo_type: "脖子",
                effect: "能说会道 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/2yz7qCM3.png",
                item_name: "八眼畸鸟领带",
                clo_type: "脖子",
                effect: "内陆帝国 +1\n平心定气 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/elJBd2Le.png",
                item_name: "军用冬季围巾",
                clo_type: "脖子",
                effect: "通情达理 +2\n从容自若 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/LayLksed.png",
                item_name: "有香味的围巾",
                clo_type: "外套",
                effect: "天人感应 +1\n强身健体 -2"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/LqAO6UFx.png",
                item_name: "跨岛礼服衬衫",
                clo_type: "衬衫",
                effect: "逻辑思维 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/kSfCwdTa.png",
                item_name: "“来自赫姆达尔的男人”主题T恤",
                clo_type: "衬衫",
                effect: "强身健体 +1\n天人感应 +1\n争强好胜 -2"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/YdFS52gv.png",
                item_name: "白背心",
                clo_type: "衬衫",
                effect: "强身健体 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/tUhttho9.png",
                item_name: "白色绸缎衬衫",
                clo_type: "衬衫",
                effect: "标新立异 +1：真正的声明\n循循善诱 -1：讨厌的气味"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/H0kXFL7T.png",
                item_name: "疯狂的网眼背心",
                clo_type: "衬衫",
                effect: "故弄玄虚 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/MaYoq95V.png",
                item_name: "白色马球衫",
                clo_type: "衬衫",
                effect: "能说会道 +1\n通情达理 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/Ntxrm0UC.png",
                item_name: "费尔韦瑟T-500胸甲",
                clo_type: "衬衫",
                effect: "坚忍不拔 +1\n平心定气 +1\n通情达理 -1\n（可以防弹）"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/gDlxkLB1.png",
                item_name: "FALN“箭头”衬衫",
                clo_type: "衬衫",
                effect: "眼明手巧 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/0cp4LnCW.png",
                item_name: "无指手套",
                clo_type: "手套",
                effect: "食髓知味 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/qYlaEchG.png",
                item_name: "黄色园艺手套",
                clo_type: "手套",
                effect: "能工巧匠 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/iMUl4E6G.png",
                item_name: "费尔韦瑟T-500长手套",
                clo_type: "手套",
                effect: "能工巧匠 +2"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/10/SG9yjQ9c.png",
                item_name: "FALN“极限”系列手套",
                clo_type: "手套",
                effect: "疑神疑鬼 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/pz5BRafY.png",
                item_name: "发痒的裤子",
                clo_type: "裤子",
                effect: "	疑神疑鬼 +2\n从容自若 -1\n鬼祟玲珑 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/BEYzKq2w.png",
                item_name: "跨岛西裤",
                clo_type: "裤子",
                effect: "良知的国度 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/0gWr4FWp.png",
                item_name: "FALN“模块”运动裤",
                clo_type: "裤子",
                effect: "鬼祟玲珑 +1\n强身健体 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/XvgBOEIO.png",
                item_name: "喇叭裤",
                clo_type: "裤子",
                effect: "鬼祟玲珑 -1：大腿部分有点紧\n食髓知味 +1：胯部有点紧"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/5DWwt88n.png",
                item_name: "男士工装裤",
                clo_type: "裤子",
                effect: "食髓知味 +1\n反应速度 -1	"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/hpjzucmC.png",
                item_name: "皇家卡宾枪手裤",
                clo_type: "裤子",
                effect: "反应速度 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/wXNAqpQP.png",
                item_name: "萨拉米尔泽休闲裤",
                clo_type: "裤子"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/z77rpWqa.png",
                item_name: "普通的黑牛仔裤",
                clo_type: "裤子"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/M30q8NDP.png",
                item_name: "梅斯克古惑仔红牛仔裤",
                clo_type: "裤子"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/8NHczJps.png",
                item_name: "RCM警督裤",
                clo_type: "裤子"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/31LhwiLs.png",
                item_name: "费尔韦瑟T-500护胫",
                clo_type: "鞋子",
                effect: "争强好胜 +2\n从容自若 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/ozFyoEVH.png",
                item_name: "梅斯克古惑仔的红布洛克鞋",
                clo_type: "鞋子",
                effect: "通情达理 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/AfYxauN9.png",
                item_name: "绿蛇皮鞋",
                clo_type: "鞋子",
                effect: "从容自若 +1：恐怖的高跟\n鬼祟玲珑 -1：荒谬的高跟"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/EjaRG4TS.png",
                item_name: "弗兰考格斯骑兵靴",
                clo_type: "鞋子",
                effect: "五感发达 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/fB7FCoHQ.png",
                item_name: "黑色僧侣鞋",
                clo_type: "鞋子",
                effect: "间接征税模式 +1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/XAOyMjQD.png",
                item_name: "FALN“极限”系列运动鞋",
                clo_type: "鞋子",
                effect: "反应速度 +1\n眼明手巧 +1\n博学多闻 -1"
            },
            {
                ava_pic: "https://img1.imgtp.com/2022/08/11/i3OmKckp.png",
                item_name: "棕色德比鞋",
                clo_type: "鞋子"
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