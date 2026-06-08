<template>
  <div>
    <header>
      <h1>Мой сайт</h1>
      <nav>
        <router-link to="/">Главная</router-link> |
        <router-link to="/about">О нас</router-link> |
        <router-link to="/contacts">Контакты</router-link> |
        <router-link to="/portfolio">Портфолио</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  padding: 20px;
  font-family: Arial, sans-serif;
}

header {
  background: #eee;
  padding: 20px;
  margin-bottom: 20px;
}

nav {
  margin-top: 10px;
}

nav a {
  margin: 0 5px;
}

footer {
  margin-top: 50px;
  padding: 20px;
  background: #eee;
  text-align: center;
}
</style>