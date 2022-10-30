<template>
  <Tutorial />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tutorial from '../components/pages/Tutorial.vue'

@Component({
  components: {
    Tutorial
  }
})
export default class Home extends Vue {}
</script>
