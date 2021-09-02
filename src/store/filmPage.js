import firebase from "firebase";

export default {
  actions: {
    async addMainImage(dispatch, mainImage) {
      try {
        firebase
          .database()
          .ref("filmCard/" + "mainImage")
          .set({
            src: mainImage.src,
          });
      } catch (error) {
        console.log(error);
      }
    },
    async addImageToGallery(dispatch, images) {
      images.forEach((element) => {
        try {
          firebase
            .database()
            .ref("filmCard/" + "gallery/" + element.id)
            .set({
              src: element.src,
              id: element.id,
            });
        } catch (error) {
          console.log(error);
        }
      });
    },
  },
};
