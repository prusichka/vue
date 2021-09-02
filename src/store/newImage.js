import firebase from "firebase";

export default {
  state: {
    images: [],
  },
  actions: {
    async addImageTop(dispatch, images) {
      images.forEach((formImage) => {
        try {
          firebase
            .database()
            .ref("sliders/" + "top/" + formImage.text)
            .set({
              url: formImage.url,
              text: formImage.text,
              src: formImage.src,
            });

        } catch (error) {
          console.log(error);
        }
      });
    },
    async addImageBottom(dispatch, images2) {
      images2.forEach((el) => {
        try {
          firebase
            .database()
            .ref("sliders/" + "bottom/" + el.id)
            .set({
              url: el.url,
              src: el.src,
              id: el.id,
            });
        } catch (error) {
          console.log(error);
        }
      });
    },
    async addMainImage(dispatch, mainImage) {
      try {
        firebase
          .database()
          .ref("sliders/" + "main")
          .set({ src: mainImage.src });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {},
  getters: {},
};
