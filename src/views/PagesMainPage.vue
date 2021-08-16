<template>
  <div class="main-page">
    <div class="main-page-wrap">
      <div class="lenguage">
        <div class="form-group">
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
        <button type="button" class="btn btn-block btn-primary btn-xs btn-leng">
          Украинский
        </button>
        <button type="button" class="btn btn-block btn-primary btn-xs btn-leng">
          Русский
        </button>
      </div>
      <div class="card card-primary ">
        <div class="card-header">
          <h3 class="card-title">Главная страница</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form>
          <div class="card-body">
            <div class="form-group">
              <label>Телефон :</label>

              <div class="input-group enter-tel-num">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><i class="fas fa-phone"></i
                  ></span>
                </div>
                <input
                  type="tel"
                  class="form-control"
                  maxlength="12"
                  placeholder="Format : 380123456987"
                />
              </div>
              <div class="input-group enter-tel-num">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><i class="fas fa-phone"></i
                  ></span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  maxlength="12"
                  placeholder="Format : 380123456987"
                />
              </div>
              <!-- /.input group -->
            </div>
            <div class="form-group">
              <label>SEO-текст</label>
              <textarea
                class="form-control"
                rows="3"
                placeholder="Enter ..."
              ></textarea>
            </div>
          </div>
          <!-- /.card-body -->
        </form>
      </div>
      <div class="card card-info" data-v-1d6dc108="">
        <div class="card-header" data-v-1d6dc108="">
          <h3 class="card-title" data-v-1d6dc108="">Seo - блок</h3>
        </div>
        <!-- /.card-header --><!-- form start -->
        <form class="form-horizontal" data-v-1d6dc108="">
          <div class="card-body" data-v-1d6dc108="">
            <div class="form-group row" data-v-1d6dc108="">
              <label
                for="inputURL"
                class="col-sm-2 col-form-label"
                data-v-1d6dc108=""
                >URL</label
              >
              <div class="col-sm-10" data-v-1d6dc108="">
                <input
                  type="url"
                  class="form-control"
                  id="inputURL"
                  placeholder="URL"
                  data-v-1d6dc108=""
                />
              </div>
            </div>
            <div class="form-group row" data-v-1d6dc108="">
              <label
                for="inputTitle"
                class="col-sm-2 col-form-label"
                data-v-1d6dc108=""
                >Title</label
              >
              <div class="col-sm-10" data-v-1d6dc108="">
                <input
                  type="text"
                  class="form-control"
                  id="inputTitle"
                  placeholder="Title"
                  data-v-1d6dc108=""
                />
              </div>
            </div>
            <div class="form-group row" data-v-1d6dc108="">
              <label
                for="inputKeywords"
                class="col-sm-2 col-form-label"
                data-v-1d6dc108=""
                >Keywords</label
              >
              <div class="col-sm-10" data-v-1d6dc108="">
                <input
                  type="text"
                  class="form-control"
                  id="inputKeywords"
                  placeholder="word"
                  data-v-1d6dc108=""
                />
              </div>
            </div>
            <div class="form-group row" data-v-1d6dc108="">
              <label
                for="inputNameDescription"
                class="col-sm-2 col-form-label"
                data-v-1d6dc108=""
                >Description</label
              ><input
                type="text"
                class="form-control"
                id="inputNameDescription"
                placeholder="Enter description"
                data-v-1d6dc108=""
              />
            </div>
          </div>
          <!-- /.card-body -->
          <div class="card-footer" data-v-1d6dc108="">
            <button type="submit" class="btn btn-info" data-v-1d6dc108="">
              Сохранить
            </button>
          </div>
          <!-- /.card-footer -->
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-page-wrap {
  width: 99%;
  display: flex;
  flex-direction: column;
}
.lenguage {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 5px;
}
.btn-leng {
  width: 100px;
  padding: 10px;
  margin: 0 5px;
  border: 1px solid rgb(73, 32, 255);
}
.enter-tel-num {
  margin: 10px 0px;
  width: 300px;
}
.title {
  background-color: #17a2b8;
}
</style>
