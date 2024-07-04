<template>
    <div id="app">
      <aside>
        <!-- Здесь располагается боковое меню -->
        <Sidebar /> <!-- Возможно, у вас уже есть компонент бокового меню -->
      </aside>
      <main>
        <header>
          <!-- Можете добавить верхний колонтитул или другие элементы, если нужно -->
        </header>
        <div class="content">
          <router-view /> <!-- Этот элемент будет содержать компоненты страниц -->
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import Sidebar from '@/components/sidebar/YourSidebarComponent.vue'; // Убедитесь, что путь к компоненту Sidebar правильный
  
  export default {
    components: {
      Sidebar,
    },
  };
  </script>
  
  <style scoped>
  /* Вы можете добавить стили для макета здесь */
  #app {
    display: flex;
  }
  aside {
    width: 240px; /* Ширина бокового меню */
    /* Другие стили для бокового меню */
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .content {
    flex: 1;
    padding: 20px; /* Отступы для основного контента */
  }
  </style>
  