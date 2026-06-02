vue<script setup>
import { ref } from 'vue'
import songs from '../data/song.json'

const currentSong = ref(null)
const isPlaying = ref(false)
const audioEl = ref(null)

const playSong = (song) => {
  if (currentSong.value?.id === song.id) {
    if (isPlaying.value) {
      audioEl.value.pause()
      isPlaying.value = false
    } else {
      audioEl.value.play()
      isPlaying.value = true
    }
    return
  }

  if (audioEl.value) {
    audioEl.value.pause()
  }

  currentSong.value = song
  isPlaying.value = false

  setTimeout(() => {
    if (audioEl.value) {
      audioEl.value.load()
      audioEl.value.play()
          .then(() => { isPlaying.value = true })
          .catch(e => console.error('Ошибка play():', e))
    }
  }, 50)
}

const onEnded = () => {
  isPlaying.value = false
  currentSong.value = null
}
</script>

<template>
  <div class="back">
    <div class="songs-list">
    <audio
        ref="audioEl"
        :src="currentSong?.audioUrl"
        @ended="onEnded"
        @error="(e) => console.error('Audio error:', e)"
    />
    <div v-for="song in songs"  :key="song.id"  class="song-item"  :class="{ active: currentSong?.id === song.id }"  @click="playSong(song)">
      <div class="song-left">
        <div class="song-icon">
          <span v-if="currentSong?.id === song.id && isPlaying" class="ColorActive">⏸</span>
          <span v-else-if="currentSong?.id === song.id && !isPlaying" class="ColorActive">▶</span>
        </div>
        <img class="song-cover" :src="song.cover" :alt="song.album" />
        <div class="song-info">
          <div class="song-title" :class="{ playing: currentSong?.id === song.id }">
            {{ song.title }}
          </div>
          <div class="song-artist">{{ song.artist }}</div>
        </div>
      </div>
      <div class="song-duration">{{ song.duration }}</div>
    </div>
  </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.back{
  background: #000;
}
.songs-list {
  width: 60%;
  margin: 0 auto;
  background: black;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.song-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: #ffffff;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.15s;
  width: 100%;
}
.song-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.song-item.active {
  background: #c5c5c5;
}
.song-left {
  display: flex;
  align-items: center;
  gap: 14px;
}
.song-icon {
  width: 16px;
  text-align: center;
  font-size: 13px;
  color: black;
  flex-shrink: 0;
}
.ColorActive {
  color: #202020;
}
.song-cover {
  width: 42px;
  height: 42px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
  transition: filter 0.3s ease;
}
.song-info {
  background: transparent;
}
.song-title {
  color: black;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 3px;
  background: transparent;
}
.song-title.playing {
  color: #000000;
}
.song-artist {
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
  background: transparent;
}
.song-duration {
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
  background: transparent;
}
@media (max-width: 425px) {
  .songs-list {
    width: 100%;
    padding: 15px;
    gap: 12px;
  }

  .song-item {
    padding: 10px 12px;
    border-radius: 10px;
  }

  .song-left {
    gap: 10px;
    min-width: 0;
    flex: 1;
  }

  .song-cover {
    width: 36px;
    height: 36px;
  }

  .song-title {
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .song-artist {
    font-size: 11px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .song-duration {
    font-size: 12px;
    margin-left: 8px;
    flex-shrink: 0;
  }

  .song-icon {
    font-size: 11px;
    width: 14px;
  }
}
</style>