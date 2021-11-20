<template>
  <div>
    <h1>user/other.vue</h1>
    <p>state.message: {{ $store.state.message }}</p>
    <button @click="$store.commit('updateMessage')">update</button>
  </div>
</template>
