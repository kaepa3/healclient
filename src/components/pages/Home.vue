<script setup lang="ts">
import { getCurrentInstance } from "vue";
const prop = getCurrentInstance()?.appContext.config.globalProperties;
console.log("open" + prop?.$server_url);
</script>

<template>
  <router-link to="/login">Login</router-link> ・
  <router-link to="/signup">Signup</router-link>
  <h1>this is home</h1>
</template>
