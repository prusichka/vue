<template>
  <div class="card-film">
    <div class="card-wrap">
      <div class="lenguage">
        <div class="form-group">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch1"
            />
            <label class="custom-control-label" for="customSwitch1">ВКЛ</label>
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
              <label for="exampleNameNews">Название фильма</label>
              <input
                type="text"
                name="nameNews"
                class="form-control"
                id="exampleNameNews"
                placeholder="Enter name news"
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
            <div class="new-img">
              <p>Главная картинка</p>
              <div class="form-group row download">
                <div class="img-div">
                  <img :src="mainImage.src" class="small-img" />
                </div>
                <div class="input-group">
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      @change="previewMainImage($event)"
                    />
                    <label class="custom-file-label" for="exampleInputFile"
                      >Choose file</label
                    >
                  </div>
                  <button
                    class="btn bg-gradient-success"
                    @click.prevent="downloadMainImage"
                  >
                    <i class="fas fa-save"></i> Save
                  </button>
                </div>
              </div>
            </div>
            <div class="middle-content">
              <p>Галерея картинок</p>
              <div
                class="new-gallery"
                v-for="(image, index) in images"
                :key="index"
              >
                <div class="form-group row download">
                  <div class="img-div">
                    <img :src="image.src" class="small-img" />
                  </div>
                  <div class="input-group">
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        @change="previewGallery($event, index)"
                      />
                      <label class="custom-file-label" for="exampleInputFile"
                        >Choose file</label
                      >
                    </div>
                    <button
                      class="btn bg-gradient-success"
                      @click.prevent="downloadImageToGallery"
                    >
                      <i class="fas fa-save"></i> Save
                    </button>
                  </div>
                </div>
              </div>
              <button
                type="button"
                @click.prevent="addImageToGallery"
                class="btn btn-outline-success"
              >
                Добавить фото
              </button>
            </div>
            <div class="form-group">
              <label for="exampleVideoLink">Ссылка на видео</label>
              <input
                type="text"
                name="nameNews"
                class="form-control"
                id="exampleVideoLink"
                placeholder="Ссылка на видео в YouTube"
              />
            </div>
            <div class="form-group">
              <h3>Тип Кино</h3>
              <div class="typeFilm">
                <div class="custom-control custom-checkbox">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    id="customCheckbox1"
                    value="option1"
                  />
                  <label for="customCheckbox1" class="custom-control-label"
                    >2D</label
                  >
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    id="customCheckbox2"
                    value="option1"
                  />
                  <label for="customCheckbox2" class="custom-control-label"
                    >3D</label
                  >
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    id="customCheckbox3"
                    value="option1"
                  />
                  <label for="customCheckbox3" class="custom-control-label"
                    >IMAX</label
                  >
                </div>
              </div>
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
            <button
              type="submit"
              @click.prevent="$router.push({ name: 'Film' })"
              class="btn btn-info"
            >
              Сохранить
            </button>
          </div>
          <!-- /.card-footer -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    mainImage: {
      file: "",
      src: "",
    },
    images: [
      {
        src: "",
        file: "",
      },
    ],
    imageData: null,
    picture: null,
    uploadValue: 0,
    imageData2: null,
    picture2: null,
    uploadValue2: 0,
  }),
  methods: {
    addImageToGallery() {
      this.images.push({
        src: "",
        id: "",
        file: "",
      });
    },
    previewMainImage(event) {
      (this.uploadValue = 0),
        (this.picture = null),
        (this.imageData = event.target.files[0]);

      const reader = new FileReader();
      reader.onloadend = () => {
        this.mainImage.file = mainFile;
        this.mainImage.src = reader.result;
      };
      const mainFile = event.target.files[0];
      reader.readAsDataURL(mainFile);
    },
    previewGallery(event, index) {
      (this.uploadValue2 = 0),
        (this.picture2 = null),
        (this.imageData2 = event.target.files[0]);

      const elId = event.target.files[0].lastModified;
      const reader2 = new FileReader();
      reader2.onloadend = () => {
        this.images[index].file = File;
        this.images[index].src = reader2.result;
        this.images[index].id = elId;
      };
      const File = event.target.files[0];
      reader2.readAsDataURL(File);
    },
    async downloadMainImage() {
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
        }
      );
      await this.$store.dispatch("addMainImage", this.mainImage);
    },
    async downloadImageToGallery() {
      const storageRef2 = firebase
        .storage()
        .ref(`${this.imageData2.name}`)
        .put(this.imageData2);
      storageRef2.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue2 =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue2 = 100;
        }
      );
      await this.$store.dispatch("addImageToGallery", this.images);
    },
  },
};
</script>

<style scoped>
.news-wrap {
  width: 99%;
  display: flex;
  flex-direction: column;
}
.lenguage {
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

.small-img {
  width: 150px;
  height: 200px;
}
.img-div {
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
}
.download {
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
}
.new-img {
  width: 350px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.main-content {
  display: flex;
  width: 100%;
}
p {
  font-weight: 700;
}
.center {
  display: flex;
}
.new-image {
  width: 350px;
  padding: 10px;
}
.middle-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #000;
}
.new-gallery {
  width: 350px;
  padding: 10px;
  display: flex;
  flex-direction: row;
}
</style>
