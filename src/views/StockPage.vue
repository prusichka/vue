<template>
  <div class="stock">
    <div class="stock-wrap">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Список Акций</h3>
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
                <td>Три билета в подарок</td>
                <td>12.07.2016</td>
                <td>ВКЛ</td>
                <td>
                  <i class="fas fa-edit edit-stock" style="font-size: 30px"></i>
                  <i
                    class="fas fa-trash delete-stock"
                    style="font-size: 30px"
                  ></i>
                </td>
              </tr>
              <tr>
                <td>Три билета в подарок</td>
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
              <tr>
                <td>Три билета в подарок</td>
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
              <tr>
                <td>Три билета в подарок</td>
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
          @click="$router.push({ name: 'Stock Card' })"
        >
          Создать Акцию
        </button>
        <!-- /.card-body -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.stock {
  margin-left: 205px;
  overflow-x: hidden;
}
.stock-wrap {
  width: 99%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  width: 800px;
  margin: 20px 0;
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
