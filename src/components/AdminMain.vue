<template>
  <div class="admin-main">
    <aside class="main-sidebar sidebar-dark-primary elevation-4 blyat">
      <!-- Brand Logo -->
      <a href="index3.html" class="brand-link">
        <img
          src="../assets/logo.png"
          alt="AdminLTE Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: 0.8"
        />
        <span class="brand-text font-weight-light">MyCinema</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="../assets/user.jpg"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <a href="#" class="d-block">Alexander Pierce</a>
          </div>
        </div>

        <!-- SidebarSearch Form -->
        <div class="form-inline">
          <div class="input-group" data-widget="sidebar-search">
            <input
              class="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div class="input-group-append">
              <button class="btn btn-sidebar">
                <i class="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
          <div class="sidebar-search-results">
            <div class="list-group">
              <a href="#" class="list-group-item"
                ><div class="search-title">
                  <strong class="text-light"></strong>N<strong
                    class="text-light"
                  ></strong
                  >o<strong class="text-light"></strong>
                  <strong class="text-light"></strong>e<strong
                    class="text-light"
                  ></strong
                  >l<strong class="text-light"></strong>e<strong
                    class="text-light"
                  ></strong
                  >m<strong class="text-light"></strong>e<strong
                    class="text-light"
                  ></strong
                  >n<strong class="text-light"></strong>t<strong
                    class="text-light"
                  ></strong>
                  <strong class="text-light"></strong>f<strong
                    class="text-light"
                  ></strong
                  >o<strong class="text-light"></strong>u<strong
                    class="text-light"
                  ></strong
                  >n<strong class="text-light"></strong>d<strong
                    class="text-light"
                  ></strong
                  >!<strong class="text-light"></strong>
                </div>
                <div class="search-path"></div
              ></a>
            </div>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li class="nav-item" @click="$router.push({ name: 'Statistic' })">
              <a class="nav-link">
                <i class="nav-icon fas fa-chart-line"></i>
                <p>Статистика</p>
              </a>
            </li>
            <li
              class="nav-item"
              @click="$router.push({ name: 'Banners/Sliders' })"
            >
              <a class="nav-link">
                <i class="nav-icon fas fa-photo-video"></i>
                <p>Баннера/Слайдеры</p>
              </a>
            </li>
            <li class="nav-item" @click="$router.push({ name: 'Film' })">
              <a class="nav-link">
                <i class="nav-icon fas fa-film"></i>
                <p>Фильмы</p>
              </a>
            </li>
            <li class="nav-item" @click="$router.push({ name: 'Cinema' })">
              <a class="nav-link">
                <i class="nav-icon fas fa-building"></i>
                <p>Кинотеатры</p>
              </a>
            </li>
            <li class="nav-item" @click="$router.push({ name: 'News' })">
              <a class="nav-link">
                <i class="nav-icon far fa-newspaper"></i>
                <p>Новости</p>
              </a>
            </li>
            <li class="nav-item" @click="$router.push({ name: 'Stock' })">
              <a class="nav-link">
                <i class="nav-icon fas fa-percent"></i>
                <p>Акции</p>
              </a>
            </li>
            <li class="nav-item" @click="$router.push({ name: 'Pages' })">
              <a class="nav-link">
                <i class="nav-icon far fa-file"></i>
                <p>Страницы</p>
              </a>
            </li>
            <li class="nav-item" @click="$router.push({ name: 'Users' })">
              <a class="nav-link">
                <i class="nav-icon fas fa-users"></i>
                <p>Пользователи</p>
              </a>
            </li>
            <li class="nav-item" @click="$router.push({ name: 'Mailing' })">
              <a class="nav-link">
                <i class="nav-icon fas fa-envelope-open-text"></i>
                <p>Рассылка</p>
              </a>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
