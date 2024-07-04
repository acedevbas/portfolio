<template>
  <v-container>
    <v-divider class="my-4"></v-divider>

    <div class="table-wrapper">
      <h2>Акции</h2>
      <v-data-table
        :headers="stockHeaders"
        :items="portfolio.stocks"
        :items-per-page="5"
        class="elevation-1"
        hide-default-footer
      >
        <!-- Именованный слот для столбца "name" -->
        <template v-slot:[`item.name`]="{ item }">
          <v-avatar size="40" class="mr-2">
            <img :src="item.image_url" alt="logo" class="logo">
          </v-avatar>
          <div class="d-inline-block">
            <div style="font-weight: bold">{{ item.name }}</div>
            <div class="text-subtitle-2">{{ item.ticker }}</div>
          </div>
        </template>
        <!-- Именованный слот для столбца "price" -->
        <template v-slot:[`item.price`]="{ item }">
          {{ item.price }} ₽
        </template>
        <!-- Именованный слот для столбца "cost" -->
        <template v-slot:[`item.cost`]="{ item }">
          {{ item.cost }} ₽
        </template>
        <!-- Именованный слот для столбца "change" -->
        <template v-slot:[`item.change`]="{ item }">
          <span :class="{'text-success': item.change >= 0, 'text-error': item.change < 0}">
            {{ item.change }} ₽
          </span>
        </template>
      </v-data-table>
    </div>

    <v-divider class="my-4"></v-divider>

    <div class="table-wrapper">
      <h2>Валюта</h2>
      <v-data-table
        :headers="currencyHeaders"
        :items="portfolio.currencies"
        :items-per-page="5"
        class="elevation-1"
        hide-default-footer
      >
        <!-- Именованный слот для столбца "name" -->
        <template v-slot:[`item.name`]="{ item }">
          <v-avatar size="40" class="mr-2">
            <img :src="item.image_url" alt="logo" class="logo">
          </v-avatar>
          <div class="d-inline-block">
            <div style="font-weight: bold">{{ item.name }}</div>
            <div class="text-subtitle-2">{{ item.ticker }}</div>
          </div>
        </template>
        <!-- Именованный слот для столбца "price" -->
        <template v-slot:[`item.price`]="{ item }">
          {{ item.price }}
        </template>
        <!-- Именованный слот для столбца "cost" -->
        <template v-slot:[`item.cost`]="{ item }">
          {{ item.cost }} ₽
        </template>
        <!-- Именованный слот для столбца "change" -->
        <template v-slot:[`item.change`]="{ item }">
          <span :class="{'text-success': item.change >= 0, 'text-error': item.change < 0}">
            {{ item.change }} ₽
          </span>
        </template>
      </v-data-table>
    </div>

    <!-- Отладка данных -->
    <pre>{{ portfolio }}</pre>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PortfolioComponent',
  data() {
    return {
      portfolio: {
        stocks: [],
        currencies: []
      },
      stockHeaders: [
        { text: 'Название', align: 'start', value: 'name' },
        { text: 'Цена', value: 'price' },
        { text: 'Стоимость', value: 'cost' },
        { text: 'За все время', value: 'change' }
      ],
      currencyHeaders: [
        { text: 'Название', align: 'start', value: 'name' },
        { text: 'Цена', value: 'price' },
        { text: 'Стоимость', value: 'cost' },
        { text: 'За все время', value: 'change' }
      ]
    };
  },
  created() {
    this.fetchPortfolio();
  },
  methods: {
    async fetchPortfolio() {
      try {
        const response = await axios.get('/api/portfolio');
        this.portfolio = response.data;
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      }
    }
  }
};
</script>

<style scoped>
.text-success {
  color: #4CAF50 !important;
}

.text-error {
  color: #E53935 !important;
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
