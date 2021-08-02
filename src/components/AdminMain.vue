<template>
  <div class="admin-main">
    <div class="main-sidebar">
      <div class="sideBar">
        <img src="../assets/logo.png" alt="" class="logo-img" />
        <nav class="navigation">
          <ul>
            <li class="nav-item">
              <button @click="$router.push({ name: 'Statistic' })">
                Статистика
              </button>
            </li>
            <li class="nav-item">
              <button @click="$router.push({ name: 'Banners/Sliders' })">
                Баннера/Слайдеры
              </button>
            </li>
            <li class="nav-item"><button>Фильмы</button></li>
            <li class="nav-item"><button>Кинотеатры</button></li>
            <li class="nav-item"><button>Новости</button></li>
            <li class="nav-item"><button>Акции</button></li>
            <li class="nav-item"><button>Страницы</button></li>
            <li class="nav-item"><button>Пользователи</button></li>
            <li class="nav-item"><button>Рассылка</button></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-sidebar {
  height: inherit;
  min-height: 100%;
  position: absolute;
  top: 0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22) !important;
  background-color: #343a40;
  overflow-y: hidden;
  z-index: 1038;
  width: 200px;
}
.sideBar {
  overflow-y: auto;
  height: calc(100% - (3.5rem + 1px));
  overflow-x: none;
  overflow-y: initial;
  padding-bottom: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0;
}
.navigation {
  margin-top: 0.5rem !important;
  position: relative;
  flex-direction: column !important;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav-item {
  display: list-item;
  text-align: -webkit-match-parent;
  margin-bottom: 0;
}
.nav-item button {
  display: inline;
  margin: 0;
  white-space: normal;
  color: #c2c7d0;
  background-color: #343a40;
  width: 100%;
  border-color: #343a40;
  text-align: left;
  padding: 10px 0;
  border-radius: 10px;
}
.nav-item button:hover {
  border-color: #ccc;
  padding-left: 20px;
}
.logo-img {
  width: 100px;
  height: 100px;
  margin: 30px 40px;
}
</style>
