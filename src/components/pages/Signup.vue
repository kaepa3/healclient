<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const password = ref("");
const signup = () => {
  alert("click" + name.value + password.value);
};
</script>

<template>
  <form id="signup-form">
    <div id="subtitle">Signup</div>
    <div>
      <input type="text" v-model="name" placeholder="username" />
    </div>
    <div>
      <input type="password" v-model="password" placeholder="password" />
    </div>
    <button type="button" name="button" @click="signup">signup</button>
  </form>
</template>

<style scoped>
#subtitle {
  margin: 10px;
  font-size: 22px;
}

input {
  width: 250px;
  text-align: center;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 3px;
  border: 1px solid;
  margin: 0 auto 10px auto;
}

input:focus {
  width: 300px;
}
</style>
