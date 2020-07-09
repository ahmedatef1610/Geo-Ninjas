<template>
  <div class="signup container">
    <form @submit.prevent="signup" class="card-panel">
      <h2 class="center-align deep-purple-text">Sign Up</h2>
      <div class="input-field">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" />
      </div>
      <div class="input-field">
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <div class="input-field">
        <label for="alias">Alias:</label>
        <input id="alias" type="text" v-model="alias" />
      </div>
      <div class="input-field center-align">
        <p class="red-text center feedback" v-if="feedback">{{feedback}}</p>
      </div>
      <div class="input-field center-align">
        <button class="btn deep-purple" type="submit">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
import { db, auth, firebaseApp } from "@/firebase/init";
import slugify from "slugify";
import functions from "firebase/functions";

export default {
  data() {
    return {
      email: "",
      password: "",
      alias: "",
      feedback: null,
      slug: null
    };
  },
  methods: {
    signup() {
      let formatAlias = this.alias.trim();
      let formatEmail = this.email.trim();
      let formatPassword = this.password.trim();

      if (formatAlias && formatEmail && formatPassword) {
        this.feedback = null;

        this.slug = slugify(formatAlias, {
          replacement: "-",
          remove: /[*+~.()'"!:@]/g,
          lower: true
        });

        let ref = db.collection("users").doc(this.slug);
        let checkAlias = firebaseApp.functions().httpsCallable("checkAlias");

        //ref.get().then(doc => {
        checkAlias({ slug: this.slug }).then(res => {
          console.log(res);
          //if (doc.exists) {
          if (!res.data.unique) {
            this.feedback = "this alias already exists";
          } else {
            auth
              .createUserWithEmailAndPassword(formatEmail, formatPassword)
              .then(cred => {
                // console.log(cred.user);
                // console.log(cred.user.uid);
                ref
                  .set({
                    alias: formatAlias,
                    geolocation: null,
                    user_id: cred.user.uid
                  })
                  .then(() => {
                    this.$router.replace({ name: "GMap" });
                  });
              })
              .catch(err => {
                console.log(err);
                this.feedback = err.message;
              });
            this.feedback = "this alias is free to use";
          }
        });
      } else {
        this.feedback = "you must enter an alias";
      }
    }
  },
  created() {}
};
</script>

<style lang="scss">
.signup {
  .card-panel {
    max-width: 400px;
    margin: 60px auto;
  }
  h2 {
    font-size: 2.4em;
  }
  .feedback {
    text-transform: capitalize;
  }
}
</style>