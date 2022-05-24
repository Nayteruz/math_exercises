<template>
  <TitlesWithSmall :titleInfo="{'small': countResults(), title:'Умножение чисел'}"/>
  <ul class="listExercises">
    <li v-for="row in results" :key="row">
      <ExercisesItem :rowItem="row"/>
    </li>
  </ul>
</template>

<script>
import {ref, inject, watchEffect} from "vue";
import useMathFunc from "@/components/composables/useMathFunc"
import TitlesWithSmall from "@/components/TitlesWithSmall.vue";
import ExercisesItem from "@/components/ExercisesItem.vue"

export default {
  name: "ExercisesMultiple",
  components: {TitlesWithSmall, ExercisesItem},
  props: ['mathData'],
  setup(props) {
    const {countResults, generateValue, mathRandom} = useMathFunc();
    const rows = inject('maxRows');
    const mathAction = props.mathData.mathAction;
    const results = ref([...generateValue(rows.value, props.mathData.mathAction, props.mathData.minValue, props.mathData.maxValue, generateInterval)]);

    function generateInterval(min, max) {
      let n1 = mathRandom(min, max);
      let n2 = mathRandom(min, max);
      let r = eval(n1 + mathAction + n2);

      if (n1 < n2) {
        return generateInterval(min, max)
      } else {
        return {
          n1, n2, r
        }
      }
    }

    watchEffect(() => {
      results.value = generateValue(rows.value, mathAction, props.mathData.minValue, props.mathData.maxValue, generateInterval);
    })

    return {
      results,
      countResults,
    }
  }
}
</script>