<template>
    <div class="main">
            <div class="page-tab" :style="{width:w+'px'}">
                <div 
                    :class="nowPath == item.path ? 'tab-item tab-item_active' : 'tab-item'"
                    v-for='(item, index) in tabList'
                    :key="index"
                    v-show="show"
                    >
                    <router-link mode="out-in" :to="item.path">

                        <div v-if="item.name == 'self'">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">

                                <g><path d="M500,532.4c-220.3,0-399.6,179.3-399.6,399.6c0,11.4,0.7,22.6,1.7,33.7c1.1,13.8,12.6,24.3,26.5,24.3h742.8c13.8,0,25.3-10.5,26.4-24.3c0.9-11.1,1.7-22.3,1.7-33.7C899.5,711.7,720.3,532.4,500,532.4z"/><path d="M500,479.8c129.7,0,234.9-105.2,234.9-234.9C734.9,115.2,629.7,10,500,10c-129.8,0-234.9,105.2-234.9,234.9C265.1,374.7,370.2,479.8,500,479.8z"/></g>
                            </svg>
                        </div>
                        <div v-else-if="item.name == 'music'">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                                <g><path d="M238.4,966.5h-18.5c-60.3,0-109.7-49.3-109.7-109.7V576.1c0-60.3,49.3-109.7,109.7-109.7h18.5c60.3,0,109.7,49.3,109.7,109.7v280.8C348.1,917.2,298.7,966.5,238.4,966.5z"/><path d="M779.6,966.2h-18.5c-60.3,0-109.7-49.3-109.7-109.7V575.9c0-60.3,49.3-109.7,109.7-109.7h18.5c60.3,0,109.7,49.3,109.7,109.7v280.8C889.4,916.9,840,966.2,779.6,966.2z"/><path d="M68.8,729.2V536.5C68.8,300.5,254.1,100.3,490,95c244.9-5.5,441.1,193.2,441.1,436.8v197.3c0,16.2,13.1,29.4,29.4,29.4l0,0c16.2,0,29.4-13.1,29.4-29.4V534.4c0-274.7-224.8-506.1-499.4-500.8C224.3,38.6,10,256,10,523.4v205.8c0,16.2,13.1,29.4,29.4,29.4l0,0C55.7,758.5,68.8,745.4,68.8,729.2z"/></g>
                            </svg>
                        </div>
                        <div v-else-if="item.name == 'video'">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                                <g><path d="M785.7,174.1H214.3C101.5,174.1,10,265.6,10,378.4v243.1c0,112.9,91.5,204.3,204.3,204.3h571.3c112.9,0,204.3-91.5,204.3-204.3V378.4C990,265.6,898.5,174.1,785.7,174.1z M627.7,530.9c0,4.2-219.5,124.8-219.5,124.8c-26.6,0-48.1-5-48.1-31.6V383.5c0-26.6,21.5-34.6,48.1-34.6c0,0,219.5,122,219.5,129.3V530.9L627.7,530.9z"/></g>
                            </svg>
                        </div>
                       
                    </router-link>
                </div>
                <div class="search" v-show="show">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                        <g><path d="M449,78.2c207.6,0,376.5,168.9,376.5,376.5c0,207.6-168.9,376.5-376.5,376.5c-207.6,0-376.5-168.9-376.5-376.5C72.5,247.1,241.4,78.2,449,78.2 M449,15.7c-242.5,0-439,196.5-439,439c0,242.5,196.5,439,439,439c242.4,0,439-196.6,439-439C888,212.2,691.4,15.7,449,15.7L449,15.7z"/><path d="M990,943.4l-40.9,40.9L728.2,763.4l40.9-40.9L990,943.4z"/>
                        </g>
                    </svg>
                </div>     

                <div class="back" v-show="!show">
                        <svg @click="back" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                            <g><path d="M964.5,526.5c-1.5,0-2.8-0.6-4.3-0.9v1.7H104.9l398,398l-38.4,38.4L10,509.3l9.3-9.3l-9.3-9.3L464.5,36.2l38.4,38.4L104.5,473h855.8v1.7c1.4-0.3,2.7-0.9,4.3-0.9c14,0,25.5,11.8,25.5,26.3C990,514.7,978.6,526.5,964.5,526.5z"/></g>
                        </svg>
                    <div v-if="nowPath == '/playlist'">
                        <div class="route">
                            歌单
                        </div>
                    </div>
                    <div v-else-if="nowPath == '/highqualityAll'">
                        <div class="route">
                            精品歌单-全部
                        </div>
                    </div>
                </div>
            </div>

            
        
        <transition :name="slideDirection">
            <slot>
            </slot> 
        </transition>
    </div>
