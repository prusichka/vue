<template>
  <div class="cinema-card">
    <div class="cinema-wrap">
      <div class="lenguage">
        <button class="btn-info">Украинский</button>
        <button class="btn-info">Русский</button>
      </div>
      <form action="#" class="form-one">
        <div class="card-name">
          <label for="name">Название кинотеатра</label>
          <input type="text" name="nameCinema" id="nameCard" />
        </div>
        <div class="card-description">
          <label for="descriptionCinema">Описание</label>
          <input type="text" name="descriptionCinema" id="descriptionCard" />
        </div>
        <div class="card-description">
          <label for="conditionsCinema">Условия</label>
          <input type="text" name="conditionsCinema" id="conditionsCard" />
        </div>
      </form>
      <div class="logo">
        <div class="main-image">
          <h2>Логотип</h2>
          <img src="../assets/logo.png" alt="" class="main-img" />
          <button class="btn-danger">Загрузить</button>
          <button class="btn-danger">Удалить</button>
        </div>
      </div>
      <div class="top-banner">
        <div class="main-image">
          <h2>Фото верхнего баннера</h2>
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
      <div class="list-halls">
        <div class="list-title">
          <h2 class=".card-title">Список залов</h2>
        </div>
        <div class="table">
          <table>
            <tr>
              <th>Название</th>
              <th>Дата</th>
              <th>Действие</th>
            </tr>
            <tr>
              <td>13 зал</td>
              <td>12.07.2021</td>
              <td>
                <i class="fas fa-edit edit-halls" style="font-size: 30px"></i>
                <i
                  class="fas fa-trash delete-halls"
                  style="font-size: 30px"
                ></i>
              </td>
            </tr>
            <tr>
              <td>11 зал</td>
              <td>12.07.2021</td>
              <td>
                <i class="fas fa-edit edit-halls" style="font-size: 30px"></i>
                <i
                  class="fas fa-trash delete-halls"
                  style="font-size: 30px"
                ></i>
              </td>
            </tr>
            <tr>
              <td>9 зал</td>
              <td>12.07.2021</td>
              <td>
                <i class="fas fa-edit edit-halls" style="font-size: 30px"></i>
                <i
                  class="fas fa-trash delete-halls"
                  style="font-size: 30px"
                ></i>
              </td>
            </tr>
          </table>
          <div class="add-halls">
            <button
              class="btn-success"
              @click="$router.push({ name: 'Halls Card' })"
            >
              Создать зал
            </button>
          </div>
        </div>
      </div>
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
                @click="$router.push({ name: 'Cinema' })"
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
.cinema-wrap {
  width: 99%;
  display: flex;
  flex-direction: column;
}
.btn-info {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
  box-shadow: none;
  margin: 5px;
  padding: 5px 10px;
  border-radius: 10px;
}

.btn-info:hover {
  color: #fff;
  background-color: #138496;
  border-color: #117a8b;
}

.btn-info:focus,
.btn-info.focus {
  color: #fff;
  background-color: #138496;
  border-color: #117a8b;
  box-shadow: 0 0 0 0 rgba(58, 176, 195, 0.5);
}

.btn-info.disabled,
.btn-info:disabled {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}
.btn-info:not(:disabled):not(.disabled):active,
.btn-info:not(:disabled):not(.disabled).active,
.show > .btn-info.dropdown-toggle {
  color: #fff;
  background-color: #117a8b;
  border-color: #10707f;
}

.btn-info:not(:disabled):not(.disabled):active:focus,
.btn-info:not(:disabled):not(.disabled).active:focus,
.show > .btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(58, 176, 195, 0.5);
}
.lenguage {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.form-one {
  padding: 10px 0;
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
}
#nameCard {
  width: 500px;
}
#descriptionCard,
#conditionsCard {
  width: 900px;
  height: 100px;
}
.form-one input {
  margin: 0 20px;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 transparent;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.card-name,
.card-description {
  margin: 20px;
  display: flex;
  align-items: center;
}
.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
  box-shadow: none;
  margin: 5px;
  padding: 5px 10px;
  border-radius: 10px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
}

.btn-danger:focus,
.btn-danger.focus {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
  box-shadow: 0 0 0 0 rgba(225, 83, 97, 0.5);
}

