<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <div class="nav-wrapper">
          <router-link to="/" tag="a" class="brand-logo left">Geo Ninjas</router-link>
          <ul class="right">
            <router-link to="/signup" tag="li" active-class="active" exact v-if="!user">
              <a>Signup</a>
            </router-link>
            <router-link to="/login" tag="li" active-class="active" exact v-if="!user">
              <a>Login</a>
            </router-link>
            <li v-if="user">
              <a class="user-email">{{user.email}}</a>
            </li>
            <li v-if="user">
              <a @click="logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { db, auth, firebaseApp } from "@/firebase/init";
export default {
  data() {
    return {
      user: null
    };
  },
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$router.replace({ name: "Login" });
      });
    }
  },
  created() {
    //let user = auth.currentUser;
    auth.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>

<style lang="scss">
// .navbar {
//   .user-email {
//     margin-left: 15px;
//   }
// }
</style>