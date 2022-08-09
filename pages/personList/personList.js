// pages/personList/personList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        val: [
            {
                avater_src: "https://img1.imgtp.com/2022/07/29/2o4XPKF2.jpg",
                npc_name: "哈里尔·杜博阿"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/29/4w87m0gE.jpg",
                npc_name: "金·曷城"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/29/FYwR7ToP.jpg",
                npc_name: "卡拉洁"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/29/ZdQRVUv2.jpg",
                npc_name: "加尔特"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/29/AzqfTGGY.jpg",
                npc_name: "莉娜"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/29/fPL8qCh9.jpg",
                npc_name: "伊丽莎白"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/yRniVIA8.jpg",
                npc_name: "提图斯·哈迪"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/Pc25lDaQ.jpg",
                npc_name: "尤金"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/iXylxbRB.jpg",
                npc_name: "格伦"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/KQlaACss.jpg",
                npc_name: "尚克"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/KEoKyDYA.jpg",
                npc_name: "阿兰"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/cssQK0zk.jpg",
                npc_name: "胖子安格斯"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/ZJ5rJoiS.jpg",
                npc_name: "特奥"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/29/JELPq2W5.jpg",
                npc_name: "爱丽丝"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/29/jn01SND8.jpg",
                npc_name: "塞尔维"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/29/q8Higmrp.jpg",
                npc_name: "朱尔斯·佩迪鲁"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/29/bgwv2gvk.jpg",
                npc_name: "麦克·托森"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/29/CBUvsIie.jpg",
                npc_name: "切斯特·麦克莱恩"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/29/sPmsAXFy.jpg",
                npc_name: "尼克斯·戈特利布"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/hT3DcMa9.png",
                npc_name: "埃利斯·科顿艾尔"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/wn7SSz9F.jpg",
                npc_name: "醉汉浮肿的尸体"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/29/fLBGTZDk.jpg",
                npc_name: "坤诺"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/29/8cZy4kdn.jpg",
                npc_name: "坤妮斯"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/XV6odiEJ.jpg",
                npc_name: "坤诺的父亲"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/29/lHNIaZdk.jpg",
                npc_name: "种族主义货车司机"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/31/jWFdnoor.jpg",
                npc_name: "雷内·阿诺克斯"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/31/cnV5safS.jpg",
                npc_name: "加斯顿·马丁"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/31/PBEYrDx9.jpg",
                npc_name: "汤米·霍姆"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/31/PS3WZY8d.jpg",
                npc_name: "席勒"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/31/j22ewbf2.jpg",
                npc_name: "灰域司机"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/07/31/tWwAIQR5.png",
                npc_name: "格瑞希·库贝克"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/02/pEazauRr.jpg",
                npc_name: "睡着的码头工人"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/02/CP0UneBL.jpg",
                npc_name: "安妮特"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/02/xBtnDKR7.jpg",
                npc_name: "鸟巢罗伊"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/02/kYVNjkfH.jpg",
                npc_name: "普莱桑斯"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/02/Wj5Bgiqg.jpg",
                npc_name: "弗利多店员"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/FfpdEstR.jpg",
                npc_name: "叫我马列拉"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/02/DRnqIr3j.jpg",
                npc_name: "测颅先生"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/o0sBrDNp.jpg",
                npc_name: "测颅先生的女人"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/x3p6MnqN.jpg",
                npc_name: "工贼头子"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/A3ktCBoi.jpg",
                npc_name: "清洁女工"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/8UYtdvvs.jpg",
                npc_name: "骷髅头辛迪"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/ijqSGS0m.jpg",
                npc_name: "房地产中介"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/1XJNymhC.jpg",
                npc_name: "水闸旁的男人"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/kwrdOUXe.jpg",
                npc_name: "女工人"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/yMhzwPdg.jpg",
                npc_name: "特兰特·海德斯塔姆"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/q5vkocND.jpg",
                npc_name: "米凯尔·海德斯塔姆"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/dBPYaqLO.jpg",
                npc_name: "阳台上的吸烟者"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/Ghioljlh.jpg",
                npc_name: "周日朋友"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/n8oGbKjp.jpg",
                npc_name: "史蒂文，康米主义学生"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/lFP4kynE.jpg",
                npc_name: "老好人利奥"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/2cBT8zKL.jpg",
                npc_name: "扭曲光线的超级富豪"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/UeYrUQo8.jpg",
                npc_name: "艾弗拉特·克莱尔"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/rEf5CC3q.jpg",
                npc_name: "白痴厄运漩涡"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/LHhE0kJe.jpg",
                npc_name: "不要打给阿比盖尔"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/l9MxPc6r.jpg",
                npc_name: "罗斯马雷"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/AH07o3gO.png",
                npc_name: "东伊苏林迪中继站"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/taTh5bEd.jpg",
                npc_name: "新奇骰子匠人"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/03/GT5Y1ijh.jpg",
                npc_name: "乔伊斯·梅西耶"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/AfwGLixt.jpg",
                npc_name: "让·维克玛"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/fCJKibph.jpg",
                npc_name: "茱蒂特·迈诺特"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/MALxDG2k.jpg",
                npc_name: "联盟战舰弓箭手号"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/mGzXEFvd.jpg",
                npc_name: "洗衣女工"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/ZEn6BdOl.jpg",
                npc_name: "莉莉恩，拾网人"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/o3Anhzua.jpg",
                npc_name: "小莉莉"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/q906n6Zm.jpg",
                npc_name: "安德烈"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/PmUPGYpr.jpg",
                npc_name: "爱凡克"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/guv3qwq6.jpg",
                npc_name: "诺伊德"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/mX9eLWrQ.jpg",
                npc_name: "程序员苏娜"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/kTnApU1d.jpg",
                npc_name: "蒂亚戈"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/G0Gywb1R.jpg",
                npc_name: "阿西尔"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/j3BdJjij.jpg",
                npc_name: "莉莉恩的双胞胎"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/TnKoMWXX.jpg",
                npc_name: "猪猪女侠"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/ytIUiwxG.jpg",
                npc_name: "露比，教唆犯"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/HlvMrir9.jpg",
                npc_name: "莫雷尔"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/xLZ9Bzfe.jpg",
                npc_name: "盖里"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/WHXhaYaI.jpg",
                npc_name: "工人的尸体"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/HEJkrj8m.jpg",
                npc_name: "弱水三千只取一尿饮"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/rz9B3yju.jpg",
                npc_name: "花花世界我一人干翻"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/YGPX4v02.jpg",
                npc_name: "鲁德·霍恩克洛温"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/jo7V3wtz.jpg",
                npc_name: "菲莉丝·波勒"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/KZqMjJbv.jpg",
                npc_name: "劳尔·科顿艾尔"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/04/OTGmPZdl.jpg",
                npc_name: "逃兵"
            },
            {
                avater_src: "https://img1.imgtp.com/2022/08/05/3bhBjIks.jpg",
                npc_name: "伊苏林迪竹节虫"
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