import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex);

export default new vuex.Store({
    state: {
        //首页部分
        bannerImgList: [
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3689085212,1065717883&fm=26&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599489167734&di=c1f5b2a0326285887066f3ea849a2638&imgtype=0&src=http%3A%2F%2Fimg.gaokaozy.cn%2Fschool%2Fphoto%2F1%2F58d3a5e9aea10.jpg"
        ],
        //更改后续首页图片，目前使用静态
        bannerImg: ''


    },
    mutations: {
        GetBannerImgList(state, data) {
            state.bannerImgList = data;
        },
        GetBannerImg(state, data) {
            state.bannerImg = data;
        }
    },
    actions: {

    },
    getters: {

    },
    modules: {

    }
})