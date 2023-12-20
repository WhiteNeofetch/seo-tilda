<script setup lang="ts">
const route = useRoute();
let checkRoute;
if (route.path == "/") {
  checkRoute = route.path.replace("/", "0");
} else {
  checkRoute = route.path.replace("/", "");
}
</script>

<template>
  <Head>
    <Title>{{ titleMeta[checkRoute] }} {{ title }}</Title>
    <Meta name="description" :content="description" />
    <Meta name="title" :content="titleMeta[checkRoute]" />
    <Meta name="ogTitle" :content="titleMeta[checkRoute]" />
    <Meta name="ogDescription" :content="description" />

    <Meta name="ogImage" content="/img/icon.png" />
    <Meta name="twitterCard" content="summary_large_image" />
    <Meta name="charset" content="utf - 8" />
    <Meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <div>
    <div>
      <main class="intro container--intro">
        <div class="intro__carts">
          <div class="intro__cart">
            <h1 class="intro__cart__title">{{ titleMeta[checkRoute] }}</h1>
          </div>
          <div class="intro__text">
            <h2 class="intro__content">{{ description }}</h2>
          </div>
        </div>
      </main>

      <div v-for="(item, i) of titleMeta" :key="i">
        <div class="next">
          <div class="next__inner container--intro">
            <nuxt-link class="next__btn" :to="`/${i}`">{{
              titleMeta[i]
            }}</nuxt-link>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="footer__inner container--intro">
          <h3 class="2022 nft">2023 {{ titleMeta[checkRoute] }}</h3>
          <div class="footer__social"></div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",

  data() {
    return {
      title: " в санкт-петербурге.спб.питер",
      description:
        "Веб-студия spb-site.ru предлагает создание сайтов на тильде в городе Санкт-Петербурге, доступных для обладателей небольших бюджетов. Мы знаем как сделать качественный сайт, с чистым кодом, хорошим отношением поисковых систем, надежной административной системой, красивым дизайном и удобством для посетителей сайта. И все это мы делаем по весьма демократичным ценам. ",
      titleMeta: [
        "тильда",
        "тильда сайт",
        "тильда суинтон",
        "тильда вход",
        "тильда личный",
        "тильда кабинет",
        "тильда личный кабинет",
        "тильда блоки",
        "тильда вход +в личный",
        "тильда вход +в кабинет",
        "тильда вход +в личный кабинет",
        "сделано +на тильде",
        "кукла тильда",
        "кнопка тильда",
        "тильда страница",
        "тильда выкройка",
        "тильда конструктор",
        "тильда зеро",
        "зеро блок тильда",
        "тильда ссылки",
        "тильда бесплатно",
        "тильда конструктор сайтов",
        "тильда знак",
        "тильда фильм",
        "товары тильда",
        "тильда суинтон фильмы",
        "тильда текст",
        "тильда видео",
        "тильда домен",
        "тильда фото",
        "создание тильда",
        "тильда меню",
        "тильда создать сайт",
        "тильда шаблоны",
        "тильда примеры",
        "зайцев тильда",
        "заяц тильда",
        "тильда картинки",
        "почему тильда",
        "тильда создание сайтов",
        "яндекс тильда",
        "тильда метки",
        "настроить тильду",
        "какая тильда",
        "тильда +как подключить",
        "тильда размер",
        "скролл тильда",
        "карточки тильда",
        "тильда крючком",
        "где тильда",
        "tilda",
        "тилда",
        "made +on tilda",
        "тильт +что +это",
        "tilda publishing",
        "тильта",
        "тилда ру",
        "wilda",
        "matilda",
        "tilda конструктор сайтов",
        "tilda сайт",
        "джильда",
        "ешдвфе",
        "tilda ws",
        "tilda ru",
        "tilda +это",
        "tilda software",
        "tilda конструктор",
        "tilda com",
        "tilda +что +это",
        "форма +в тильде",
        "корзина тильда",
        "тильда скачать",
        "+как вставить тильду",
        "тильда курсы",
        "тильда тарифы",
        "тильда +своими руками",
        "тильда телефон",
        "тильда оплата",
        "тильда сайт бесплатно",
        "зайка тильда",
        "+как сделать блок +в тильде",
        "тильда купить",
        "+как сделать сайт +на тильде",
        "политика тильда",
        "тильда загрузить",
        "анимация +в тильде",
        "ютм тильда",
        "кукла тильда выкройка",
        "файл тильда",
        "тильда интернет",
        "тильда цвета",
        "конфиденциальность тильда",
        "тильда цены",
        "политик конфиденциальности тильда",
        "тильда мобильная версия",
        "тильда политика конфиденциальности",
        "тильда отзывы",
        "изображение тильда",
        "игрушки тильда",
        "+как убрать тильду",
        "натуральные выкройки тильда",
        "тильда настройка",
        "тильда дракон",
        "тильды +в натуральную величину",
        "тильда +на клавиатуре",
        "тильда метрика",
        "тильда выкройка +в натуральную величину",
        "zero тильда",
        "тильдой кобэм",
        "тильда херви",
        "тильда кобэм херви",
        "тильда обучение",
        "тильда иконки",
        "стиль тильда",
        "тильда класс",
        "новогодние тильды",
        "тильда скопировать",
        "+как сделать кнопку +в тильде",
        "тильда интеграции",
        "tilda",
        "заявление +на увольнение +по собственному желанию образец",
        "тилда",
        "образец заявления +на увольнение +по собственному желанию",
        "made +on tilda",
        "справка +с места работы образец 2023",
        "отчет +о проделанной работе образец",
        "tilda publishing",
        "заявление +об увольнении +по собственному желанию образец",
        "тилда ру",
        "tilda конструктор сайтов",
        "анкета +при приеме +на работу образец 2023",
        "заявление +по собственному желанию образец 2023",
        "tilda cc ru",
        "tilda конструктор сайтов бесплатно",
        "tilda ru",
        "tilda +это",
        "tilda software",
        "tilda +что +это",
        "тильда онлайн",
        "делаем тильду",
        "магазин +на тильде",
        "+при наведении тильда",
        "тильда описание",
        "тильда войти",
        "заявка тильда",
        "лендинг +на тильде",
        "+из фигмы +в тильду",
        "про тильду",
        "тильда генератор",
        "utm тильда",
        "примеры сайтов +на тильде",
        "экран тильда",
        "+как поставить тильду",
        "тильда мастер",
        "тильда лучшее",
        "перенести +на тильду",
        "схемы тильд",
        "номер тильды",
        "шапка тильда",
        "тильда галерея",
        "+как сделать зеро блок +в тильде",
        "тильда заказы",
        "тильда дизайн",
        "удалить тильда",
        "тильда установить",
        "+как сделать ссылку +в тильде",
        "значок тильда",
        "клавиша тильда",
        "тильда мастер класс",
        "стандартные блоки тильда",
        "заказать тильду",
        "коды +для тильды",
        "ткань тильда",
        "тильда ютм метки",
        "сделать страницу +на тильде",
        "слайдер +в тильде",
        "переходы тильда",
        "тильда 2",
        "тильде без",
        "создать тильду бесплатно",
        "почта +на тильде",
        "тильда список",
        "узбек тильда",
        "тильда символ",
        "кукла тильда +своими руками",
        "система тильда",
        "тильда подключение",
        "тильда новый",
        "tilda",
        "сайт рддм",
        "selfmade интернет",
        "тилда ру",
        "tilda конструктор сайтов",
        "сайт эсф",
        "tilda сайт",
        "ф4 сайт",
        "егкн сайт",
        "tilda cc ru",
        "сайт хвд",
        "https tilda cc ru",
        "tilda конструктор сайтов бесплатно",
        "tilda ru",
        "tilda +это",
        "icq web online",
        "tilda com",
        "made +on tilda сайты",
        "модификации тильда",
        "интернет магазин +на тильде",
        "тильда генератор меток",
        "тильда хостинг",
        "окна тильда",
        "utm метки тильда",
        "проекты тильда",
        "тильда сс",
        "гугле тильда",
        "тильда портфолио",
        "сколько стоит тильда",
        "тильда редактировать",
        "дракон тильда выкройка",
        "заяц тильда крючком",
        "открой тильду",
        "тильда +на мобильном",
        "зайка тильда крючком",
        "тильда крючком схема",
        "тильда шаблоны сайтов",
        "аккаунт тильда",
        "тильда джин",
        "тильда книги",
        "включи тильду",
        "вязаная тильда",
        "тильда ангел",
        "тильда главная",
        "тильда регистрация",
        "тильды ватсап",
        "фильм про тильду",
        "обложки тильда",
        "тильда двумя",
        "+как сделать текст +в тильде",
        "одежда +для тильды",
        "тильда стоимость",
        "тильда блок меню",
        "заказать сайт +на тильде",
        "промокод тильда",
        "фильм тильда джин",
        "перенести сайт +на тильду",
        "разработка +на тильде",
        "тильда 2023",
        "обратная тильда",
        "+как сшить тильду",
        "тильда скачать бесплатно",
        "логотип тильда",
        "снеговик тильда",
        "выкройка зайцев тильда",
        "языка тильда",
        "тильда сео",
        "css тильда",
        "tilda",
        "тилда",
        "made +on tilda",
        "tilda publishing",
        "tilda конструктор сайтов",
        "tilda ws",
        "tilda cc ru",
        "https tilda cc ru",
        "tilda конструктор сайтов бесплатно",
        "tilda ru",
        "tilda +это",
        "newnik2024 tilda ws our",
        "tilda software",
        "tilda конструктор",
        "inftech1504 tilda ws",
        "tilda com",
        "tilda +что +это",
        "https tilda cc",
        "www tilda cc",
        "tilda",
        "tilda ws",
        "tilda cc",
        "uzbek tilda",
        "http tilda",
        "tilda сайт",
        "http tilda ws",
        "https tilda",
        "kino tilda",
        "https tilda ws",
        "ozbek tilda",
        "make tilda",
        "uzb tilda",
        "made +on tilda",
        "tilda конструктор",
        "tilda ru",
        "uzbek tilda kino",
        "tilda личный",
        "tilda 2",
        "tilda кабинет",
        "tilda личный кабинет",
        "tilda конструктор сайтов",
        "tilda сделать",
        "tilda published",
        "tilda publishing",
        "tilda zero",
        "tilda бесплатно",
        "tilda 1",
        "tilda создать",
        "tilda блоки",
        "https tilda cc",
        "tilda скачать",
        "tilda blocks",
        "tilda html",
        "tilda zero block",
        "utm tilda",
        "tilda создание",
        "https tilda ru",
        "o zbek tilda",
        "uz tilda",
        "создать сайт tilda",
        "tilda cc ru",
        "tilda кнопка",
        "tilda skachat",
        "товары tilda",
        "tilda ссылка",
        "tilda сайт бесплатно",
        "tilda отзывы",
        "tilda шаблоны",
        "шрифт tilda",
        "тильда вход",
        "тилда",
        "тильда конструктор сайтов",
        "тильда сайт",
        "тильда кобэм херви",
        "тильда +это",
        "тильда сс",
        "тилда ру",
        "+что +такое тильда",
        "мейд +он тильда",
        "сайт +на тильде",
        "тильда создать сайт",
        "заказать сайт +на тильде",
        "тильда конструктор",
        "тильда войти",
        "тильда вход +в личный",
        "создать сайт +на тильде",
        "тильда",
      ],
    };
  },
  async onMounted() {
    console.log(this.route.path);
  },
};
</script>