</template>

<script>

export default {
    props: {
        tabList: Array
    },
    created(){
        this.w = document.body.clientWidth || document.documentElement.clientWidth;
    },
    mounted() {
        this.nowPath = this.$route.path;
        this.initTouchedEvent();
    },
    data() {
        return {
            show:true,
            tabSwiper: {},
            slideDirection: 'slideforward',
            nowPath: '',
            startX: '',
            startY:'',
            w:'',
        };
    },
    methods: {
        back(){
            this.$router.go(-1);
        },
        touchedstartHandler(e) {

            this.startX = e.changedTouches[0].pageX;
            this.startY = e.changedTouches[0].pageY;
        },
        touchendHandler(e) {
            

            let direction = this.startX - e.changedTouches[0].pageX;
            let directionY = this.startY - e.changedTouches[0].pageY;
            
            let nowRouteIndex = 0;
            this.tabList.forEach((v, index) => {
                if (v.path == this.nowPath) {
                    nowRouteIndex = index;
                }
            });
            
            var disXY = Math.abs(direction)>Math.abs(directionY);
            
            if (disXY&&direction >= 0 && nowRouteIndex < this.tabList.length - 1) {
                //设置向前动画
                this.slideDirection = 'slideforward';
                this.$router.push({'path': this.tabList[nowRouteIndex + 1].path});
            } 
            if (disXY&&direction < 0 && nowRouteIndex > 0) {
                //设置向后动画
                this.slideDirection = 'slideback';
                this.$router.push({'path': this.tabList[nowRouteIndex - 1].path});
            }
        },
        initTouchedEvent() {
            // this.$el.addEventListener('touchstart', this.touchedstartHandler.bind(this));
            // this.$el.addEventListener('touchend', this.touchendHandler.bind(this));
        },
    },
    watch: {
        '$route' (to, from) {
            this.nowPath = to.path;
            if(this.nowPath == '/playlist' || this.nowPath == '/highqualityAll'){
                this.show = false;
            }else{
                this.show = true;
            }
        }
    }
};
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    body {
        height: 100%;
        width: 100%;
        background-color: #1f1818;
    }
    a {
        color: #333;
        text-decoration: none;
    }
    
    .page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    
    .page-tab {
        display: flex;
        position: fixed;
        height: 42px;
        z-index: 1;
        /* background:  rgb(53, 44, 44); */
    }
    .search{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
    }
    .search svg{
        width: 20px;
        height: 20px;
        fill: rgb(223, 220, 216);
    }
    .tab-item {
        margin-left: auto;
        margin-right: auto;
        height: 40px;
        display: flex;
        align-items: center;
    }
    .tab-item>a>div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tab-item>a>div>svg{
        width: 25px;
        height: 25px;
        fill: rgb(109, 105, 99);
    }
    .tab-item_active {
        border-bottom: 1px solid rgb(219, 216, 212);
    }
    .tab-item_active a {
        color: rgb(223, 220, 216);
    }
    .tab-item_active>a>div>svg{
        fill: rgb(223, 220, 216);
    } 

    .slideforward-enter-active, .slideforward-leave-active {
        position: absolute;
        transition: all .2s;
        transform: translate3d(0px, 0px, 0px);
    }
    .slideforward-enter, .slideforward-leave-to {
        position: absolute;
        transform:  translate3d(500px, 0px, 0px);
    }
    .slideback-enter-active, .slideback-leave-active {
        position: absolute;
        transition: all .2s;
        transform: translate3d(0px, 0px, 0px);
    }
    .slideback-enter, .slideback-leave-to {
        position: absolute;
        transform:  translate3d(-500px, 0px, 0px);
    }

    .back{
        padding-left: 5px;
        display: flex;
        align-items: center;
    }
    .back svg{
        width: 25px;
        height: 25px;
        fill: aliceblue;
    }

    .route{
        color: aliceblue;
        margin-left: 10px;
    }
</style>
