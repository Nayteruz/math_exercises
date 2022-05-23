<template>
  <ExercisesPlus/>
  <ExercisesMinus/>
  <ExercisesMultiple/>
  <ExercisesDegree/>
</template>

<script>
  import ExercisesPlus from "@/components/ExercisesPlus.vue";
  import ExercisesMinus from "@/components/ExercisesMinus.vue";
  import ExercisesMultiple from "@/components/ExercisesMultiple.vue";
  import ExercisesDegree from "@/components/ExercisesDegree.vue";
  export default {
    components: {ExercisesPlus, ExercisesMinus, ExercisesMultiple, ExercisesDegree}
  }
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

html,
body {
  padding: 0;
  margin: 0;
  font-size: 100%;
  height: 100%;
  min-height: 100%;
  font-family: 'Roboto', sans-serif;;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px 20px 50px;

  font-weight: normal;
}
</style>