<style scoped>
/*Обнуление*/
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}
nav,
footer,
header,
aside {
  display: block;
}
html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
}
input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

body {
  background-color: rgb(255, 255, 255);
  font-family: "Montserrat", sans-serif;
}

.container--intro {
  max-width: 800px;
  margin: 0 auto;
}

.container--header {
  max-width: 460px;
  margin: 0 auto;
}

.header {
  background-color: black;
}

.header__inner {
}

.header__title {
  text-align: center;
  color: #fff;
  padding: 60px 0;
  text-transform: uppercase;
  line-height: 1.5;
}

.header__nav {
  display: flex;
  justify-content: center;
  font-size: 11px;
  text-transform: uppercase;
  padding-bottom: 74px;
}

.header__link {
  color: #fff;
  margin-right: 24px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  transition: border 0.5s;
}

.header__link:last-child {
  margin-right: 0px;
}

.header__link:hover {
  border-bottom: 1px solid rgba(165, 165, 165, 0.605);
}

.intro__cart {
  /* background-image: url(/src/img/blogcard.png); */
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px 5px 0 0;
}

.intro__cart__title {
  font-size: 28px;
  color: black;
  padding: 220px 0 40px 60px;
}

.intro__text {
  border: 1px solid;
  border-radius: 0 0 5px 5px;
}

