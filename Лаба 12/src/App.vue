<template>
  <div>
    <header>
      <h1>Лабораторная работа №12</h1>
      <nav>
        <router-link to="/">Главная</router-link> |
        <router-link to="/cats">Коты</router-link> |
        <router-link to="/form">Форма</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>


  </div>
</template>

<script>
export default {}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}
header {
  background: #42b983;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  color: white;
}
nav a {
  color: white;
  margin-right: 15px;
}
footer {
  margin-top: 50px;
  padding: 20px;
  background: #eee;
  text-align: center;
  border-radius: 10px;
}
</style>