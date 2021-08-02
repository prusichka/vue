<template>
  <div class="banners-sliders">
    <div class="sliders-top">
      <h1>На главной вверх</h1>
      <div class="add-sliders">
        <div class="add-sliders-lvl1">
          <h2>Размер : 1000 x 190</h2>
          <input type="checkbox" name="view" id="checkBox-view-sliders-top" />
        </div>
        <div class="add-slider-lvl2">
          <button class="btn-lg" @click="addSliders">Добавить фото</button>
          <div
            class="add-slider-lvl2-content"
            v-for="slide in sliders"
            :key="slide"
          >
            <div class="new-slide">
              <img src="../assets/logo.png" alt="" />
              <button class="add-new-slide btn-lg">Добавить</button>
              <form action="#" class="form-add-slide">
                <div class="add-slide-url">
                  <label for="url"><h3>URL :</h3></label>
                  <input type="url" name="url" id="input-url" />
                </div>
                <div class="add-slide-text">
                  <label for="text"><h3>Текст :</h3></label>
                  <input type="text" name="text" id="input-text" />
                </div>
              </form>
              {{ slide }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sliders: [],
  }),
  methods: {
    addSliders() {
      if (this.sliders.length < 5) {
        this.sliders.push("");
      }
    },
  },
};
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
.banners-sliders {
  margin-left: 205px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sliders-top h1 {
  background-color: #007bff;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 0;
}
.sliders-top {
  width: 99%;
  margin: 10px 0 0 0;
  display: flex;
  flex-direction: column;
}
.add-sliders {
  height: 400px;
  border: 1px solid #000;
}
.add-sliders-lvl1 {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.add-slider-lvl2 {
  display: flex;
  padding: 10px;
  height: 250px;
  align-items: center;
}
.btn-lg {
  display: block;
  width: 120px;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  font-weight: 400;
  text-align: center;
  color: #6c757d;
  border-color: #007bff;
}
.new-slide {
  width: 200px;
  height: 250px;
  border: 1px solid #17a2b8;
  border-radius: 5px;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
}
.new-slide img {
  width: 100px;
  height: 100px;
  margin: 10px auto;
}
.add-new-slide {
  margin: 0 auto;
  font-size: 16px;
  padding: 5px;
}
.form-add-slide {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
}
.add-slide-url {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 5px 0;
}
.add-slide-text {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 5px 0;
}
form input {
  max-width: 150px;
}
</style>
