import Vue from 'vue'
import Router from 'vue-router'

import Self from '@/pages/self/self.vue'
import Music from '@/pages/music/music.vue'
import Video from '@/pages/video/video.vue'
import Playlist from '@/components/playlist.vue'
import HighqualityAll from '@/components/highqualityAll.vue'



Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path:'/',
            redirect:'/music'
        },
        {
            path:'/music',
            name:'music',
            component:Music
        },
        {
            path:'/self',
            name:'self',
            component:Self
        },
        {
            path:'/video',
            name:'video',
            component:Video
        },
        {
            path:'/playlist',
            name:'歌单',
            component:Playlist
        },
        {
            path:'/highqualityAll',
            component:HighqualityAll
        }
    ]
})