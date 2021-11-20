<template>
  <section>
    <!--    <h1>{{ message }}</h1>-->
    <!--    <p>id: {{ this.$route.params.id }}</p>-->
    <!--    <p>{{ users[0].id }} : {{ users[1].name }}</p>-->
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }} {{ user.name }}
      </li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/users'

export default {
  asyncData({ params }) {
    return axios
      .get(url)
      .then((response) => {
        return {
          users: response.data,
        }
      })
      .catch((error) => console.log(error))
  },
  // data() {
  //   return {
  //     message: '_id.vueを表示',
  //   }
  // },
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
}
</script>
