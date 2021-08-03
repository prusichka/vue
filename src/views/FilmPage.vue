<template>
  <div class="film">
    <div class="film-wrap">
      <div class="films-view">
        <div class="title">
          <h1>Список фильмов текущих</h1>
        </div>
        <div class="list-films">
          <div class="top-list">
            <div
              class="list-element"
              @click="$router.push({ name: 'Film Card' })"
            >
              <img src="../assets/logo.png" alt="" />
              <h2>Приключениe животных</h2>
            </div>
            <div
              class="list-element"
              @click="$router.push({ name: 'Film Card' })"
            >
              <img src="../assets/logo.png" alt="" />
              <h2>Приключениe животных</h2>
            </div>
            <div
              class="list-element"
              @click="$router.push({ name: 'Film Card' })"
            >
              <img src="../assets/logo.png" alt="" />
              <h2>Приключениe животных</h2>
            </div>
            <div
              class="list-element"
              @click="$router.push({ name: 'Film Card' })"
            >
              <img src="../assets/logo.png" alt="" />
              <h2>Приключениe животных</h2>
            </div>
          </div>
          <div class="bottom-list">
            <div
              class="list-element"
              @click="$router.push({ name: 'Film Card' })"
            >
              <img src="../assets/logo.png" alt="" />
              <h2>Приключениe животных</h2>
            </div>
            <div
              class="list-element"
              @click="$router.push({ name: 'Film Card' })"
            >
              <img src="../assets/logo.png" alt="" />
              <h2>Приключениe животных</h2>
            </div>
            <div
              class="list-element"
              @click="$router.push({ name: 'Film Card' })"
            >
              <img src="../assets/logo.png" alt="" />
              <h2>Приключениe животных</h2>
            </div>
            <div
              class="list-element"
              @click="$router.push({ name: 'Film Card' })"
            >
              <img src="../assets/logo.png" alt="" />
              <h2>Приключениe животных</h2>
            </div>
          </div>
        </div>
        <div class="title">
          <h1>Список фильмов которые покажут скоро</h1>
        </div>
        <div class="list-films">
          <div class="top-list">
            <div
              class="list-element"
              @click="$router.push({ name: 'Film Card' })"
            >
              <img src="../assets/logo.png" alt="" />
              <h2>Приключениe животных</h2>
            </div>
            <div
              class="list-element"
              @click="$router.push({ name: 'Film Card' })"
            >
              <img src="../assets/logo.png" alt="" />
              <h2>Приключениe животных</h2>
            </div>
            <div
              class="list-element"
              @click="$router.push({ name: 'Film Card' })"
            >
              <img src="../assets/logo.png" alt="" />
              <h2>Приключениe животных</h2>
            </div>
            <div
              class="list-element"
              @click="$router.push({ name: 'Film Card' })"
            >
              <img src="../assets/logo.png" alt="" />
              <h2>Приключениe животных</h2>
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
h2 {
  font-size: 20px;
  font-weight: normal;
}
h1 {
  font-size: 22px;
  font-weight: 500;
}
h3 {
  font-size: 12px;
  font-weight: normal;
}
.film {
  margin-left: 205px;
  display: flex;
  justify-content: center;
}
.film-wrap {
  width: 90%;
}
.films-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #6c757d;
}
.list-films {
  border: 1px solid #000;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.list-element {
  display: flex;
  flex-direction: column;
  margin: 5px 20px;
  padding: 5px;
  border: 1px solid #fff;
}
.list-element:hover {
  border: 1px solid #000;
  cursor: pointer;
}
.top-list,
.bottom-list {
  width: 100%;
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
