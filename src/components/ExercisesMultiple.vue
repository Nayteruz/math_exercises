<template>
  <h2>Умножение чисел</h2>
  <h4 class="title-small l2">Правильно: {{ countResults().isTrue }}</h4>
  <h4 class="title-small l3">Неправильно: {{ countResults().isFalse }}</h4>
  <h4 class="title-small l4">Подсказка: {{ countResults().isPrompt }}</h4>

  <ul class="listExercises">
    <li v-for="row in results" :key="row">
      <span class="num">{{ row.num1 }}</span>
      <span class="symb">{{ row.action }}</span>
      <span class="num">{{ row.num2 }}</span>
      <span class="symb">=</span>
      <input type="text" v-model="row.inputResult">
      <button
          class="checkResult"
          :class="{'isTrue' : row.isResult === true, 'isFalse' : row.isResult === false}"
          @click="checkResult(row)">
        {{ row.buttonText }}
      </button>
      <span class="prompt" @click="checkPrompt(row)">{{ !row.prompt ? '?' : row.result }}</span>
    </li>
  </ul>
</template>

<script>
import {ref} from "vue";

export default {
  name: "ExercisesMultiple",
  setup() {
    const maxRows = ref(12);
    const actionView = ref('*');
    const results = ref([]);
    const inpVal = ref(0);
    const minValue = ref(1);
    const maxValue = ref(11);

    function mathRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function checkResult(row) {
      if (+row.inputResult === 0 || row.isClick) return;
      if (+row.inputResult === row.result) {
        row.buttonText = 'Правильно'
        row.isResult = true;
      } else if (+row.inputResult !== row.result) {
        row.buttonText = 'Неправильно'
        row.isResult = false;
      }
      row.isClick = true;
      return null;
    }

    function checkPrompt(row) {
      if (row.isResult === true) return;
      if(row.isClick){
        row.prompt = true;
      } else {
        row.prompt = true;
        row.buttonText = 'Подсказка'
        row.isResult = false;
        row.isClick = true;
      }
      return null;
    }

    function countResults() {
      let l1 = this.results.filter(x => x.isResult === true);
      let l2 = this.results.filter(x => x.isResult === false && x.prompt !== true);
      let l3 = this.results.filter(x => x.prompt === true);
      return {
        'isTrue': l1.length,
        'isFalse': l2.length,
        'isPrompt': l3.length,
      }
    }

    function generateInterval() {
      let n1 = mathRandom(minValue.value, maxValue.value);
      let n2 = mathRandom(minValue.value, maxValue.value);
      let r = eval(n1 + '*' + n2);

      if (n1 < n2) {
        return generateInterval()
      } else {
        return {
          n1, n2, r
        }
      }
    }

    function generateValue() {
      for (let n = 0; n < maxRows.value; n++) {
        let t = generateInterval();
        let n1 = t.n1;
        let n2 = t.n2;
        let r = t.r;
        results.value.push({
          num1: n1,
          num2: n2,
          action: actionView,
          result: r,
          isResult: null,
          isClick: false,
          inputResult: '',
          buttonText: 'Решить',
          prompt: false,
        })
      }
      return null;
    }

    generateValue();

    return {
      maxRows,
      results,
      inpVal,
      checkResult,
      countResults,
      checkPrompt
    }
  }
}
</script>

<style scoped lang="scss">

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


ul {
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
    border:2px solid #bbb;
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
</style>