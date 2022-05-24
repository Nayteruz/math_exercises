<template>
  <span class="num">{{ rowItem.num1 }}</span>
  <span class="symb">{{ rowItem.mathAction }}</span>
  <span class="num">{{ rowItem.num2 }}</span>
  <span class="symb">=</span>
  <input type="text" v-model="rowItem.inputResult" @keydown.enter="checkResult(rowItem)">
  <button
      class="checkResult"
      :class="{'isTrue' : rowItem.isResult === true, 'isFalse' : rowItem.isResult === false}"
      @click="checkResult(rowItem)">
    {{ rowItem.buttonText }}
  </button>
  <span class="prompt" @click="checkPrompt(rowItem)">{{ !rowItem.prompt ? '?' : rowItem.result }}</span>
</template>

<script>
import useMathFunc from "@/components/composables/useMathFunc"

export default {
  name: "ExercisesItem",
  props: ['rowItem'],
  setup() {
    const {checkResult, checkPrompt} = useMathFunc();
    return {
      checkPrompt,
      checkResult,
    }
  }
}
</script>
