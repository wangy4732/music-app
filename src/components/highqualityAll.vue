<template>
    <div id="highqualityAll"  @scroll="handleScroll()">
        <div class="highquality">
            <ul >
                <li v-for="(item,index) in highqualityAll.playlists" :key="index">
                    <div class="left">
                        <span>{{item.playCount}}</span>
                        <img :src="item.coverImgUrl">
                    </div>
                    <div class="right">
                        <h4>{{item.name}}</h4>
                        <span>by {{item.creator.nickname}} ☆</span>
                        <div>
                            <span>{{item.tag}}</span>
                            {{item.copywriter}}
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="loader">
            <span  v-if="show">loading</span>
        </div>

    </div>
</template>

<script>
export default {
    name:'highqualityAll',
    data(){
        return {
            highqualityAll:{},
            before:'',
            length:'',
            show:true,
        }
    },
    created(){
        this.getHighqualityAll();
    },
    mounted(){
    },
    methods:{
        getHighqualityAll(){
            this.$axios.get('http://localhost:3000/top/playlist/highquality?before='+this.before+'&limit=20')
            .then((res) => {
                this.highqualityAll = res.data;
                console.log(this.highqualityAll.playlists)
            })
        },
        handleScroll(){
             if(this.$el.scrollTop+this.$el.offsetHeight>this.$el.scrollHeight-1){
                 this.show = true;
                 this.length = this.highqualityAll.playlists.length;
                 this.before = this.highqualityAll.playlists[this.length-1].updateTime;
                this.$axios.get('http://localhost:3000/top/playlist/highquality?before='+this.before+'&limit=20')
                .then((res) => {
                    for(let i = 0;i < res.data.playlists.length;i++){
                        this.highqualityAll.playlists.push(res.data.playlists[i])
                    }
                    this.show = false;
                })
             }else{
                 this.show = false;
             }
        }    
    }
}
</script>

<style>
#highqualityAll{
    position: fixed;
    margin-top: 42px;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-bottom: 150px;
    box-sizing: border-box;
}

#highqualityAll .highquality{
    width: 100%;
}

#highqualityAll .highquality ul{
    width: 100%;
}

#highqualityAll .highquality ul li{
    width: 100%;
    height: 120px;
    color: aliceblue;
    margin-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content:space-around;
}

#highqualityAll .highquality ul li .left{
    width: 130px;
    height: 100%;
    position: relative;
    background-image: linear-gradient(rgba(39, 36, 36, 0.8),rgb(129, 115, 115));
    border-radius: 5px;
}

#highqualityAll .highquality ul li .left img{
    width:100%;
    height: 100%;
    border-radius: 5px;
    mix-blend-mode: overlay;

}

#highqualityAll .highquality ul li .left>span{
    position: absolute;
    right: 2px;
    top: 2px;
    font-size: 10px;
    color:white;
}

#highqualityAll .highquality ul li .right{
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 5px;
    color: rgb(181, 223, 223);
}

#highqualityAll .highquality ul li .right>span{
    font-size: 10px;
    color: rgb(127, 133, 138);
}

#highqualityAll .highquality ul li .right div{
    font-size: 10px;
    color: rgb(174, 175, 177);
}

#highqualityAll .highquality ul li .right div>span{
    padding-left: 2px;
    padding-right: 2px;
    border: .5px solid rgb(174, 175, 177);
}


.loader{
    width: 100%;
    height: 80px;
    color: aliceblue;
}
</style>


