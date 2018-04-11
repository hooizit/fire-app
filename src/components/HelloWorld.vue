<template>
  <div>
    <article v-for="(location, idx) in locations" :key="idx">
      <img :src="location.image" :alt="location.name">
      <h1>{{ location.name }}</h1>
      <button @click="deleteLocation(location.id)">Delete</button>
    </article>
    <form @submit="addLocation(name, image)">
      <input v-model="name" placeholder="Наименование места">
      <input v-model="image" placeholder="URL-изображения">
      <button type="submit">Добавить новое место</button>
    </form>
  </div>
</template>

<script>
import { db } from "../main";

export default {
  name: "HelloWorld",
  data() {
    return {
      locations: []
    };
  },
  firestore() {
    return {
      locations: db.collection("locations").orderBy("createdAt")
    };
  },
  methods: {
    addLocation(name, image) {
      const createdAt = new Date();
      db.collection("locations").add({ name, image, createdAt });
    },
    deleteLocation(id) {
      db
        .collection("locations")
        .doc(id)
        .delete();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
