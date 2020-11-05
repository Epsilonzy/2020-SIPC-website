<template>
    <div class="navbar" ref="navbar" :class="{topStyle:changeStyle,noTopStyle:!changeStyle}">
        <img class="logo" :src="logo">
        <div class="list" v-show="!changeStyle">
            <a href="">我们</a>
            <a href="">动态</a>
            <a href="">寄语</a>
            <a href="">招募</a>
        </div>
    </div>
</template>

<script>
    import logo from "../assets/sipc.jpg"
    export default {
        components:{},
        props:{
            watchTopStyle:Boolean
        },
        data(){
            return{
                logo:logo,
                changeStyle:false
            }
        },
        computed: {
           
        },
        watch: {
           watchTopStyle:function(newV,oldV){
            //    console.log(newV);
            //    if(oldV===true){
            //        this.changeStyle = false;
            //        window.addEventListener('scroll',this.watchNavbar);
            //    }
           }
        },
        methods: {
           watchNavbar(){
               let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
               if(scrollTop<=200){
                   this.changeStyle = true;
               } else {
                   this.changeStyle = false;
               }
           }
        },
        created() {
           
        },
        mounted() {
           if(this.watchTopStyle==true){
               this.changeStyle = true;
               window.addEventListener('scroll',this.watchNavbar);
           } else {
               this.changeStyle = false;
           }
        },
};
</script>

<style lang='scss' scoped>
    .topStyle{
        transition:.3s linear;
        background-color: rgba(255,255,255,0);
        height:60px;
    }
    .noTopStyle{
        transition:.3s linear;
        background-color: white;
        box-shadow:0 0 10px #666;
        height:80px;
    }
    .navbar{
        position: fixed;
        z-index:999;
        width:100%;
        display:flex;
        justify-content: space-between;
        align-items: center;
        >.logo{
            width:60px;
            height:60px;
            background-color: black;
            margin-left:40px;
        }
        >.list{
            width:440px;
            height:40px;
            line-height: 40px;
            margin-right:40px;
            >a{
                font-size:22px;
                margin:0 60px 0 0;
                font-weight:500;
                transition:.3s linear;
            }
            >a:hover{
                color:#87CEFA;
                transition:.3s linear;
            }
        }
    }
</style>