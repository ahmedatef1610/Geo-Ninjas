<template>
  <div class="login container">
    <form @submit.prevent="login" class="card-panel">
      <h2 class="center-align deep-purple-text">Login</h2>
      <div class="input-field">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" />
      </div>
      <div class="input-field">
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="password" />
      </div>

      <div class="input-field center-align">
        <p class="red-text center feedback" v-if="feedback">{{feedback}}</p>
      </div>
      <div class="input-field center-align">
        <button class="btn deep-purple" type="submit">login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { db, auth, firebaseApp } from "@/firebase/init";

export default {
  data() {
    return {
      email: "",
      password: "",
      feedback: null
    };
  },
  methods: {
    login() {
      let formatEmail = this.email.trim();
      let formatPassword = this.password.trim();

      if (formatEmail && formatPassword) {
        this.feedback = null;
        auth
          .signInWithEmailAndPassword(formatEmail, formatPassword)
          .then(cred => {
            console.log(cred.user);
            this.$router.push('/');
          })
          .catch(err => {
            console.log(err);
            this.feedback = err.message;
          });
      } else {
        this.feedback = "please fill in both fields";
      }
    }
  }
};
</script>

<style lang="scss">
.login {
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