<template>
  <div class="mode">
    <svg v-show="mixLayout == 'light-only'" @click="customizeMixLayout('dark-only')">
      <use href="@/assets/svg/icon-sprite.svg#moon"></use>
    </svg>
    <!-- <i class="fa fa-moon-o"></i> -->
    <svg v-show="mixLayout == 'dark-only'" @click="customizeMixLayout('light-only')">
      <use href="@/assets/svg/icon-sprite.svg#moon"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ModeComponent', // Переименован здесь
  data() {
    return {
      mixLayout: 'light-only',
    };
  },
  methods: {
    customizeMixLayout(val) {
      this.mixLayout = val;
      this.$store.dispatch('layout/setLayout', { class: val });
    },
  },
};
</script>
