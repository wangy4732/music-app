<template>
    <div id="playlist" @scroll="handleScroll()">

        <div class="highquality" @click="jumpHighqualityAll">
            <div class="left">
                <img :src="topOne.coverImgUrl">
            </div>
            <div class="right">
                <h3>
                    精品歌单
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                        <g><path d="M656.7,528.3c14.4,16.8,43.2,21.4,62.4,4.9c9.6-8.2,14.4-19.6,15.1-31c0-0.6,0-1.2,0-1.8c0,0,0,0,0,0l0,0l0,0c0.2-10.8-3.4-21.6-10.2-29.6L344.1,26C327.7,6.7,301,4.6,281.7,21c-9.6,8.2-15,19-15.8,30.1c-0.9,11.2,2.7,22.7,10.9,32.3l355.6,416.5L656.7,528.3L656.7,528.3z"/><path d="M343.3,974.8l379.9-444.9c7.5-8.8,11.2-19.2,11-29.5c0,0.6,0,1.2,0,1.8c-0.6,11.4-5.4,22.8-15.1,31c-19.2,16.4-48,11.9-62.4-4.9l-24.3-28.4L276,917.3c-7.2,8.4-10.8,19.9-10.2,31.4c0.6,11.4,5.4,22.8,15.1,31h0C300.1,996.2,328.9,991.6,343.3,974.8z"/></g>
                    </svg>
                </h3>
                <div class="name">
                    {{topOne.name}}
                </div>
                <span>
                    {{topOne.copywriter}}
                </span>
            </div>
        </div>

        <div class="playlists">
            <ul>
                <li v-for="(item,index) in playlists.playlists" :key="index">
                    <div class="image">
                        <img :src="item.coverImgUrl">
                        <span class="count">
                            {{item.playCount}}
                        </span>
                        <span class="nickname">
                            {{item.creator.nickname}}
                        </span>
                    </div>
                    <span>
                        {{item.name}}
                    </span>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name:'playlist',
    data(){
        return {
            topOne:{},
            playlists:{},
            limit:20
        }
    },
    created(){
        this.getTopOne();
        this.getPlaylists();
    },
    methods:{
        jumpHighqualityAll(){
            this.$router.push('/highqualityAll');
        },
        getTopOne(){
            this.$axios.get('http://localhost:3000/top/playlist/highquality?limit=1')
            .then((res) => {
                this.topOne = res.data.playlists[0];
            })
        },
        getPlaylists(){
            this.$axios.get('http://localhost:3000/top/playlist?limit='+this.limit+'&order=hot')
            .then((res) => {
                this.playlists = res.data;
                console.log(this.playlists);
            })
        },
        handleScroll(){
             if(this.$el.scrollTop+this.$el.offsetHeight>this.$el.scrollHeight-1){
                 console.log(1)
                 this.limit += 20;
                 this.$axios.get('http://localhost:3000/top/playlist?limit='+this.limit+'&order=hot')
            .then((res) => {
                this.playlists = res.data;
            })
             }
        }
    }
}
</script>

<style>
#playlist{
    position: fixed;
    margin-top: 42px;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-bottom: 150px;
    box-sizing: border-box;
}

#playlist .highquality{
    width: 100%;
    height: 150px;
    background: -webkit-gradient(linear, 0 0, 0 100%, from( rgb(31, 24, 24)), to(rgb(64, 59, 61)));
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
}

#playlist .highquality .left{
    width:120px;
    height: 120px;
}

#playlist .highquality .left img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

#playlist .highquality .right{
    width:60%;
    height: 120px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(231, 239, 245);
}

#playlist .highquality .right h3{
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

#playlist .highquality .right h3 svg{
    width: 18px;
    fill: aliceblue;
}

#playlist .highquality .right .name{
    margin-bottom: 10px;
}

#playlist .highquality .right span{
    font-size: 10px;
    color: rgb(164, 173, 182);
}

#playlist .playlists{
    width: 100%;
}

#playlist .playlists ul{
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

#playlist .playlists ul li{
    width:200px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#playlist .playlists ul li>div{
    width: 100%;
    height: 200px;
    background-image: linear-gradient(rgba(77, 68, 68, 0.8),rgb(49, 41, 41));
    position: relative;
}


#playlist .playlists ul li>div .count{
    top: 0px;
    right: 2px;
    position: absolute;
    color: aliceblue;
    font-size: 12px;
}

#playlist .playlists ul li>div .nickname{
    bottom: 2px;
    position: absolute;
    color: aliceblue;
    font-size: 12px;
}

#playlist .playlists ul li>div>img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    mix-blend-mode: overlay;
}



#playlist .playlists ul li>span{
    font-size: 13px;
    color: rgb(201, 216, 216);
}

</style>


