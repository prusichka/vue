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
          <div class="card-footer">
            <button type="submit" class="btn btn-info">Sign in</button>
            <button type="submit" class="btn btn-default float-right">
              Cancel
            </button>
          </div>
          <!-- /.card-footer -->
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contacts {
  margin-left: 205px;
  overflow-x: hidden;
}

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
</style>
