<template>
    <div>
        <div :class="{
        'triDecorationL':left,
        'triDecorationR':!left,
        'reverse':!top
        }"></div>
    </div>
</template>

<script>
    export default {
        components:{},
        props:{
            left:{
                default:true
            },
            top:{
                default:true
            }
        },
        data(){
            return{
               
            }
        },
        computed: {
           
        },
        watch: {
           
        },
        methods: {
           
        },
        created() {
           
        },
        mounted() {
           
        },
};
</script>

<style lang='scss' scoped>
    .triDecorationL{
        margin-top:-20vh;
        border-color: white transparent;
        border-width: 0 100vw 20vh 0;
        border-style: solid;
        position: relative;
        box-sizing: border-box;
        width:100%;
        height:20vh;
    }
    .triDecorationR{
        margin-top:-20vh;
        border-color: white transparent;
        border-width: 0 0 20vh 100vw;
        border-style: solid;
        position: relative;
        box-sizing: border-box;
        width:100%;
        height:20vh;
    }
    .reverse{
        transform: rotate(180deg);
    }
</style>