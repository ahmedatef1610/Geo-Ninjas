<template>
  <div class="map">
    <div class="google-map" id="map"></div>
  </div>
</template>

<script>
import { db, auth } from "@/firebase/init";
export default {
  data() {
    return {
      lat: 27,
      lng: 32
    };
  },
  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 6,
        maxZoom: 20,
        minZoom: 1,
        streetViewControl: true
      });

      db.collection("users")
        .get()
        .then(users => {
        //   console.log(users);
        //   console.log(users.docs);
          users.docs.forEach(doc => {
              
            let data = doc.data();

            if (data.geolocation) {
              let marker = new google.maps.Marker({
                position: {
                  lat: data.geolocation.lat,
                  lng: data.geolocation.lng
                },
                map
              });
              marker.addListener('click',()=>{
                //   console.log(doc.id);
                    this.$router.push({name:'ViewProfile',params:{id:doc.id}})
              })
            }
          });
        });
    }
  },
  mounted() {
    let user = auth.currentUser;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          this.lat = pos.coords.latitude;
          this.lng = pos.coords.longitude;

          db.collection("users")
            .where("user_id", "==", user.uid)
            .get()
            .then(snapshot => {
              snapshot.forEach(doc => {
                db.collection("users")
                  .doc(doc.id)
                  .update({
                    geolocation: {
                      lat: pos.coords.latitude,
                      lng: pos.coords.longitude
                    }
                  });
              });
            })
            .then(() => {
              this.renderMap();
            });
        },
        err => {
          console.log(err);
          this.renderMap();
        },
        {
          enableHighAccuracy: true,
          maximumAge: 30000,
          timeout: 5000
        }
      );
    } else {
      this.renderMap();
    }
    //this.renderMap();
   // console.log(auth.currentUser);
  }
};
</script>

<style lang="scss">
.map {
  height: calc(100vh - 64px);
  .google-map {
    height: 100%;
  }
}
</style>