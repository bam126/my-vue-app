<template>
  <div>
    <h2>Портфолио</h2>
    <p>Наши проекты</p>

    <div class="projects">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <span class="tag">{{ project.tag }}</span>
      </div>
    </div>

    <div v-if="showMessage" class="message">
      Спасибо за интерес!
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showMessage = ref(false)

const projects = ref([
  { id: 1, name: 'Сайт-визитка', description: 'Простой сайт для компании', tag: 'Веб-разработка' },
  { id: 2, name: 'Интернет-магазин', description: 'Магазин с корзиной товаров', tag: 'E-commerce' },
  { id: 3, name: 'Мобильное приложение', description: 'Приложение для заказа еды', tag: 'Мобильная разработка' },
  { id: 4, name: 'CRM система', description: 'Система для управления клиентами', tag: 'Бизнес' }
])

// Простая функция
const showThanks = () => {
  showMessage.value = true
  setTimeout(() => {
    showMessage.value = false
  }, 2000)
}
</script>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.project-card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  background: white;
  cursor: pointer;
}

.project-card:hover {
  background: #f0f0f0;
  transform: translateY(-3px);
}

.tag {
  display: inline-block;
  background: #eee;
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 12px;
  margin-top: 10px;
}

.message {
  margin-top: 20px;
  padding: 10px;
  background: lightgreen;
  text-align: center;
  border-radius: 5px;
}
</style>