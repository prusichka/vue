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
            <button class="btn-lg del" @click="deleteFirstSliders">
              <i class="fas fa-times"></i>
            </button>
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
        <div class="add-slider-lvl3">
          <div class="add-slider-lvl3-content">
            <h2>Скорость вращения</h2>
            <select name="speed" id="">
              <option value="1">2c</option>
              <option value="2">3c</option>
              <option value="3">4c</option>
            </select>
          </div>
          <button class="btn-lg btn-save">Сохранить</button>
        </div>
      </div>
    </div>
    <div class="sliders-top">
      <h1>Сквозной баннер на заднем фоне</h1>

      <div class="add-banner">
        <div class="title">
          <h2>Размер : 2000 x 3000</h2>
        </div>
        <div class="add-banner-content">
          <div class="radio">
            <div class="radio-top">
              <label for="photoRadio">Фото на фоне</label>
              <input type="radio" name="photoRadio" id="1" checked />
            </div>
            <div class="radio-bottom">
              <label for="photoRadio">Просто фон</label>
              <input type="radio" name="photoRadio" id="1" />
            </div>
          </div>
          <img src="../assets/logo.png" alt="" />
          <button class="btn-lg">Добавить</button>
          <button class="btn-lg">Удалить</button>
        </div>
      </div>
    </div>
    <div class="sliders-top">
      <h1>На главной Новости Акции внизу</h1>
      <div class="add-sliders">
        <div class="add-sliders-lvl1">
          <h2>Размер : 1000 x 190</h2>
          <input type="checkbox" name="view" id="checkBox-view-sliders-top" />
        </div>
        <div class="add-slider-lvl2">
          <button class="btn-lg" @click="addSecondSliders">
            Добавить фото
          </button>
          <div
            class="add-slider-lvl2-content"
            v-for="slide in secondSliders"
            :key="slide"
          >
            <button class="btn-lg del" @click="deleteSecondSliders">
              <i class="fas fa-times"></i>
            </button>
            <div class="new-slide">
              <span class="close"></span>
              <img src="../assets/logo.png" alt="" />
              <button class="add-new-slide btn-lg">Добавить</button>
              <form action="#" class="form-add-slide">
                <div class="add-slide-url url-bottom">
                  <label for="url"><h3>URL :</h3></label>
                  <input type="url" name="url" id="input-url" />
                </div>
              </form>
              {{ slide }}
            </div>
          </div>
        </div>
        <div class="add-slider-lvl3">
          <div class="add-slider-lvl3-content">
            <h2>Скорость вращения</h2>
            <select name="speed" id="">
              <option value="1">2c</option>
              <option value="2">3c</option>
              <option value="3">4c</option>
            </select>
          </div>
          <button class="btn-lg btn-save">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sliders: [],
    secondSliders: [],
  }),
  methods: {
    addSliders() {
      if (this.sliders.length < 5) {
        this.sliders.push("");
      }
    },
    addSecondSliders() {
      if (this.secondSliders.length < 5) {
        this.secondSliders.push("");
      }
    },
    deleteFirstSliders() {
      this.sliders.shift();
      console.log(this.sliders);
    },
    deleteSecondSliders() {
      this.secondSliders.shift();
      console.log(this.secondSliders);
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
  margin: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
}
.add-sliders {
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
  justify-content: flex-end;
  width: 100%;
  margin: 5px 2px;
}
.add-slide-text {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 5px 2px;
}
form input {
  max-width: 140px;
  margin: 0 10px;
}
.add-slider-lvl3 {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
.add-slider-lvl3-content {
  display: flex;
  width: max-content;
  align-items: center;
}
.add-slider-lvl3-content h2 {
  padding: 10px 50px;
}
.btn-save {
  margin: 0 10px;
}
.banners-middle {
  width: 99%;
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
}
.add-banner {
  border: 1px solid #000;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.add-banner h2 {
  padding: 10px;
}
.add-banner-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.title {
  display: flex;
  justify-content: flex-start;
}
.radio {
  padding: 10px;
  width: 150px;
}
.radio-top,
.radio-bottom {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.add-banner-content img {
  width: 100px;
  height: 100px;
}
.url-bottom {
  padding: 20px 0;
  justify-content: center;
}
.del {
  border: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
}
</style>
