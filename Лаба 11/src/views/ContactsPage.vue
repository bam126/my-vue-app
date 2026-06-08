<template>
  <div>
    <h2>Контакты</h2>
    
    <div>
      <p><strong>Email:</strong> example@site.com</p>
      <p><strong>Телефон:</strong> +7 (999) 123-45-67</p>
      <p><strong>Адрес:</strong> г. Москва, ул. Примерная, д. 1</p>
    </div>

    <div>
      <h3>Напишите нам</h3>
      <form @submit.prevent="submitForm">
        <div>
          <label>Имя:</label><br>
          <input v-model="form.name" required>
        </div>
        
        <div>
          <label>Email:</label><br>
          <input type="email" v-model="form.email" required>
        </div>
        
        <div>
          <label>Сообщение:</label><br>
          <textarea v-model="form.message" rows="4" required></textarea>
        </div>
        
        <button type="submit">Отправить</button>
      </form>
      
      <div v-if="submitted">
        <p>✅ Спасибо, {{ form.name }}! Сообщение отправлено.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactsPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false
    }
  },
  methods: {
    submitForm() {
      console.log('Форма отправлена:', this.form)
      this.submitted = true
      
      // Очищаем форму через 2 секунды
      setTimeout(() => {
        this.submitted = false
        this.form = { name: '', email: '', message: '' }
      }, 2000)
    }
  }
}
</script>

<style scoped>
input, textarea {
  padding: 5px;
  margin: 5px 0;
  width: 250px;
}

button {
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 10px;
}

div {
  margin-bottom: 15px;
}
</style>