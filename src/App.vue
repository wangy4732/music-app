<template>
  <div id="app">
    <TabPages :tab-list='tabList'>
      <router-view/>
    </TabPages>

    <div class="player">
      <audio src="" controls=''></audio>
    </div>

  </div>
</template>

<script>
import TabPages from './components/index.vue';

export default {
  name: 'App',
  components: {
    TabPages
  },
  data(){
    return {
      tabList:[
        {
          name:'self',
          path:'/self'
        },
        {
          name:'music',
          path:'/music',
        },
        {
          name:'video',
          path:'/video'
        }
      ]
    }
  }
}
</script>

<style>
.player{
  width: 100%;;
  height: 65px;
  background: blueviolet;
  position: fixed;
  bottom: 0px;
}
</style>
