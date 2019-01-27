<template>
    <div id="music">

        <div class="banners">
            <slider ref="slider" :options="options">
                <slideritem v-for="(item,index) in banners.banners" :key="index">
                    <img  :src="item.imageUrl" style="width:100%;height:100%;borderRadius:5px;" @click="web(item.url)">
                    <div class="typeTitle">{{item.typeTitle}}</div>
                </slideritem>
            </slider>
        </div>

        <div class="project">
            <div>
                <div>

                </div>
                私人FM
            </div>
            <div>
                <div>

                </div>
                每日推荐
            </div>
            <div @click="jumpPlaylist">
                <div>

                </div>
                歌单
            </div>
            <div>
                <div>

                </div>
                排行榜
            </div>
        </div>

    </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'

export default {
    name:'music',
    components:{
        slider,
        slideritem,
    },
    data(){
        return {
            banners:{},
            options:{
                loop:true,
                autoplay:3000,
            }
        }
    },
    created(){
        this.$axios.get('http://localhost:3000/banner')
        .then((res) => {
            this.banners = res.data;
            console.log(this.banners)
        })
    },
    methods:{
        jumpPlaylist(){
            this.$router.push('/playlist');
        },
        web(url){
            if(url){

            }
        }
    }   
}
</script>

<style>
    #music {
        position: fixed;
        overflow: scroll;
        width: 100%;
        height: 100%;
        font-size: 36px;
        background-color: rgb(53, 44, 44);
        margin-top: 42px;
    }

    #music .banners{
        width: 100%;
        height: 160px;
        padding-left: 5px;
        padding-right: 5px;
        margin-top: 5px;
        box-sizing: border-box;
        position: relative;
    }

    #music .banners .typeTitle{
        position: absolute;
        color: aliceblue;
        background: red;
        right: 0px;
        bottom: 0px;
        font-size: 15px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
        padding-left: 5px;
        padding-right: 5px;
    }

    #music .project{
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    #music .project>div{
        width: 80px;
        height: 80px;
        font-size: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: aliceblue;
    }

    #music .project>div>div{
        width: 60px;
        height: 60px;
        background: rgb(75, 85, 85);
        border-radius: 50%;
    }
</style>

