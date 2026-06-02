
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import Concert from './views/Concert.vue'
import SongList from './views/Song.vue'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/concert',
            component: Concert
        },  {
            path: '/songList',
            component: SongList
        },
    ],
    history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')