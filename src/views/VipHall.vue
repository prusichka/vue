<template>
  <div class="vip-hall">
    <div class="vip=hall-wrap">
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
      <div class="card card-primary">
        <form action="#" id="quickForm">
          <div class="card-body">
            <div class="form-group">
              <label for="exampleNameStock">Название</label>
              <input
                type="text"
                name="nameStock"
                class="form-control"
                id="exampleNameStock"
                placeholder="VIP - зал"
              />
            </div>
            <div class="form-group">
              <label for="exampleNameDescription">Описание</label>
              <input
                type="text"
                name="nameDescription"
                class="form-control"
                id="exampleNameDescription"
                placeholder="Enter description"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputFile">Главная картинка</label>
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
            <div class="form-group">
              <label for="exampleInputFileGalleryImage">Галерея картинок</label>
              <div class="input-group">
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="exampleInputFileGalleryImage"
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
            <div class="form-group">
              <label for="exampleVideoLink">Ссылка на видео</label>
              <input
                type="text"
                name="nameStock"
                class="form-control"
                id="exampleVideoLink"
                placeholder="Ссылка на видео в YouTube"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="card card-info">
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

<style scoped>
.vip-hall-wrap {
  width: 99%;
  display: flex;
  flex-direction: column;
}
.lenguage {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 5px;
}
#exampleNameDescription,
#inputNameDescription {
  height: 100px;
}
.card-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-leng {
  width: 100px;
  padding: 10px;
  margin: 0 5px;
  border: 1px solid rgb(73, 32, 255);
}
</style>
