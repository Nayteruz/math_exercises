<template>
  <h2>Количество примеров:</h2>
  <ul class="countExercises">
    <li v-for="num in counts">
      <span @click="setCountExercises(num)" :class="{'active': num === maxRows}">Примеров {{ num }}</span>
    </li>
  </ul>
  <ExercisesPlus :mathData="listExercises[0]"/>
  <ExercisesMinus :mathData="listExercises[1]"/>
  <ExercisesMultiple :mathData="listExercises[2]"/>
  <ExercisesDegree :mathData="listExercises[3]"/>
</template>

<script>
import ExercisesPlus from "@/components/ExercisesPlus.vue";
import ExercisesMinus from "@/components/ExercisesMinus.vue";
import ExercisesMultiple from "@/components/ExercisesMultiple.vue";
import ExercisesDegree from "@/components/ExercisesDegree.vue";
import {reactive, ref, watchEffect, provide} from "vue";

export default {
  components: {ExercisesPlus, ExercisesMinus, ExercisesMultiple, ExercisesDegree},
  setup() {
    const maxRows = ref(12);
    const actions = ref(['+', '-', '*', '/']);
    const counts = ref([12, 15, 21, 27, 30]);
    const listExercises = ref([
      {mathAction: actions.value[0], minValue: 1, maxValue: 70},
      {mathAction: actions.value[1], minValue: 10, maxValue: 70},
      {mathAction: actions.value[2], minValue: 1, maxValue: 11},
      {mathAction: actions.value[3], minValue: 2, maxValue: 99},
    ]);

    function setCountExercises(num) {
      maxRows.value = num;
    }

    provide('maxRows', maxRows);

    return {
      maxRows,
      listExercises,
      counts,
      setCountExercises,
    }
  }
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

.title-small {
  display: inline-block;
  margin: 5px;

  &.l1 {
    color: #777;
  }

  &.l2 {
    color: #2fb220;
  }

  &.l3 {
    color: #d56d6d;
  }

  &.l4 {
    color: #e842d2;
  }
}

ul.listExercises {
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media all and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
  }

  input {
    display: block;
    width: 60px;
    height: 40px;
    box-sizing: border-box;
    text-align: center;
    font-size: 18px;
    border: 2px solid #bbb;
    border-radius: 5px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    box-sizing: border-box;

    &.num {
      width: 20px;
    }

    &.symb {
      width: 10px;
    }

    &.prompt {
      width: 40px;
      border-radius: 5px;
      border: 2px solid #cdedca;
      height: 40px;
      cursor: pointer;
    }
  }

  .checkResult {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    background: #ebebeb;
    border-radius: 5px;
    cursor: pointer;
    padding: 0;
    margin: 0;
    color: #333;
    font-size: 14px;
    font-weight: bold;
    border: 2px solid #ebebeb;

    &.isTrue {
      border-color: #2fb220;
      color: #2fb220;
    }

    &.isFalse {
      border-color: #d59696;
      color: #d59696;
    }
  }
}

.countExercises {
  padding: 0;
  margin: 9px 0 0 0;
  list-style: none;
  display: flex;
  gap: 10px;

  li {
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      padding: 10px 20px;
      background: #d2d2d2;
      font-size: 14px;
      cursor: pointer;

      &.active {
        background: #afe3ba;
      }
    }
  }
}

</style>
