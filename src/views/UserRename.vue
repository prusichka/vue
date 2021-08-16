<template>
  <div class="user-rename">
    <div class="user-rename-wrapp">
      <div class="card card-primary main-form">
        <div class="card-header">
          <h3 class="card-title">Редактирование пользователя</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form>
          <div class="form-content">
            <div class="card-body first-column">
              <div class="form-group">
                <label for="exampleInputName1">Имя</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName1"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputSurname1">Фамилия</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputSurname1"
                  placeholder="Surname"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputNickname1">Псевдоним</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputNickname1"
                  placeholder="Nickname"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputAddress1">Адрес</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputAddress1"
                  placeholder="Address"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Пароль</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputCardNumber1">Номер карты</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputCardNumber1"
                  placeholder="CardNumber"
                />
              </div>
            </div>
            <div class="card-body second-column">
              <div class="form-group leng">
                <p>Язык</p>
                <div class="radio-content">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radio1"
                    />
                    <label class="form-check-label">Украинский</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radio1"
                      checked=""
                    />
                    <label class="form-check-label">Русский</label>
                  </div>
                </div>
              </div>
              <div class="form-group sex">
                <p>Пол</p>
                <div class="radio-content">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radio1"
                    />
                    <label class="form-check-label">Мужской</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radio1"
                      checked=""
                    />
                    <label class="form-check-label">Женский</label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputTel1">Телефон</label>
                <input
                  type="tel"
                  class="form-control"
                  id="exampleInputTel1"
                  placeholder="Phone number"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputBirthday1">Дата рождения</label>
                <input
                  type="date"
                  class="form-control"
                  id="exampleInputBirthday1"
                  placeholder="Birthday"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputCity1">Город</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputCity1"
                  placeholder="City"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Повторить пароль</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
          <!-- /.card-body -->

          <div class="card-footer">
            <button
              type="button"
              class="btn btn-primary"
              @click="$router.push({ name: 'Users' })"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-rename {
  height: 100%;
}
.user-rename-wrapp {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-form {
  width: 99%;
  margin: 10px 0;
}
.form-content {
  display: flex;
}
.leng,
.sex {
  display: flex;
  align-items: center;
}
.leng p,
.sex p {
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
</style>
