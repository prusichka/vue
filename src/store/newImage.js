import firebase from "firebase";

export default {
  actions: {
    async addImageTop(dispatch, formImage) {
      try {
        firebase
          .database()
          .ref("images/" + "top/" + formImage.text)
          .set({
            url: formImage.url,
            text: formImage.text,
          });
      } catch (error) {
        console.log(error);
      }
      formImage.url = null;
      formImage.text = null;
      console.log(formImage.url, formImage.text);
    },
    async addImageBottom(dispatch, formImage) {
      try {
        firebase
          .database()
          .ref("images/" + "bottom")
          .set({
            url: formImage.url,
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
