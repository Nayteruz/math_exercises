<template>
  <h2>{{ titleInfo.title }}</h2>
  <h4 class="title-small l2">Правильно: {{ titleInfo.small.isTrue }}</h4>
  <h4 class="title-small l3">Неправильно: {{ titleInfo.small.isFalse }}</h4>
  <h4 class="title-small l4">Подсказка: {{ titleInfo.small.isPrompt }}</h4>
</template>

<script>
export default {
  name: "TitlesWithSmall",
  props:['titleInfo']
}
</script>

<style scoped>

</style>