.intro__content {
  color: rgb(0, 0, 0);
  padding: 36px 60px 44px 60px;
}

.next__inner {
  padding: 50px;
  display: flex;
  justify-content: center;
}

.next__btn {
  padding: 10px 30px;
  border-radius: 5px;
  background-color: rgb(10, 173, 248);
}

.next__btn {
  color: #fff;
}

.footer {
  border-top: 1px solid #000;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vk {
  margin-right: 5px;
}

@media (min-width: 900px) {
  body {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .intro__cart__title {
    font-size: 35px;
    line-height: 1.5;
    padding: 220px 10px 40px 10px;
  }

  .intro__content {
    font-size: 20px;
    line-height: 1.5;
    padding: 36px 10px 44px 10px;
  }
}

@media (max-width: 480px) {
  .intro__cart__title {
    font-size: 30px;
    line-height: 1.5;
    padding: 220px 10px 40px 10px;
  }

  .intro__content {
    font-size: 20px;
    line-height: 1.5;
    padding: 36px 10px 44px 10px;
  }
}

@media (max-width: 390px) {
  .intro__cart__title {
    font-size: 29px;
    line-height: 1.5;
    padding: 220px 10px 40px 10px;
  }

  .intro__content {
    font-size: 20px;
    line-height: 1.5;
    padding: 36px 10px 44px 10px;
  }
}

@media (max-width: 300px) {
  .intro__cart__title {
    font-size: 15px;
    padding: 220px 10px 40px 10px;
  }
}

.next__btn {
  margin: 10px;
}

.next__inner {
  padding: 0px;
}
</style>
