<template>
  <div class="users-page">
    <div class="users-page-wrap">
      <div class="content">
        <div class="row search">
          <div class="col-md-8 offset-md-2">
            <form action="#">
              <div class="input-group">
                <input
                  type="search"
                  class="form-control form-control-lg"
                  placeholder="Enter Username"
                />
                <div class="input-group-append">
                  <button type="submit" class="btn btn-lg btn-default">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="card-body">
          <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row">
              <div class="col-sm-12 col-md-6"></div>
              <div class="col-sm-12 col-md-6"></div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <table
                  id="example2"
                  class="table table-bordered table-hover dataTable dtr-inline"
                  role="grid"
                  aria-describedby="example2_info"
                >
                  <thead>
                    <tr role="row">
                      <th
                        class="sorting sorting_asc"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-sort="ascending"
                        aria-label="ID: activate to sort column descending"
                      ></th>
                      <th
                        class="sorting sorting_asc"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-sort="ascending"
                        aria-label="ID: activate to sort column descending"
                      >
                        ID
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Дата регистрации: activate to sort column ascending"
                      >
                        Дата регистрации
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="День рождения: activate to sort column ascending"
                      >
                        День рождения
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label=" Email: activate to sort column ascending"
                      >
                        Email
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Телефон: activate to sort column ascending"
                      >
                        Телефон
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="ФИО: activate to sort column ascending"
                      >
                        ФИО
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Псевдоним: activate to sort column ascending"
                      >
                        Псевдоним
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Город: activate to sort column ascending"
                      >
                        Город
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="odd">
                      <td>
                        <input type="checkbox" name="select" id="selectUser" />
                      </td>
                      <td class="dtr-control sorting_1" tabindex="0">21.04</td>
                      <td>12.10.2015</td>
                      <td>12.10.1985</td>
                      <td>ivan@mail.ru</td>
                      <td>0635596545</td>
                      <td>Иван Герасимов</td>
                      <td>Молния</td>
                      <td>Москва</td>
                    </tr>
                    <tr class="even">
                      <td>
                        <input type="checkbox" name="select" id="selectUser" />
                      </td>
                      <td class="dtr-control sorting_1" tabindex="0">21.04</td>
                      <td>12.10.2015</td>
                      <td>12.10.1985</td>
                      <td>ivan@mail.ru</td>
                      <td>0635596545</td>
                      <td>Иван Герасимов</td>
                      <td>Молния</td>
                      <td>Москва</td>
                    </tr>
                    <tr class="odd">
                      <td>
                        <input type="checkbox" name="select" id="selectUser" />
                      </td>
                      <td class="dtr-control sorting_1" tabindex="0">21.04</td>
                      <td>12.10.2015</td>
                      <td>12.10.1985</td>
                      <td>ivan@mail.ru</td>
                      <td>0635596545</td>
                      <td>Иван Герасимов</td>
                      <td>Молния</td>
                      <td>Москва</td>
                    </tr>
                    <tr class="even">
                      <td>
                        <input type="checkbox" name="select" id="selectUser" />
                      </td>
                      <td class="dtr-control sorting_1" tabindex="0">21.04</td>
                      <td>12.10.2015</td>
                      <td>12.10.1985</td>
                      <td>ivan@mail.ru</td>
                      <td>0635596545</td>
                      <td>Иван Герасимов</td>
                      <td>Молния</td>
                      <td>Москва</td>
                    </tr>
                    <tr class="odd">
                      <td>
                        <input type="checkbox" name="select" id="selectUser" />
                      </td>
                      <td class="dtr-control sorting_1" tabindex="0">21.04</td>
                      <td>12.10.2015</td>
                      <td>12.10.1985</td>
                      <td>ivan@mail.ru</td>
                      <td>0635596545</td>
                      <td>Иван Герасимов</td>
                      <td>Молния</td>
                      <td>Москва</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th></th>
                      <th>ID</th>
                      <th>Дата регистрации</th>
                      <th>День рождения</th>
                      <th>Email</th>
                      <th>Телефон</th>
                      <th>ФИО</th>
                      <th>Псевдоним</th>
                      <th>Город</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-7">
                <div
                  class="dataTables_paginate paging_simple_numbers"
                  id="example2_paginate"
                >
                  <ul class="pagination">
                    <li
                      class="paginate_button page-item previous disabled"
                      id="example2_previous"
                    >
                      <a
                        href="#"
                        aria-controls="example2"
                        data-dt-idx="0"
                        tabindex="0"
                        class="page-link"
                        >Previous</a
                      >
                    </li>
                    <li class="paginate_button page-item active">
                      <a
                        href="#"
                        aria-controls="example2"
                        data-dt-idx="1"
                        tabindex="0"
                        class="page-link"
                        >1</a
                      >
                    </li>
                    <li class="paginate_button page-item">
                      <a
                        href="#"
                        aria-controls="example2"
                        data-dt-idx="2"
                        tabindex="0"
                        class="page-link"
                        >2</a
                      >
                    </li>
                    <li class="paginate_button page-item">
                      <a
                        href="#"
                        aria-controls="example2"
                        data-dt-idx="3"
                        tabindex="0"
                        class="page-link"
                        >3</a
                      >
                    </li>
                    <li class="paginate_button page-item">
                      <a
                        href="#"
                        aria-controls="example2"
                        data-dt-idx="4"
                        tabindex="0"
                        class="page-link"
                        >4</a
                      >
                    </li>
                    <li class="paginate_button page-item">
                      <a
                        href="#"
                        aria-controls="example2"
                        data-dt-idx="5"
                        tabindex="0"
                        class="page-link"
                        >5</a
                      >
                    </li>
                    <li class="paginate_button page-item">
                      <a
                        href="#"
                        aria-controls="example2"
                        data-dt-idx="6"
                        tabindex="0"
                        class="page-link"
                        >6</a
                      >
                    </li>
                    <li
                      class="paginate_button page-item next"
                      id="example2_next"
                    >
                      <a
                        href="#"
                        aria-controls="example2"
                        data-dt-idx="7"
                        tabindex="0"
                        class="page-link"
                        >Next</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-block bg-gradient-success btn-lg btn-mailing"
        >
          Отправить выбранным
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.users-page-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search {
  flex-wrap: nowrap;
  align-items: center;
  margin: 15px 0;
}
.content {
  width: 99%;
}
.btn-mailing {
  width: max-content;
  margin: 0 auto;
}
</style>
