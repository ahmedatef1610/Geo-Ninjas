<template>
  <div class="view-profile container">
    <div class="card">
      <h2 class="deep-purple-text center-align" v-if="profile.alias">{{profile.alias}} Wall</h2>
      <ul class="comments collection" v-if="comments.length!==0">
        <li class="collection-item" v-for="(comment) in comments" :key="comment.id">
          <div class="deep-purple-text">{{comment.from}} ------ {{comment.time}}</div>
          <div class="grey-text text-darken-2">👇👉 {{comment.content}}</div>
        </li>
      </ul>
      <form @submit.prevent="addComment">
        <div class="input-field">
          <label for="comment">Add a comment:</label>
          <input id="comment" type="text" v-model="newComment" />
        </div>
        <div class="input-field center-align">
          <p class="red-text center feedback" v-if="feedback">{{feedback}}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db, auth } from "@/firebase/init";
import moment from "moment";
export default {
  data() {
    return {
      profile: {},
      newComment: "",
      feedback: null,
      user: null,
      comments: []
    };
  },
  methods: {
    addComment() {
      let formatNewComment = this.newComment.trim();

      if (formatNewComment) {
        this.feedback = null;
        db.collection("comments")
          .add({
            to: this.$route.params.id,
            from: this.user.alias,
            content: this.newComment,
            time: Date.now()
          })
          .then(() => {
            this.newComment = "";
          });
        this.newComment = "";
      } else {
        this.feedback = "you must enter comment to add it";
      }
    },
    sortComments() {
      function compare(a, b) {
        if (a.time < b.time) {
          return 1;
        }
        if (a.time > b.time) {
          return -1;
        }
        return 0;
      }
      this.comments.sort(compare );
    }
  },
  created() {
    let ref = db.collection("users");

    ref
      .doc(this.$route.params.id)
      .get()
      .then(user => {
        // console.log(user);
        // console.log(user.id);
        // console.log(user.data());
        this.profile = user.data();
      });

    ref
      .where("user_id", "==", auth.currentUser.uid)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.user = doc.data();
          this.user.id = doc.id;
        });
      });

    db.collection("comments")
      .where("to", "==", this.$route.params.id)
      //.orderBy("to")
      .onSnapshot(snapshot => {
        //console.log(snapshot.docChanges());
        snapshot.docChanges().forEach(change => {
          if (change.type == "added") {
            this.comments.unshift({
              id: change.doc.id,
              to: change.doc.data().to,
              from: change.doc.data().from,
              content: change.doc.data().content,
              time: moment(change.doc.data().time).format(
                "MMMM Do dddd YYYY, h:mm:ss a"
              )
            });
          }
        });
        this.sortComments();
      });
  }
};
</script>

<style lang="scss">
.view-profile {
  .card {
    //max-width: 300px;
    margin: 60px auto;
    padding: 20px;
  }
  h2 {
    margin-top: 0;
    font-size: 2em;
  }

  .comments {
    max-height: 300px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: #ddd;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #999;
    }
  }
}
</style>