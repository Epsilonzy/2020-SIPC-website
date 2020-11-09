<template>
    <div class="timeline">
        <div class="banner">
            <img :src="timelineImg">
            <h1>成就</h1>
            <hr>
            <div class="line">
                <div class="prev" @click="prev">
                    <svg t="1604930647492" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5451" width="48" height="48"><path d="M204.8 506.667l472.064-512 142.336 153.6-330.752 358.4 330.752 358.4-142.336 153.6-472.064-512z" p-id="5452" fill="#dbdbdb"></path></svg>
                </div>
                <div class="circle" 
                v-for="(item,index) in selectedItem" 
                :key="index"
                :class="{'selected':index==selectedIndex}"
                @click="selectedIndex = index"
                >
                </div>
                <div class="next" @click="next">
                    <svg t="1604930714734" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1600" width="48" height="48"><path d="M819.2 512l-472.064 512L204.8 870.4 535.552 512 204.8 153.6 347.136 0 819.2 512z" p-id="1601" fill="#dbdbdb"></path></svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components:{},
        props:{},
        data(){
            return{
               selectedItem:[true,false,false,false,false],
               selectedIndex:0
            }
        },
        computed: {
           timelineImg(){
               return this.$store.state.timelineImg;
           }
        },
        watch: {
           
        },
        methods: {
           changeItem(index,item){
               console.log(index);
               console.log(item);
               let preIndex = this.selectedItem.indexOf(true);
               this.selectedItem[preIndex] = false;
               this.selectedItem[index] = true;
               console.log(this.selectedItem);
           },
           prev(){
               if(this.selectedIndex!=0){
                   this.selectedIndex--;
               }
           },
           next(){
               if(this.selectedIndex!=this.selectedItem.length-1){
                   this.selectedIndex++;
               }
           }
        },
        created() {
           
        },
        mounted() {
           
        },
};
</script>

<style lang='scss' scoped>
    .banner{
        width:100%;
        position:relative;
        >img{
            width:100%;
            opacity: 0.6;
            position:relative;
        }
        >h1{
            position:absolute;
            color:white;
            text-align: center;
            top:40px;
            left:0;
            right:0;
            bottom:0;
        }
        >hr{
            color:#dbdbdb;
            background-color:#dbdbdb;
            width:760px;
            height:5px;
            position:absolute;
            top:150px;
            left:0;
            right:0;
            bottom:0;
            margin-left:auto;
            margin-right:auto;
            text-align: center;
        }
        >.line{
            position:absolute;
            color:white;
            text-align: center;
            top:130px;
            left:0;
            right:0;
            bottom:0;
            display:flex;
            margin:auto;
            width:800px;
            justify-content: space-between;
            
            >.circle{
                width:50px;
                height:50px;
                background-color: #dbdbdb;
                border-radius: 50%;
                transition:.2s linear;
            }
            >.selected{
                transition:.2s linear;
                transform: scale(1.2);
                box-shadow:0 0 4px white;
                background-color: #fff;
            }
        }
    }
</style>