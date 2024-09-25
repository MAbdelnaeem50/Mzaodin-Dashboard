<template>
  <div class="min-h-screen bg-base-200">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style>
*{
  font-family: "Noto Sans Arabic", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}
</style>
