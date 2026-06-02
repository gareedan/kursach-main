<template>
<div class="allConcert">
  <div class="allConcert-buy">
        <h1>Купить билет</h1>
          <a href="#"><div class="buy-block">
          К сожалению предстоящих концертов нет :(
        </div></a>
  </div>
  <div class="PastConcert">
    <h1>Прошлые концерты</h1>
   <a href="https://kaverafisha.ru/moscow/events/egor-balo-306302"> <div class="PastConcertBlock">
     <img src="../assets/images/ConcertMoscowPiter.svg" alt="">
      <h3>СТОЛИЧНЫЕ КОНЦЕРТЫ!<br>
        Вас ждут сольные концерты с нашей музыкой в обновленном составе!<br>
        16+ Москва - 11 декабря, клуб “Склад 3”</h3>
    </div></a>
    <a href="https://vk.com/app5575136_-229181512"> <div class="PastConcertBlock">
      <img src="../assets/images/ConcertMoscowPiter.svg" alt="">
      <h3>СТОЛИЧНЫЕ КОНЦЕРТЫ!<br>
        Вас ждут сольные концерты с нашей музыкой в обновленном составе!<br>
        16+ Санкт-Петербург - 18 декабря,  клуб “Ласточка” </h3>
    </div></a>
    <a href="https://kaverafisha.ru/moscow/events/egor-balo-306302"> <div class="PastConcertBlockSix">
      <img src="../assets/images/Minus-six.svg" alt="">
      <h3>Минус Шесть<br>
        На сцене Егор Бало, Лёрн, Женя Гик.<br>
        Санкт-Петербург (Транспортный переулок, 10А)<br>
       </h3>
    </div></a>
  </div>
</div>
</template>



<script >

</script>

<style scoped>
@font-face {
  font-family: 'Chiron';
  src: url('@/assets/fonts/ChironGoRoundTC-Light.ttf');
}
*{
  font-family: 'Chiron', sans-serif ;
  color: white;
  margin: 0;
  padding: 0;
  background-color: black;
  font-weight: lighter;
}
.allConcert{
  height: 2100px;
  width: 100%;
}
.allConcert-buy{

  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 40px 0 40px 85px  ;
}
.allConcert h1{
  padding-bottom: 20px;
}
.buy-block{
  height: 429px ;
  width: 95%;
  background: #000000;
  border: 1px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  font-size: 40px;
  transition: 0.5s;
}
.buy-block:hover{
  background: #3c3c3c;
}
.PastConcert{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  min-width: 90%;
}
.PastConcert h1{
  padding-left: 85px;
}
.PastConcertBlock{
  width: 91%;
  margin: 0 auto;
  border: 1px solid white;
  display: flex;
  justify-content: space-evenly;
  font-size: 40px;
  align-items: center;
  border-radius: 30px;
  height: 431px;
}
.PastConcertBlock h3{
  padding-left: 70px;
 max-width: 1600px;
}

.PastConcertBlock{
  transition: all 0.5s ease;
}
.PastConcertBlock:hover {
  filter: grayscale(90%);
}
.PastConcertBlock img{
  width: 344px;
  height: 429px;
}
.PastConcertBlockSix{
  width: 91%;
  margin: 0 auto;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  gap: 80px;
  align-items: center;
  border-radius: 30px;
  height: 431px;
}
.PastConcertBlockSix h3{
  width: 1406px;
  font-size: 50px;
}
.PastConcertBlockSix{
  transition: all 0.5s ease;
}
.PastConcertBlockSix:hover {
  filter: grayscale(90%);
}
.PastConcertBlockSix img{
  width: 344px;
  height: 429px;
  padding-left: 0;
}

@media (max-width: 425px) {
  .allConcert {
    height: auto;
    padding-bottom: 40px;
  }

  .allConcert-buy {
    padding: 20px 15px;
  }

  .allConcert h1 {
    font-size: 28px;
    padding-bottom: 15px;
    text-align: center;
  }

  .buy-block {
    width: 100%;
    height: 180px;
    font-size: 22px;
    border-radius: 18px;
    text-align: center;
    padding: 15px;
  }

  .PastConcert {
    gap: 20px;
    padding: 0 15px;
  }

  .PastConcert h1 {
    padding-left: 0;
    text-align: center;
    font-size: 28px;
  }

  .PastConcertBlock,
  .PastConcertBlockSix {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
    min-height: 200px;
    padding: 20px;
    gap: 20px;
    border-radius: 20px;
    text-align: left;
  }

  .PastConcertBlock img,
  .PastConcertBlockSix img {
    width: 120px;
    height: auto;
    max-width: 120px;
    flex-shrink: 0;
  }

  .PastConcertBlock h3,
  .PastConcertBlockSix h3 {
    padding-left: 0;
    width: 100%;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
    flex: 1;
  }

  .PastConcertBlockSix {
    gap: 20px;
  }
}
</style>