

<template>
<header>
  <div class="EgorBalo">
    <div class="info">
      <h1>Егор Бало — артист, который ловит ту самую<br>
        тонкую грань между городской хандрой и <br>
        светлой романтикой. Его музыка звучит как<br>
        разговор по душам поздним вечером: честно,<br>
        немного устало, но с той тёплой искрой, которая<br>
        заставляет верить в лучшее. В своём творчестве<br>
        он балансирует между меланхоличными<br>
        размышлениями о быте и трогательными<br>
        зарисовками о чувствах, создавая уютный <br>
        саундтрек для прогулок в одиночестве или <br>
        откровенности с близкими.</h1>
      <div class="info-btn">
        <a href="https://music.yandex.ru/artist/21018122"><button class="btn">
          <img src="@/assets/images/yandex-music.svg" alt="yandex-music">
          Яндекс<br>Музыка
        </button>
        </a>
        <a href="https://vk.com/artist/egorbalo?ysclid=mp7t4kxcki86032289"><button class="btn">
          <img src="@/assets/images/yandex-music.svg" alt="yandex-music">
          ВК<br>Музыка
        </button>
        </a>
      </div>
    </div>
    <div class="EgorBalo-images">
      <img src="@/assets/images/EgorBalo-VseSlomal.svg" alt="EgorBalo">
    </div>
  </div>
</header>


  <div class="PhotoConcert">
    <h1>Фото с концертов</h1>
    <div class="slider">
      <div class="slides" :style="{ transform: `translateX(-${current * 100}%)` }">
        <div class="slide"><img src="@/assets/images/sliderFirst.svg" alt=""></div>
        <div class="slide"><img src="@/assets/images/sliderSecond.svg" alt=""></div>
        <div class="slide"><img src="@/assets/images/sliderThird.svg" alt=""></div>
        <div class="slide"><img src="@/assets/images/sliderFourth.svg" alt=""></div>
        <div class="slide"><img src="@/assets/images/sliderFifth.svg" alt=""></div>
      </div>

      <div class="controls">
      <span
          v-for="n in 5"
          :key="n"
          :class="{ active: current === n - 1 }"
          @click="current = n - 1"
      ></span>
      </div>
    </div>
  </div>

  <div class="Video">
    <h1>Видео</h1>
    <div class="video-all">
      <div class="video-block">
        <a href="https://vk.com/video-189771005_456239335?ysclid=mpgdvlv98l56119638"><img src="@/assets/images/Hight.svg" alt="">
          <h2>Выступление на ВЫСОТА.LIVE</h2></a>
      </div>
      <div class="video-block">
        <a href="https://vk.com/video-223576159_456239027?ysclid=mpgdxel9j413297185"> <img src="@/assets/images/images.svg" alt="">
          <h2>Клип: егор бало - мыльница!</h2></a>
      </div>
    </div>
  </div>

</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const current = ref(0)
const total = 5

let timer = null

onMounted(() => {
  timer = setInterval(() => {
    current.value = (current.value + 1) % total
  }, 3000)
})

onUnmounted(() => clearInterval(timer))
</script>

<style scoped>

@font-face {
  font-family: 'Chiron';
  src: url('@/assets/fonts/ChironGoRoundTC-Light.ttf');
}
*{
  font-family: 'Chiron' , sans-serif;
  color: white;
  text-decoration: none;
  font-weight:lighter;
}
.EgorBalo{
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: url("@/assets/images/background.svg");
  color: white;

}
.info{
  text-align: left;
  padding: 90px 0 187px 25px;
}
.info h1{
  max-width: 750px;
}
.info-btn{
  max-width: 750px;
  padding-top: 120px;
  display: flex;
  justify-content: space-between;
}
.info-btn img{
  width: 80px;
  height: 80px;
  padding-right: 15px;
}
.btn{
  text-align: left;
  display: flex;
  font-size: 36px;
  background-color: rgba(217, 217, 217, 0.11);
  border: 1px solid white ;
  padding: 22px 25px;
  cursor: pointer;
}
.EgorBalo-images {
  padding-top: 90px;
}
.PhotoConcert{
  border-top: 1px solid white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1080px;
}
.Video{
  border-top: 1px solid white;
  background-color: #252114;
  width: 100%;
  height: 870px;
  display: flex;
  flex-direction: column;
}
.video-block{
  display: flex;
  flex-direction: column;
}
.video-block img{
  width: 710px;
  height: 360px;
  transition: all 0.5s ease;
}
.video-block img:hover {
  filter: grayscale(80%);
}
.video-block h2{
  text-align: left;
  font-size: 40px;
}
.video-all{
  display: flex;
  justify-content: space-around;
  padding-top: 140px ;
}
.Video h1{
  text-align: center;
  font-size: 96px;
  padding-top: 40px;
}
.PhotoConcert {
  border-top: 1px solid white;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 0 80px;
}
.PhotoConcert h1 {
  font-size: 96px;
  text-align: center;
  margin-bottom: 60px;
}
.slider {
  width: 80%;
  max-width: 1200px;
  overflow: hidden;
  position: relative;
}
.slides {
  display: flex;
  transition: transform 2.3s ease-in-out;
}
.slide {
  min-width: 100%;
  flex-shrink: 0;
}
.slide img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  display: block;
}
.controls {
  text-align: center;
  margin-top: 20px;
}
.controls span {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  transition: background 0.3s;
}
.controls span.active {
  background: white;
}
@media screen and (max-width: 425px) {

  .EgorBalo {
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    text-align: center;
  }
  .EgorBalo {
    display: flex;
    flex-direction: column;
  }
  .EgorBalo-images {
    order: 1;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .EgorBalo-images img {
    width: 95%;
    max-width: 360px;
  }
  .info {
    order: 2;
    padding: 30px 15px;
    text-align: center;
  }
  .info h1 {
    font-size: 16px;
    line-height: 1.6;
    max-width: 100%;
  }

  .info h1 br {
    display: none;
  }


  .info-btn {
    flex-direction: row;
    gap: 15px;
    padding-top: 50px;
    align-items: center;
    justify-content: center;
  }

  .btn {
    width: auto;
    min-width: 140px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    padding: 10px 15px;
    gap: 8px;
  }

  .info-btn img {
    width: 30px;
    height: 30px;
    padding-right: 0;
  }




  .PhotoConcert {
    height: auto;
    padding: 40px 15px;
  }

  .PhotoConcert h1 {
    font-size: 42px;
    margin-bottom: 30px;
  }

  .slider {
    width: 100%;
  }
  .slide img {
    height: 250px;
    border-radius: 10px;
  }
  .controls {
    margin-top: 20px;
  }
  .controls span {
    width: 8px;
    height: 8px;
    margin: 4px;
  }
  .Video {
    height: auto;
    padding: 40px 15px;
  }

  .Video h1 {
    font-size: 42px;
    padding-top: 0;
  }

  .video-all {
    flex-direction: column;
    gap: 40px;
    padding-top: 50px;
    align-items: center;
  }

  .video-block {
    width: 100%;
  }

  .video-block img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .video-block h2 {
    font-size: 22px;
    text-align: center;
    margin-top: 15px;
  }
}
</style>
