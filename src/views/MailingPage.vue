<template>
  <div class="mailing">
    <div class="mailing-wrapp content">
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">SMS</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form>
          <div class="card-body">
            <div class="form-group top">
              <div class="form-group-content">
                <p>Выбрать пользователей кому слать</p>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio1" />
                  <label class="form-check-label">Всем пользователям</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="radio1"
                    checked=""
                  />
                  <label class="form-check-label">Выборочно</label>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-block bg-gradient-warning"
                @click="$router.push({ name: 'Select User' })"
              >
                Выбрать пользователей
              </button>
            </div>
            <div class="form-group group-mailing">
              <div class="sms-content">
                <label>Текст сообщения</label>
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="Enter ..."
                  style="margin-top: 0px; margin-bottom: 0px; height: 95px"
                ></textarea>
              </div>
              <div class="sms-info">
                <p>Кол-во SMS : 173 629</p>
                <p>Рассылка выполнена на: 45% 20 000</p>
              </div>
            </div>
          </div>
          <!-- /.card-body -->

          <div class="card-footer">
            <button type="button" class="btn btn-primary">
              Начать рассылку
            </button>
          </div>
        </form>
      </div>
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Email</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form>
          <div class="card-body">
            <div class="form-group top">
              <div class="form-group-content">
                <p>Выбрать Email кому слать</p>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio1" />
                  <label class="form-check-label">Всем пользователям</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="radio1"
                    checked=""
                  />
                  <label class="form-check-label">Выборочно</label>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-block bg-gradient-warning"
                @click="$router.push({ name: 'Select User' })"
              >
                Выбрать пользователей
              </button>
            </div>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile" />
              <label class="custom-file-label" for="customFile"
                >Загрузить HTML-письмо</label
              >
            </div>
            <div class="file-content">
              <div class="file">
                <h3>Загружен файл : asdgasfh.html</h3>
                <h3>Шаблон используемый в рассылке : asdgasfh.html</h3>
                <div class="count-file">
                  <h3>Коло-во писем : 173 629</h3>
                  <h3>Рассылка выполнена на : 45%</h3>
                </div>
              </div>
              <div class="mailing-list">
                <h3>Список последних загруженых шаблонов</h3>
                <div class="custom-control custom-checkbox">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    id="customCheckbox1"
                    value="option1"
                  />
                  <label for="customCheckbox1" class="custom-control-label"
                    >Новый товар на 05,02,2016</label
                  >
                  <button class="btn btn-danger btn-sm">Удалить</button>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    id="customCheckbox2"
                    value="option1"
                  />
                  <label for="customCheckbox2" class="custom-control-label"
                    >Рассылка новостей</label
                  >
                  <button class="btn btn-danger btn-sm">Удалить</button>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    id="customCheckbox3"
                    value="option1"
                  />
                  <label for="customCheckbox3" class="custom-control-label"
                    >Новый товар на 05,08,2016</label
                  >
                  <button class="btn btn-danger btn-sm">Удалить</button>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    id="customCheckbox4"
                    value="option1"
                  />
                  <label for="customCheckbox4" class="custom-control-label"
                    >Новый товар на 05,09,2016</label
                  >
                  <button class="btn btn-danger btn-sm">Удалить</button>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    id="customCheckbox5"
                    value="option1"
                  />
                  <label for="customCheckbox5" class="custom-control-label"
                    >Новый товар на 05,11,2016</label
                  >
                  <button class="btn btn-danger btn-sm">Удалить</button>
                </div>
              </div>
            </div>
          </div>
          <!-- /.card-body -->

          <div class="card-footer">
            <button type="button" class="btn btn-primary">
              Начать рассылку
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mailing-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  width: 99%;
}
.card {
  margin: 10px 0;
}
.form-group-content {
  display: flex;
  align-items: center;
}
.form-group-content p {
  font-weight: 700;
  font-size: 22px;
  margin: 0;
  margin-right: 30px;
}
.radio-content {
  display: flex;
}
.form-check {
  margin-right: 30px;
}
.card-footer {
  display: flex;
  justify-content: center;
}
.btn {
  width: max-content;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.group-mailing {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
}
.sms-content,
.sms-info {
  width: 100%;
}
.sms-info {
  padding: 10px 30px;
}
.count-file {
  display: flex;
}
h3 {
  margin-right: 30px;
  font-weight: normal;
}
.file-content {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
  align-items: center;
}
.mailing-list {
  border: 1px solid chocolate;
  border-radius: 10px;
  padding: 5px;
}
.custom-checkbox {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}
</style>
