<template>
  <div class="banners-sliders">
    <div class="wrapper">
      <div class="card card-info">
        <div class="card-header">
          <h3 class="card-title">На главной вверх</h3>
        </div>
        <div class="head">
          <h3 class="card-title">Размер : 1000 x 190</h3>
          <div
            class="
              custom-control
              custom-switch
              custom-switch-off-danger
              custom-switch-on-success
            "
          >
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch3"
            />
            <label class="custom-control-label" for="customSwitch3"></label>
          </div>
        </div>
        <div class="main-content">
          <div class="new-img" v-for="image in images" :key="image">
            <div class="card card-info">
              <form class="form-horizontal">
                <div class="card-body">
                  <div class="form-group row download">
                    <div class="input-group">
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="exampleInputFile"
                        />
                        <label class="custom-file-label" for="exampleInputFile"
                          >Choose file</label
                        >
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text">Upload</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputURL3" class="col-sm-2 col-form-label"
                      >URL</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="url"
                        class="form-control"
                        id="inputURL3"
                        placeholder="URL"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputText3" class="col-sm-2 col-form-label"
                      >Текст</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        id="inputText3"
                        placeholder="Текст"
                      />
                    </div>
                  </div>
                </div>
                <!-- /.card-body -->
                <!-- /.card-footer -->
              </form>
            </div>
            {{ image }}
          </div>
          <button
            type="button"
            class="btn btn-block btn-outline-success add-img"
            @click="addImage"
          >
            Добавить фото
          </button>
        </div>
        <div class="footer">
          <div class="form-group speed">
            <label>Скорость вращения</label>
            <select class="custom-select second">
              <option>1с</option>
              <option>2с</option>
              <option>3с</option>
              <option>4с</option>
              <option>5с</option>
            </select>
            <button type="button" class="btn bg-gradient-success">
              Добавить
            </button>
          </div>
        </div>
      </div>
      <div class="card card-info">
        <div class="card-header">
          <h3 class="card-title">Сквозной банер на заднем фоне</h3>
        </div>
        <div class="head">
          <h3 class="card-title">Размер : 2000 x 3000</h3>
        </div>
        <div class="main-content middle">
          <div class="radio">
            <div class="custom-control custom-radio">
              <input
                class="custom-control-input"
                type="radio"
                id="customRadio1"
                name="customRadio"
              />
              <label for="customRadio1" class="custom-control-label"
                >фото на фоне</label
              >
            </div>
            <div class="custom-control custom-radio">
              <input
                class="custom-control-input"
                type="radio"
                id="customRadio2"
                name="customRadio"
              />
              <label for="customRadio2" class="custom-control-label"
                >просто фон</label
              >
            </div>
          </div>
          <div class="form-group download">
            <div class="input-group">
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="exampleInputFile"
                />
                <label class="custom-file-label" for="exampleInputFile"
                  >Choose file</label
                >
              </div>
              <div class="input-group-append">
                <span class="input-group-text">Upload</span>
              </div>
            </div>
          </div>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
      </div>
      <div class="card card-info">
        <div class="card-header">
          <h3 class="card-title">На главной вверх</h3>
        </div>
        <div class="head">
          <h3 class="card-title">Размер : 1000 x 190</h3>
          <div
            class="
              custom-control
              custom-switch
              custom-switch-off-danger
              custom-switch-on-success
            "
          >
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch3"
            />
            <label class="custom-control-label" for="customSwitch3"></label>
          </div>
        </div>
        <div class="main-content">
          <div class="new-img" v-for="image in images2" :key="image">
            <div class="card card-info">
              <form class="form-horizontal">
                <div class="card-body">
                  <div class="form-group row download">
                    <div class="input-group">
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="exampleInputFile"
                        />
                        <label class="custom-file-label" for="exampleInputFile"
                          >Choose file</label
                        >
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text">Upload</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputURL3" class="col-sm-2 col-form-label"
                      >URL</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="url"
                        class="form-control"
                        id="inputURL3"
                        placeholder="URL"
                      />
                    </div>
                  </div>
                </div>
                <!-- /.card-body -->
                <!-- /.card-footer -->
              </form>
            </div>
            {{ image }}
          </div>
          <button
            type="button"
            class="btn btn-block btn-outline-success add-img"
            @click="addImage2"
          >
            Добавить фото
          </button>
        </div>
        <div class="footer">
          <div class="form-group speed">
            <label>Скорость вращения</label>
            <select class="custom-select second">
              <option>1с</option>
              <option>2с</option>
              <option>3с</option>
              <option>4с</option>
              <option>5с</option>
            </select>
            <button type="button" class="btn bg-gradient-success">
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    images: [],
    images2: [],
  }),
  methods: {
    addImage() {
      this.images.push("");
    },
    addImage2() {
      this.images2.push("");
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding: 5px;
}
.head {
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
}
.add-img {
  width: max-content;
  margin: 10px auto;
}
.main-content {
  display: flex;
  align-items: center;
}
.speed {
  display: flex;
  align-items: center;
  padding: 10px;
}
.second {
  margin: 0 20px;
}
.new-img {
  width: 350px;
  padding: 10px;
}
.form-group,
.row,
label {
  padding: 0;
}
.radio {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.radio div {
  margin: 5px 20px;
}
.download {
  display: flex;
  align-items: center;
  margin: 0 auto;
}
.middle {
  display: flex;
  align-items: center;
}
</style>
