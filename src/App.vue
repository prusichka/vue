<template>
  <div id="nav">
    <AdminHeader></AdminHeader>
    <AdminMain></AdminMain>
  </div>
</template>

<script>
import AdminHeader from "./components/AdminHeader.vue";
import AdminMain from "./components/AdminMain.vue";
export default {
  components: {
    AdminHeader,
    AdminMain,
  },
};
</script>

<style>
@import "./assets/css/adminlte.css";
strong {
  color: #6c757d;
}
</style>
