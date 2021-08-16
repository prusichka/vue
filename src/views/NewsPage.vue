<template>
  <div class="news-page">
    <div class="news-wrap">
      <div class="card card-table">
        <div class="card-header">
          <h3 class="card-title">Список Новостей</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Название</th>
                <th>Дата создания</th>
                <th>Статус</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Три билета в подарок</td>
                <td>12.07.2016</td>
                <td>ВКЛ</td>
                <td>
                  <i class="fas fa-edit edit-halls" style="font-size: 30px"></i>
                  <i
                    class="fas fa-trash delete-halls"
                    style="font-size: 30px"
                  ></i>
                </td>
              </tr>
              <tr>
                <td>Три билета в подарок</td>
                <td>12.07.2016</td>
                <td>ВЫКЛ</td>
                <td>
                  <i class="fas fa-edit edit-halls" style="font-size: 30px"></i>
                  <i
                    class="fas fa-trash delete-halls"
                    style="font-size: 30px"
                  ></i>
                </td>
              </tr>
              <tr>
                <td>Три билета в подарок</td>
                <td>12.07.2016</td>
                <td>ВЫКЛ</td>
                <td>
                  <i class="fas fa-edit edit-halls" style="font-size: 30px"></i>
                  <i
                    class="fas fa-trash delete-halls"
                    style="font-size: 30px"
                  ></i>
                </td>
              </tr>
              <tr>
                <td>Три билета в подарок</td>
                <td>12.07.2016</td>
                <td>ВЫКЛ</td>
                <td>
                  <i class="fas fa-edit edit-halls" style="font-size: 30px"></i>
                  <i
                    class="fas fa-trash delete-halls"
                    style="font-size: 30px"
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- /.card-body -->
        <div class="card-footer clearfix">
          <button
            type="button"
            class="btn btn-block btn-success btn-lg"
            @click="$router.push({ name: 'News Card' })"
          >
            Создать Новость
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-table {
  margin: 10px 0;
}
.news-page {
  display: flex;
  justify-content: center;
}
.news-wrap {
  width: 99%;
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
.card-footer button {
  width: max-content;
  margin: 0 auto;
}
</style>
