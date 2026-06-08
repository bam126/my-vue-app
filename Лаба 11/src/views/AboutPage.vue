<template>
  <div>
    <h2>О нас</h2>
    <p>Это простой сайт, созданный на Vue 3 с роутингом.</p>
    
    <h3>Технологии:</h3>
    <ul>
      <li>Vue 3</li>
      <li>Vue Router</li>
      <li>Options API</li>
    </ul>

    <h3>Информация:</h3>
    <p>Версия: 1.0</p>
    <p>Год создания: 2026</p>
    
    <button @click="showMessage">Нажми меня</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    showMessage() {
      this.message = 'Привет! Спасибо что нажали кнопку :)'
      setTimeout(() => {
        this.message = ''
      }, 3000)
    }
  }
}
</script>

<style scoped>
button {
  padding: 8px 16px;
  cursor: pointer;
  margin: 10px 0;
}
</style>