<template>
  <div class="pages">
    <div class="pages-wrap">
      <div class="card content">
        <div class="card-header">
          <h3 class="card-title">Список страниц</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body p-0">
          <table class="table table-sm">
            <thead>
              <tr>
                <th>Название</th>
                <th>Дата создания</th>
                <th>Статус</th>
                <th style="width: 40px">Управление</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Главная страница</td>
                <td>12.07.2016</td>
                <td>ВКЛ</td>
                <td>
                  <i
                    class="fas fa-edit edit-stock"
                    style="font-size: 30px"
                    @click="$router.push({ name: 'Main Page' })"
                  ></i>
                </td>
              </tr>
              <tr>
                <td>О кинотеатре</td>
                <td>12.07.2016</td>
                <td>ВЫКЛ</td>
                <td>
                  <i
                    class="fas fa-edit edit-stock"
                    style="font-size: 30px"
                    @click="$router.push({ name: 'About Cinema' })"
                  ></i>
                </td>
              </tr>
              <tr>
                <td>Кафе - Бар</td>
                <td>12.07.2016</td>
                <td>ВЫКЛ</td>
                <td>
                  <i
                    class="fas fa-edit edit-stock"
                    style="font-size: 30px"
                    @click="$router.push({ name: 'Cafe Bar' })"
                  ></i>
                </td>
              </tr>
              <tr>
                <td>VIP - зал</td>
                <td>12.07.2016</td>
                <td>ВЫКЛ</td>
                <td>
                  <i
                    class="fas fa-edit edit-stock"
                    style="font-size: 30px"
                    @click="$router.push({ name: 'Vip Hall' })"
                  ></i>
                </td>
              </tr>
              <tr>
                <td>Реклама</td>
                <td>12.07.2016</td>
                <td>ВЫКЛ</td>
                <td>
                  <i
                    class="fas fa-edit edit-stock"
                    style="font-size: 30px"
                    @click="$router.push({ name: 'Advert Card' })"
                  ></i>
                </td>
              </tr>
              <tr>
                <td>Детская комната</td>
                <td>12.07.2016</td>
                <td>ВЫКЛ</td>
                <td>
                  <i
                    class="fas fa-edit edit-stock"
                    style="font-size: 30px"
                    @click="$router.push({ name: 'Child Room' })"
                  ></i>
                </td>
              </tr>
              <tr>
                <td>Контакты</td>
                <td>12.07.2016</td>
                <td>ВЫКЛ</td>
                <td>
                  <i
                    class="fas fa-edit edit-stock"
                    style="font-size: 30px"
                    @click="$router.push({ name: 'Contacts' })"
                  ></i>
                </td>
              </tr>
              <tr>
                <td>Новая страница</td>
                <td>12.07.2016</td>
                <td>ВЫКЛ</td>
                <td>
                  <i class="fas fa-edit edit-stock" style="font-size: 30px"></i>
                  <i
                    class="fas fa-trash delete-stock"
                    style="font-size: 30px"
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          type="button"
          class="btn btn-block btn-success btn-lg"
          @click="$router.push({ name: 'Pages Card' })"
        >
          Создать Страницу
        </button>
        <!-- /.card-body -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.pages-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  width: 900px;
  margin: 20px 0;
}
.content {
  width: 99%;
}
.edit-stock,
.delete-stock {
  cursor: pointer;
  margin: 0 5px;
}
.edit-stock:hover {
  color: #007c5d;
}
.delete-stock:hover {
  color: #f75843;
}
</style>
