<template>
  <div class="container">
    <h1>La Mayzou</h1>
    <a href="tel:+33604476862">Reserver une table</a>
  </div>
</template>

<style lang="scss">
.container {
  background: url(~/assets/mayzou_bg_1.jpeg);
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
a {
  padding: 10px 20px 10px;
  border: 2px solid #fff;
  margin-top: 3em;
  color: #fff;
  background-color: transparent;
  font-size: 1.2em;
  letter-spacing: 2px;
  width: auto;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: url('assets/restaurant.svg') 24 12, auto;
}
</style>
