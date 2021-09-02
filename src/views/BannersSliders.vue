<template>
  <div class="banners-sliders">
    <div class="wrapper">
      <div class="card card-info">
        <div class="card-header">
          <h3 class="card-title">На главной вверх</h3>
        </div>
        <div class="head">
          <h3 class="card-title">Размер : 1000 x 190</h3>
          <div
            class="
              custom-control
              custom-switch
              custom-switch-off-danger
              custom-switch-on-success
            "
          >
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch3"
            />
            <label class="custom-control-label" for="customSwitch3"></label>
          </div>
        </div>
        <div class="main-content">
          <div class="new-img" v-for="(image, index) in images" :key="index">
            <div class="card card-info">
              <i
                class="fas fa-minus-circle exit-btn"
                @click.prevent="deleteImage(image.text, index)"
              ></i>
              <form class="form-horizontal">
                <div class="card-body">
                  <div class="form-group row download">
                    <div class="img-div">
                      <img :src="image.src" class="small-img" />
                    </div>
                    <div class="input-group">
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="exampleInputFile"
                          accept="image/*"
                          @change="previewimage($event, index)"
                        />
                        <label class="custom-file-label" for="exampleInputFile"
                          >Choose file</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputURL3" class="col-sm-2 col-form-label"
                      >URL</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="URL"
                        v-model="image.url"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputText3" class="col-sm-2 col-form-label"
                      >Текст</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Текст"
                        v-model="image.text"
                      />
                    </div>
                  </div>
                </div>
                <!-- /.card-body -->
                <!-- /.card-footer -->
              </form>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-block btn-outline-success add-img"
            @click="addImage"
          >
            Добавить фото
          </button>
        </div>
        <div class="footer">
          <div class="form-group speed">
            <label>Скорость вращения</label>
            <select class="custom-select second">
              <option>1с</option>
              <option>2с</option>
              <option>3с</option>
              <option>4с</option>
              <option>5с</option>
            </select>
            <button
              type="button"
              class="btn bg-gradient-success"
              @click="onUpload"
            >
              Добавить
            </button>
          </div>
        </div>
      </div>
      <div class="card card-info">
        <div class="card-header">
          <h3 class="card-title">Сквозной банер на заднем фоне</h3>
        </div>
        <div class="head">
          <h3 class="card-title">Размер : 2000 x 3000</h3>
        </div>
        <div class="main-content middle">
          <div class="radio">
            <div class="custom-control custom-radio">
              <input
                class="custom-control-input"
                type="radio"
                id="customRadio1"
                name="customRadio"
              />
              <label for="customRadio1" class="custom-control-label"
                >фото на фоне</label
              >
            </div>
            <div class="custom-control custom-radio">
              <input
                class="custom-control-input"
                type="radio"
                id="customRadio2"
                name="customRadio"
              />
              <label for="customRadio2" class="custom-control-label"
                >просто фон</label
              >
            </div>
          </div>
          <div class="card card-primary">
            <!-- /.card-header -->
            <!-- form start -->
            <form class="main-form">
              <div class="card-body">
                <div class="form-group">
                  <div class="img-div">
                    <img :src="mainImage.src" class="small-img" />
                  </div>
                  <div class="input-group">
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        @change="previewMainImage($event, index)"
                      />
                      <label class="custom-file-label" for="exampleInputFile"
                        >Choose file</label
                      >
                    </div>
                    <button
                      type="button"
                      class="btn btn-default"
                      @click="onUploadMainImage"
                    >
                      Добавить
                    </button>
                  </div>
                </div>
              </div>
              <!-- /.card-body -->
            </form>
          </div>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
      </div>
      <div class="card card-info">
        <div class="card-header">
          <h3 class="card-title">На главной вверх</h3>
        </div>
        <div class="head">
          <h3 class="card-title">Размер : 1000 x 190</h3>
          <div
            class="
              custom-control
              custom-switch
              custom-switch-off-danger
              custom-switch-on-success
            "
          >
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch3"
            />
            <label class="custom-control-label" for="customSwitch3"></label>
          </div>
        </div>
        <div class="main-content">
          <div class="new-img" v-for="(image, index) in images2" :key="index">
            <div class="card card-info">
              <form class="form-horizontal">
                <div class="card-body">
                  <div class="form-group row download">
                    <div class="img-div">
                      <img :src="image.src" class="small-img" />
                    </div>
                    <div class="input-group">
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          @change="previewBottomimage($event, index)"
                        />
                        <label class="custom-file-label" for="exampleInputFile"
                          >Choose file</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputURL3" class="col-sm-2 col-form-label"
                      >URL</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="url"
                        class="form-control"
                        id="inputURL3"
                        placeholder="URL"
                        v-model="image.url"
                      />
                    </div>
                  </div>
                </div>
                <!-- /.card-body -->
                <!-- /.card-footer -->
              </form>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-block btn-outline-success add-img"
            @click="addImage2"
          >
            Добавить фото
          </button>
        </div>
        <div class="footer">
          <div class="form-group speed">
            <label>Скорость вращения</label>
            <select class="custom-select second">
              <option>1с</option>
              <option>2с</option>
              <option>3с</option>
              <option>4с</option>
              <option>5с</option>
            </select>
            <button
              type="button"
              class="btn bg-gradient-success"
              @click="onUploadBottomImage"
            >
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    images: [],
    mainImage: {
      file: "",
      src: "",
    },
    images2: [
      {
        url: "",
        src: "",
        file: "",
        id: "",
      },
    ],
    imageData: null,
    imageData2: null,
    imageData3: null,
    picture2: null,
    picture3: null,
    picture: null,
    uploadValue: 0,
    uploadValue2: 0,
    uploadValue3: 0,
  }),
  methods: {
    addImage() {
      this.images.push({});
    },
    addImage2() {
      this.images2.push({
        url: "",
        src: "",
        file: "",
        id: "",
      });
    },
    previewimage(event, index) {
      (this.uploadValue = 0),
        (this.picture = null),
        (this.imageData = event.target.files[0]);
      const reader = new FileReader();
      reader.onloadend = () => {
        this.images[index].file = file;
        this.images[index].src = reader.result;
      };
      const file = event.target.files[0];
      reader.readAsDataURL(file);
    },
    previewMainImage(event) {
      (this.uploadValue2 = 0),
        (this.picture2 = null),
        (this.imageData2 = event.target.files[0]);
      const reader2 = new FileReader();
      reader2.onloadend = () => {
        this.mainImage.file = mainFile;
        this.mainImage.src = reader2.result;
      };
      const mainFile = event.target.files[0];
      reader2.readAsDataURL(mainFile);
    },
    previewBottomimage(event, index) {
      (this.uploadValue3 = 0),
        (this.picture3 = null),
        (this.imageData3 = event.target.files[0]);
      const elId = event.target.files[0].lastModified;
      const reader3 = new FileReader();
      reader3.onloadend = () => {
        this.images2[index].file = file;
        this.images2[index].id = elId;
        this.images2[index].src = reader3.result;
      };
      const file = event.target.files[0];
      reader3.readAsDataURL(file);
      console.log(elId);
    },
    async onUpload() {
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      await storageRef.on(
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
      await this.$store.dispatch("addImageTop", this.images);
    },
    async onUploadMainImage() {
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
      await this.$store.dispatch("addMainImage", this.mainImage);
    },
    async onUploadBottomImage() {
      const storageRef3 = firebase
        .storage()
        .ref(`${this.imageData3.name}`)
        .put(this.imageData3);
      storageRef3.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue3 =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue3 = 100;
        }
      );
      await this.$store.dispatch("addImageBottom", this.images2);
    },
    async deleteImage(imageText, index) {
      this.images.splice(index, 1);
      if (!this.images.length == 0) {
        try {
          firebase
            .database()
            .ref("sliders/" + "top/" + imageText)
            .remove();
        } catch (error) {
          console.log(error);
        }
      } else return;
    },
  },
  mounted() {
    if (this.images.length == 0) {
      firebase
        .database()
        .ref("sliders/top")
        .on("value", (element) => {
          element.forEach((imageObj) => {
            let newImage = {
              text: imageObj.val().text,
              url: imageObj.val().url,
              src: imageObj.val().src,
            };
            imageObj != newImage
              ? this.images.push(newImage)
              : this.images.pop();
            console.log(this.images);
          });
        });
    }
  },
  // mounted() {
  //   const ref = firebase.database().ref("sliders/top");
  //   ref.on("value", (snapshot) => {
  //     snapshot.forEach((element) => {
  //       var resultingData = element.val();
  //       console.log(resultingData);
  //       this.images.push(resultingData);
  //     });
  //   });
  // },
  computed: {},
};
</script>

<style scoped>
img.preview {
  width: 300px;
}
.wrapper {
  padding: 5px;
}
.head {
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
}
.add-img {
  width: max-content;
  margin: 10px auto;
}
.main-content {
  display: flex;
  align-items: center;
}
.speed {
  display: flex;
  align-items: center;
  padding: 10px;
}
.second {
  margin: 0 20px;
}
.new-img {
  width: 350px;
  padding: 10px;
}
.form-group,
.row,
label {
  padding: 0;
}
.radio {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.radio div {
  margin: 5px 20px;
}
.download {
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
}
.middle {
  display: flex;
  align-items: center;
}
.input-group {
  margin: 10px 0;
}
.small-img {
  width: 150px;
  height: 200px;
}
.img-div {
  padding: 5px;
  display: flex;
  justify-content: center;
}
.exit-btn {
  color: #ccc;
  display: block;
  font-size: 30px;
  margin: 5px;
}
.exit-btn:hover {
  color: red;
  cursor: pointer;
}
</style>
