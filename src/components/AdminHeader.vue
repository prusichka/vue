<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"
          ><i class="fas fa-bars"></i
        ></a>
      </li>
      <li
        class="nav-item d-none d-sm-inline-block"
        @click="$router.push({ name: 'Statistic' })"
      >
        <p class="nav-link">Home</p>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Contact</a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Navbar Search -->
      <li class="nav-item">
        <a class="nav-link" data-widget="navbar-search" href="#" role="button">
          <i class="fas fa-search" style="font-size: 34px"></i>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-widget="control-sidebar"
          data-slide="true"
          href="#"
          role="button"
        >
          <i class="fas fa-power-off" style="font-size: 34px"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
p{
  cursor: pointer;
}
</style>
