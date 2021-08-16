<template>
  <div class="card-film">
    <div class="card-wrap">
      <div class="lenguage">
        <button class="btn-info">Украинский</button>
        <button class="btn-info">Русский</button>
      </div>
      <form action="#" class="form-one">
        <div class="card-name">
          <label for="name">Название фильма</label>
          <input type="text" name="name" id="nameCard" />
        </div>
        <div class="card-description">
          <label for="description">Описание</label>
          <input type="text" name="description" id="descriptionCard" />
        </div>
      </form>
      <div class="main-image-content">
        <div class="main-image">
          <h2>Главная картинка</h2>
          <img src="../assets/logo.png" alt="" class="main-img" />
          <button class="btn-danger">Загрузить</button>
          <button class="btn-danger">Удалить</button>
        </div>
      </div>
      <div class="gallery">
        <div class="title card-title">
          <h1>Галерея картинок</h1>
        </div>
        <div class="gallery-content">
          <div class="size">Размер : 1000 x 190</div>
          <div class="list-image">
            <div class="add-gallery-image">
              <div class="new-slide">
                <button class="btn-danger del" @click="deleteSecondSliders">
                  <i class="fas fa-times"></i>
                </button>
                <img src="../assets/logo.png" alt="" />
                <button class="btn-success">Добавить</button>
              </div>
              <div class="new-slide">
                <button class="btn-danger del" @click="deleteSecondSliders">
                  <i class="fas fa-times"></i>
                </button>
                <img src="../assets/logo.png" alt="" />
                <button class="btn-success">Добавить</button>
              </div>
              <div class="new-slide">
                <button class="btn-danger del" @click="deleteSecondSliders">
                  <i class="fas fa-times"></i>
                </button>
                <img src="../assets/logo.png" alt="" />
                <button class="btn-success">Добавить</button>
              </div>
              <div class="new-slide">
                <button class="btn-danger del" @click="deleteSecondSliders">
                  <i class="fas fa-times"></i>
                </button>
                <img src="../assets/logo.png" alt="" />
                <button class="btn-success">Добавить</button>
              </div>
              <div class="new-slide">
                <button class="btn-danger del" @click="deleteSecondSliders">
                  <i class="fas fa-times"></i>
                </button>
                <img src="../assets/logo.png" alt="" />
                <button class="btn-success">Добавить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form action="#" class="form-two">
        <div class="card-name">
          <label for="urlYouTube">Ссылка на видео</label>
          <input
            type="url"
            name="urlYouTube"
            id="nameCard"
            placeholder="Ссылка на YouTube"
          />
        </div>
        <div class="card-checkbox">
          <h1 class="card-checkbox-title">Тип кино</h1>
          <h2>3D<input type="checkbox" name="3d" id="" /></h2>
          <h2>2D<input type="checkbox" name="2d" id="" /></h2>
          <h2>IMAX<input type="checkbox" name="imax" id="" /></h2>
        </div>
      </form>
      <div class="seo">
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">SEO - блок</h3>
          </div>
          <form action="#">
            <div class="card-body">
              <div class="form-group">
                <label for="exampleInputEmail1">URL :</label>
                <input
                  type="url"
                  class="form-control"
                  id="exampleInputURL"
                  placeholder="Enter URL"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Title :</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputTitle"
                  placeholder="Enter Title"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Keywords :</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputKeywords"
                  placeholder="Enter Keywords"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Description :</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputDesription"
                  placeholder="Enter Description"
                />
              </div>
            </div>
            <div class="card-footer">
              <button
                type="button"
                class="btn btn-success"
                @click="$router.push({ name: 'Film' })"
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
