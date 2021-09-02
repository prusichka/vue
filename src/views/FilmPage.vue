<template>
  <div class="film">
    <div class="film-wrap">
      <div class="col-12">
        <div class="card card-primary">
          <div class="card-header">
            <h4 class="card-title">Список Фильмов текущих</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div
                class="col-sm-2"
                @click="$router.push({ name: 'Film Card' })"
              >
                <img
                  src="../assets/logo.png"
                  class="img-fluid mb-2"
                  alt="white sample"
                />
                <p>Приключения жывотных</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.film-wrap {
  margin: 10px 0;
}
</style>
