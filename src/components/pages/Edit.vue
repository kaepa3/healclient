<script setup lang="ts">
if (localStorage.getItem("token") == null) {
  location.href = "/";
}
</script>

<template>
  <h1>this is edit</h1>
</template>
