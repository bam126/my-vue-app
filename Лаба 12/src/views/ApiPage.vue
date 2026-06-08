<template>
  <div>
    <h2>🐱 Факты о котах</h2>
    
    <button @click="store.getFact()" :disabled="store.loading">
      {{ store.loading ? 'Загрузка...' : 'Получить факт' }}
    </button>
    
    <div v-if="store.fact" class="fact">
      {{ store.fact }}
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '../store/store'

const store = useMainStore()
</script>

<style>
.fact {
  margin-top: 20px;
  padding: 15px;
  background: #f0f0f0;
  border-radius: 10px;
}
button {
  padding: 10px 20px;
  cursor: pointer;
}
</style>