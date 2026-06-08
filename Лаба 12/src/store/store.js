import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    // Для API страницы
    fact: '',
    loading: false,
    
    // Для формы
    formName: '',
    formEmail: '',
    formMessage: '',
    sendResult: null
  }),
  
  actions: {
    // GET запрос - факт о котах
    async getFact() {
      this.loading = true
      const res = await fetch('https://catfact.ninja/fact')
      const data = await res.json()
      this.fact = data.fact
      this.loading = false
    },
    
    // POST запрос - отправка формы
    async sendForm() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          name: this.formName,
          email: this.formEmail,
          message: this.formMessage
        }),
        headers: { 'Content-type': 'application/json' }
      })
      this.sendResult = await res.json()
    }
  }
})