.btn-danger.disabled,
.btn-danger:disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:not(:disabled):not(.disabled):active,
.btn-danger:not(:disabled):not(.disabled).active,
.show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #bd2130;
  border-color: #b21f2d;
}

.btn-danger:not(:disabled):not(.disabled):active:focus,
.btn-danger:not(:disabled):not(.disabled).active:focus,
.show > .btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(225, 83, 97, 0.5);
}
.main-img {
  width: 150px;
  height: 150px;
  margin: 0 50px;
}
.logo,
.top-banner {
  margin: 20px 0;
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
}
.main-image {
  display: flex;
  align-items: center;
  margin: 20px;
  width: 100%;
}
.main-image h2 {
  margin-right: 50px;
}
.gallery {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  justify-content: space-around;
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
}
.gallery-content {
  padding-left: 20px;
  padding-bottom: 20px;
  display: flex;
  width: 100%;
}
.list-image {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.btn-success {
  color: #fff;
  background-color: #00bc8c;
  border-color: #00bc8c;
  box-shadow: none;
  margin: 5px;
  padding: 5px 10px;
  border-radius: 10px;
}

.btn-success:hover {
  color: #fff;
  background-color: #009670;
  border-color: #008966;
}

.btn-success:focus,
.btn-success.focus {
  color: #fff;
  background-color: #009670;
  border-color: #008966;
  box-shadow: 0 0 0 0 rgba(38, 198, 157, 0.5);
}

.btn-success.disabled,
.btn-success:disabled {
  color: #fff;
  background-color: #00bc8c;
  border-color: #00bc8c;
}

.btn-success:not(:disabled):not(.disabled):active,
.btn-success:not(:disabled):not(.disabled).active,
.show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #008966;
  border-color: #007c5d;
}

.btn-success:not(:disabled):not(.disabled):active:focus,
.btn-success:not(:disabled):not(.disabled).active:focus,
.show > .btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(38, 198, 157, 0.5);
}
.add-gallery-image {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.new-slide img {
  width: 150px;
  height: 150px;
}
.new-slide {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
}
.card-header,
.list-title {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3498db;
  border-bottom: 0 solid rgba(0, 0, 0, 0.125);
}
.card-title {
  float: left;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 0.75rem;
}
.table {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}
table {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 14px;
  width: 600px;
  text-align: left;
  border-collapse: collapse;
  border-radius: 20px;
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  color: #452f21;
}
th {
  padding: 10px 8px;
  background: white;
}
table th:first-child {
  border-top-left-radius: 20px;
}
table th:last-child {
  border-top-right-radius: 20px;
}
td {
  border-top: 1px solid #15527a;
  padding: 8px;
  background: white;
}
table td:first-child {
  border-bottom-left-radius: 20px;
}
table td:last-child {
  border-bottom-right-radius: 20px;
}
i {
  margin: 0 10px;
}
.edit-halls,
.delete-halls {
  cursor: pointer;
}
.edit-halls:hover {
  color: #007c5d;
}
.delete-halls:hover {
  color: #f75843;
}
.add-halls button {
  margin: 20px 0;
}
.seo {
  margin: 20px 0;
}
.card {
  background-color: #343a40;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-bottom: 7.5px;
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  margin-bottom: 1rem;
}
.card-header,
.title {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3498db;
  border-bottom: 0 solid rgba(0, 0, 0, 0.125);
}
.card-title {
  float: left;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 0.75rem;
}
.card-body {
  color: #000;
  padding: 0.5rem;
  min-height: 1px;
  padding: 1.25rem;
  margin: 0 auto;
}
.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 0;
  margin: 0 auto;
  max-width: 710px;
  justify-content: flex-end;
}
.form-group input,
#nameCard {
  width: 600px;
  margin: 10px;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 transparent;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 0 solid rgba(0, 0, 0, 0.125);
  display: flex;
  justify-content: center;
}
.gallery h1 {
  color: #fff;
  font-weight: 400;
}
.form-two {
  margin: 20px 0;
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
}
.card-checkbox {
  display: flex;
  width: 300px;
  justify-content: space-around;
}
</style>
