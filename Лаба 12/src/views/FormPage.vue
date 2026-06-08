<template>
  <div>
    <h2>📝 Обратная связь</h2>
    
    <div>
      <input v-model="store.formName" placeholder="Ваше имя">
    </div>
    
    <div>
      <input v-model="store.formEmail" placeholder="Ваш email">
    </div>
    
    <div>
      <textarea v-model="store.formMessage" placeholder="Сообщение"></textarea>
    </div>
    
    <button @click="store.sendForm()">Отправить</button>
    
    <div v-if="store.sendResult" class="ok">
      ✅ Отправлено! ID: {{ store.sendResult.id }}
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '../store/store'

const store = useMainStore()
</script>

<style>
input, textarea {
  width: 300px;
  padding: 8px;
  margin: 10px 0;
  display: block;
}
.ok {
  margin-top: 20px;
  padding: 10px;
  background: lightgreen;
}
</style>