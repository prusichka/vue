<template>
  <div class="cinema">
    <div class="cinema-wrap">
      <div class="title">
        <h1>Список кинотеатров</h1>
      </div>
      <div class="cinema-list">
        <div class="cinema-element">
          <img src="../assets/logo.png" alt="" />
          <h1>Уточкино</h1>
        </div>
        <div class="cinema-element">
          <img src="../assets/logo.png" alt="" />
          <h1>Москва</h1>
        </div>
        <div class="cinema-element">
          <img src="../assets/logo.png" alt="" />
          <h1>Звездный</h1>
        </div>
        <div class="cinema-element">
          <i class="fas fa-plus" style="font-size: 64px; color: green"></i>
          <button
            class="btn-success"
            @click="$router.push({ name: 'Cinema Card' })"
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
