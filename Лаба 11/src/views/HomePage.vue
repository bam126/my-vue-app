<template>
  <div>
    <h2>Главная страница</h2>
    <p>Добро пожаловать на мой сайт!</p>
    
    <div>
      <h3>Простой счётчик</h3>
      <p>Счёт: {{ count }}</p>
      <button @click="count++">+1</button>
      <button @click="resetCount">Сброс</button>
    </div>

    <div>
      <h3>Список дел</h3>
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Новая задача">
      <button @click="addTask">Добавить</button>
      
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          {{ task }}
          <button @click="removeTask(index)">❌</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      count: 0,
      newTask: '',
      tasks: ['Изучить Vue', 'Сделать проект', 'Сдать работу']
    }
  },
  methods: {
    resetCount() {
      this.count = 0
    },
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push(this.newTask)
        this.newTask = ''
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    }
  }
}
</script>

<style scoped>
button {
  margin: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

input {
  padding: 5px;
  margin: 5px;
}

ul {
  margin-top: 10px;
}

li {
  margin: 5px 0;
}
</style>