<template>
  <div class="contacts">
    <div class="contacts-wrap">
      <div class="card card-info">
        <div class="card-header">
          <h3 class="card-title">Контакты кинотеатра</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form class="form-horizontal">
          <div class="card-body">
            <div class="form-group row">
              <label for="inputNameCinema2" class="col-sm-2 col-form-label"
                >Название кинотеатра</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputNameCinema2"
                  placeholder="Название кинотеатра"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputAdress" class="col-sm-2 col-form-label"
                >Адрес</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputAdress"
                  placeholder="Кинотеатр 'Золотой Дюк' Одесса,
                   проспект Академика Глушко"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputCoordForCard" class="col-sm-2 col-form-label"
                >Координаты для карты</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputCoordForCard"
                  placeholder="координаты для карты"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputFile">ЛОГО</label>
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
                  <button type="button" class="btn btn-block btn-danger btn-sm">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- /.card-body -->
        </form>
      </div>
      <div class="new-cinema" v-for="item in cinema" :key="item">
        <div class="card card-info">
          <div class="card-header">
            <h3 class="card-title">Контакты кинотеатра</h3>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form class="form-horizontal">
            <div class="card-body">
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
              <div class="form-group row">
                <label for="inputNameCinema2" class="col-sm-2 col-form-label"
                  >Название кинотеатра</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="inputNameCinema2"
                    placeholder="Название кинотеатра"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputAdress" class="col-sm-2 col-form-label"
                  >Адрес</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAdress"
                    placeholder="Кинотеатр 'Золотой Дюк' Одесса,
                   проспект Академика Глушко"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputCoordForCard" class="col-sm-2 col-form-label"
                  >Координаты для карты</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="inputCoordForCard"
                    placeholder="координаты для карты"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputFile">ЛОГО</label>
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
                    <button
                      type="button"
                      class="btn btn-block btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              {{ item }}
            </div>
            <!-- /.card-body -->
          </form>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-block bg-gradient-info btn-lg"
        @click="addCinema"
      >
        Добавить кинотеатр
      </button>
      <div class="card card-info seo">
        <div class="card-header">
          <h3 class="card-title">Seo - блок</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form class="form-horizontal">
          <div class="card-body">
            <div class="form-group row">
              <label for="inputURL" class="col-sm-2 col-form-label">URL</label>
              <div class="col-sm-10">
                <input
                  type="url"
                  class="form-control"
                  id="inputURL"
                  placeholder="URL"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputTitle" class="col-sm-2 col-form-label"
                >Title</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputTitle"
                  placeholder="Title"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputKeywords" class="col-sm-2 col-form-label"
                >Keywords</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputKeywords"
                  placeholder="word"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputNameDescription" class="col-sm-2 col-form-label"
                >Description</label
              >
              <input
                type="text"
                class="form-control"
                id="inputNameDescription"
                placeholder="Enter description"
              />
            </div>
          </div>
          <!-- /.card-body -->
          <div class="card-footer">
            <button type="submit" class="btn btn-info">Сохранить</button>
          </div>
          <!-- /.card-footer -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cinema: [],
  }),
  methods: {
    addCinema() {
      this.cinema.push("");
      console.log("+1");
    },
  },
};
</script>

<style scoped>
.contacts-wrap {
  width: 99%;
  display: flex;
  flex-direction: column;
}
#inputAdress {
  height: 150px;
}
#inputAdress::placeholder {
  display: flex;
  flex-direction: column;
}
.seo {
  margin: 15px 0;
}
</style>
