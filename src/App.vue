
<template>
  <div>
    <header :class="{ 'home-header': $route.path === '/' }">
      <nav class="navigation">
        <div class="nav-buttons">
          <router-link to="/"> <img src="@/assets/images/home.svg" alt="home-btn"> </router-link>
          <router-link to="/songList">Аудиотека</router-link>
          <router-link to="/concert">Афиши</router-link>
        </div>
        <div class="nav-buttons-right"></div>

        <button class="burger-btn" @click="toggleMenu" :class="{ 'active': menuOpen }" aria-label="Меню">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>


      <transition name="dropdown">
        <div v-if="menuOpen" class="mobile-menu">
          <router-link to="/" @click="closeMenu">
            <img src="@/assets/images/home.svg" alt="home-btn"> Главная
          </router-link>
          <router-link to="/songList" @click="closeMenu">Аудиотека</router-link>
          <router-link to="/concert" @click="closeMenu">Афиши</router-link>
        </div>
      </transition>
    </header>
  </div>

  <router-view />

  <footer>
    <div class="footContact">
      <h2>Контакты для связи:</h2>
      <div class="contactIcon">
        <a href="#" @click.prevent="copyEmail">
          <img src="@/assets/images/email.svg" alt="email">
        </a>
        <a href="https://vk.com/gareedan?ysclid=mp7wtrte8t39449261"><img src="@/assets/images/vk.svg" alt="vk"></a>
        <a href="https://t.me/chezahezq_bot"><img src="@/assets/images/telegram.svg" alt="telegram"></a>
      </div>
      <div v-if="showNotification" class="copy-notification">
        {{ "Почта для связи скопирована" }}
      </div>
    </div>
    <div class="footCenter">
      <img src="@/assets/images/EBIcon.svg" alt="">
      <h3>© 2026 EGOR BALO PRODUCTION</h3>
    </div>
    <div class="footSocial">
      <h2>Соц сети:</h2>
      <div class="socialIcon">
        <a href="https://t.me/egorbalo"><img src="@/assets/images/telegram.svg" alt="telegram"></a>
        <a href="https://www.youtube.com/@egorbalo/videos"><img src="@/assets/images/youtube.svg" alt="youtube"></a>
        <a href="https://music.yandex.ru/artist/21018122"><img src="@/assets/images/yaMusic.svg" alt="yandex music"></a>
        <a href="https://vk.com/artist/egorbalo?ysclid=mp7t4kxcki86032289"><img src="@/assets/images/VkMusicCircle.svg" alt="vk music"></a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const showNotification = ref(false)
const menuOpen = ref(false)

const copyEmail = () => {
  navigator.clipboard.writeText('GAREEEDAN@yandex.ru')
  showNotification.value = true
  setTimeout(() => {
    showNotification.value = false
  }, 2000)
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<style>
@font-face {
  font-family: 'Chiron';
  src: url('@/assets/fonts/ChironGoRoundTC-Light.ttf');
}

body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Chiron', sans-serif;
  text-decoration: none;
  color: white;
  font-weight: lighter;
}


.navigation {
  padding-top: 40px;
  padding-bottom: 10px;
  max-width: 1760px;
  padding-left: 80px;
  position: relative;
  display: flex;
  align-items: center;
}

.navigation::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 80px;
  right: 0;
  height: 1px;
  background: white;
  width: 1760px;
}

.nav-buttons {
  display: flex;
  justify-content: left;
  gap: 40px;
  font-size: 40px;
  border-color: white;
  padding-bottom: 10px;
  border-radius: 10px;
}

.nav-buttons img {
  width: 43px;
  height: 43px;
}

header {
  margin: 0;
  padding: 0;
  background-size: cover;
  width: 100%;
  position: relative;
}

.home-header {
  background: url("@/assets/images/background.svg");
}

header:not(.home-header) {
  background-color: black;
}


.burger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-left: auto;
  margin-right: 20px;
  z-index: 100;
}

.burger-btn span {
  display: block;
  width: 28px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}
.burger-btn.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.burger-btn.active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.burger-btn.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}


.mobile-menu {
  display: flex;
  flex-direction: column;
  background-color: black;
  border-bottom: 1px solid white;
  overflow: hidden;
}

.mobile-menu a {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 24px;
  font-size: 26px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.2s ease;
}

.mobile-menu a:last-child {
  border-bottom: none;
}

.mobile-menu a:active {
  background: rgba(255, 255, 255, 0.08);
}

.mobile-menu img {
  width: 30px;
  height: 30px;
}
footer {
  width: 100%;
  height: 230px;
  background-color: black;
  border-top: 1px solid white;
  display: flex;
  justify-content: space-around;
}

.contactIcon {
  display: flex;
  justify-content: space-between;
  width: 175px;
  padding-top: 30px;
}

.contactIcon h2 {
  text-align: left;
  font-size: 20px;
}

.contactIcon img {
  width: 43px;
  height: 43px;
}

.socialIcon img {
  width: 43px;
  height: 43px;
}

.footContact {
  padding-top: 30px;
}

.footCenter {
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footCenter h3 {
  font-size: 18px;
}

.footCenter img {
  width: 91px;
  height: 91px;
  padding-bottom: 20px;
}

.footSocial {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
}

.socialIcon {
  display: flex;
  justify-content: space-between;
  width: 243px;
  padding-top: 30px;
}

.socialIcon h2 {
  text-align: left;
  font-size: 20px;
}


.copy-notification {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #6e6146 0%, #493e26 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 14px;
  z-index: 9999;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.5s ease;
}

@keyframes slideUp {
  from {
    transform: translateX(-50%) translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
}


@media screen and (max-width: 425px) {

  .nav-buttons {
    display: none;
  }

  .burger-btn {
    display: flex;
  }

  .navigation {
    padding: 14px 0;
  }

  .navigation::after {
    left: 0;
    width: 100%;
  }

  footer {
    height: auto;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 30px;
    gap: 20px;
  }

  /* Соц сети - первый блок */
  .footSocial {
    order: 1;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .footSocial h2 {
    text-align: center;
    font-size: 18px;
  }

  .socialIcon {
    justify-content: center;
    gap: 24px;
    width: auto;
    padding-top: 16px;
  }

  .socialIcon img {
    width: 38px;
    height: 38px;
  }

  /* Контакты - второй блок */
  .footContact {
    order: 2;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .footContact h2 {
    text-align: center;
    font-size: 18px;
    margin-bottom: 0;
  }

  .contactIcon {
    justify-content: center;
    gap: 24px;
    width: auto;
    padding-top: 16px;
  }

  .contactIcon img {
    width: 38px;
    height: 38px;
  }

  /* EGOR BALO PRODUCTION - в самом низу */
  .footCenter {
    order: 3;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .footCenter h3 {
    font-size: 14px;
    text-align: center;
  }

  .footCenter img {
    width: 70px;
    height: 70px;
    padding-bottom: 12px;
  }
}
</style>