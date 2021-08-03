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
.cinema {
  display: flex;
  justify-content: center;
}
.cinema-wrap {
  padding-left: 205px;
  width: 99%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cinema-list {
  display: flex;
  width: 100%;
  justify-content: space-around;
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  padding: 10px 0;
}

.cinema-element {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  width: 100%;
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3498db;
  border-bottom: 0 solid rgba(0, 0, 0, 0.125);
}
.btn-success {
  color: #fff;
  background-color: #00bc8c;
  border-color: #00bc8c;
  box-shadow: none;
  margin: 5px;
  padding: 5px 10px;
  border-radius: 10px;
}

.btn-success:hover {
  color: #fff;
  background-color: #009670;
  border-color: #008966;
}

.btn-success:focus,
.btn-success.focus {
  color: #fff;
  background-color: #009670;
  border-color: #008966;
  box-shadow: 0 0 0 0 rgba(38, 198, 157, 0.5);
}

.btn-success.disabled,
.btn-success:disabled {
  color: #fff;
  background-color: #00bc8c;
  border-color: #00bc8c;
}

.btn-success:not(:disabled):not(.disabled):active,
.btn-success:not(:disabled):not(.disabled).active,
.show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #008966;
  border-color: #007c5d;
}

.btn-success:not(:disabled):not(.disabled):active:focus,
.btn-success:not(:disabled):not(.disabled).active:focus,
.show > .btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(38, 198, 157, 0.5);
}
</style>
