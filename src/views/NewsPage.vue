<template>
  <div class="news-page">
    <div class="news-wrap">
      <div class="top">
        <h1 class="title">Список Новостей</h1>
        <button
          class="create-news btn-success"
          @click="$router.push({ name: 'News Card' })"
        >
          Создать Новость
        </button>
      </div>
      <div class="table">
        <table>
          <tr>
            <th>Название</th>
            <th>Дата</th>
            <th>Статус</th>
            <th>Действие</th>
          </tr>
          <tr>
            <td>13 зал</td>
            <td>12.07.2021</td>
            <td>ВКЛ</td>
            <td>
              <i class="fas fa-edit edit-halls" style="font-size: 30px"></i>
              <i class="fas fa-trash delete-halls" style="font-size: 30px"></i>
            </td>
          </tr>
          <tr>
            <td>11 зал</td>
            <td>12.07.2021</td>
            <td>ВЫКЛ</td>
            <td>
              <i class="fas fa-edit edit-halls" style="font-size: 30px"></i>
              <i class="fas fa-trash delete-halls" style="font-size: 30px"></i>
            </td>
          </tr>
          <tr>
            <td>9 зал</td>
            <td>12.07.2021</td>
            <td>ВЫКЛ</td>
            <td>
              <i class="fas fa-edit edit-halls" style="font-size: 30px"></i>
              <i class="fas fa-trash delete-halls" style="font-size: 30px"></i>
            </td>
          </tr>
        </table>
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
.news-page {
  margin-left: 205px;
  display: flex;
  justify-content: center;
}
.news-wrap {
  width: 99%;
}
.top {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.title {
  margin: 0 550px;
}
.btn-success {
  color: #fff;
  background-color: #00bc8c;
  border-color: #00bc8c;
  box-shadow: none;
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
.table {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}
table {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 14px;
  width: 800px;
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
</style>
