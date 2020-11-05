<template>
    <div class="container">
        <!-- <div ref="navbar"> -->
        <navbar :watchTopStyle="true"></navbar>
        <!-- </div> -->
        <Parallax :speedFactor="0.25" direction="down" fixedClass="is-fixed">
            <img :src="bannerImg">
        </Parallax>
        <div class="section"></div>
    </div>
</template>

<script>
    import Parallax from 'vue-parallaxy'
    //静态图片
    import bannerImg from '@/assets/banner.jpg'
    export default {
        components:{Parallax},
        props:{},
        data(){
            return{
               swiperOption: {
                    loop:true,
                    autoplay:1000,
                    speed:1000
                    // Some Swiper option/callback...
                },
                windowHeight:0,
                changeNavbar:true
            }
        },
        computed: {
            banners(){
                return this.$store.state.bannerImgList;
            },
            bannerImg(){
                return bannerImg;
            }
        },
        watch: {
           
        },
        methods: {
        //    watchNavbar(){
        //        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //        if(scrollTop<=200){
        //            this.changeNavbar = true;
        //        } else {
        //            this.changeNavbar = false;
        //        }
        //    }
        },
        created() {
           
        },
        mounted() {
            // console.log('Current Swiper instance object', this.swiper)
            // this.mySwiper.slideTo(0, 1000, true);
            this.windowHeight = document.body.clientHeight-80;
            // window.addEventListener('scroll',this.watchNavbar);
        },
};
</script>

<style lang='scss' scoped>
    .container{
        width:100%;
        .bannerImg{
            width:100%;
        }
    }
    .section{
        position:relative;
        width:100%;
        height:100vh;
        background-color: white;
        overflow-x: hidden;
    }
    .section:after{
        content:"";
        position:absolute;
        display:block;
        top:-30vh;
        width:100%;
        height:80px;
        background-color: black;
        // border-color: black transparent;
        // border-width: 0 0 30vh 100vw;
        // border-style: solid;
    }
    .box{
        width:100%;
        height:100vh;
        background-color: red;
    }
    .box2{
        width:100%;
        height:100vh;
        background-color: blue;
    }
</style>