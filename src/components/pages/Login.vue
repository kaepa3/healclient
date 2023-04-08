<script setup lang="ts">
import { ref } from "vue";

let name = ref("");
const password = ref("");
const login = () => {
  const url = "/login";
  const method = "POST";
  const headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };
  const body = JSON.stringify({
    name: name,
    password: password,
  });
  fetch(url, { method, headers, body })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Faild to login. Please retry");
        name.value = "";
        password.value = "";
        return { token: "" };
      }
    })
    .then((json) => {
      const token = json.token;
      if (token.length > 0) {
        localStorage.setItem("token", token);
        location.href = "/edit";
      }
    });
};
</script>

<template>
  <form id="signup-form">
    <div id="subtitle">Login</div>
    <div>
      <input type="text" v-model="name" placeholder="username" />
    </div>
    <div>
      <input type="password" v-model="password" placeholder="password" />
    </div>
    <button type="button" name="button" @click="login">signup</button>
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
