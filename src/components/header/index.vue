<template>
  <div class="header-wrapper row m-0">
    <SearchBar />
    <LogoComponent />

    <div class="left-header col-xxl-5 col-xl-6 col-lg-5 col-md-4 col-sm-3 p-0">
      <swiper
        :slidesPerView="1"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="notification-slider"
        direction="vertical"
      >
        <swiper-slide class="h-100">
          <div class="d-flex h-100">
            <img src="@/assets/images/giftools.gif" alt="gif" />
            <h6 class="mb-0 f-w-400">
              <span class="font-primary">Don't Miss Out! </span
              ><span class="f-light">Out new update has been release.</span>
            </h6><i class="icon-arrow-top-right f-light"></i>
          </div>
        </swiper-slide>
        <swiper-slide class="h-100">
          <div class="d-flex h-100">
            <img src="@/assets/images/giftools.gif" alt="gif" />
            <h6 class="mb-0 f-w-400">
              <span class="f-light">Something you love is now on sale! </span>
            </h6
            ><a class="ms-1" href="https://1.envato.market/3GVzd" target="_blank"
              >Buy now !</a
            >
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div
      class="nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto"
    >
      <ul class="nav-menus">
        <li>
          <span class="header-search"
            ><svg @click="search_open()">
              <use href="@/assets/svg/icon-sprite.svg#search"></use>
            </svg>
          </span>
        </li>

        <li class="onhover-dropdown">
          <svg @click="bookmark_open()">
            <use href="@/assets/svg/icon-sprite.svg#star"></use>
          </svg>

          <Bookmark v-bind:activeclass="bookmark" />
        </li>
        <li>
          <ModeComponent />
        </li>
        <Cart />
        <NotificationsComponent />
        <ProfileComponent  />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Bookmark from '../bookmark';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import 'swiper/css';
import NotificationsComponent from './notifications.vue';
import ModeComponent from './mode';
import Cart from './cart';
import ProfileComponent from './profile';
import LogoComponent from './logo.vue';
import SearchBar from './search';

export default {
  name: 'HeaderComponent', // Переименован здесь
  components: {
    Bookmark,
    NotificationsComponent,
    ModeComponent,
    Cart,
    ProfileComponent,
    LogoComponent,
    Swiper,
    SwiperSlide,
    SearchBar,
  },
  data() {
    return {
      bookmark: false,
    };
  },
  computed: {
    ...mapState({
      menuItems: (state) => state.menu.searchData,
      megamenuItems: (state) => state.menu.megamenu,
      searchOpen: (state) => state.menu.searchOpen,
    }),
  },
  methods: {
    search_open() {
      this.$store.state.menu.searchOpen = true;
    },
    bookmark_open() {
      this.bookmark = !this.bookmark;
    },
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>
