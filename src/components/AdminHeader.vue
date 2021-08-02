<template>
  <div class="admin-header">
    <div class="main-header">
      <header>
        <div class="header-left">
          <img src="../assets/logo.png" alt="" class="header-png" />
          <p>Мой кабинет</p>
        </div>
        <div class="header-right">
          <img src="../assets/logo.png" alt="" class="header-png" />
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-header {
  margin-left: 205px;
  background-color: #fff;
  color: #1f2d3d;
  border-bottom: 1px solid #dee2e6;
  z-index: 1034;
  -webkit-flex-flow: row nowrap;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  padding: 0.5rem 0.5rem;
  position: relative;
}
.header-png {
  width: 50px;
  height: 50px;
  margin: 10px;
}
header {
  display: flex;
  justify-content: space-between;
}
.header-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.header-left p {
  font-weight: bold;
}
</style>
