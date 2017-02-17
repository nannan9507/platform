<template>
  <div class="home">
    <tab>
      <tab-item selected>附近</tab-item>
      <tab-item>桌游</tab-item>
      <tab-item>引导者</tab-item>
    </tab>
    <group>
      <x-input title="1" v-newbox></x-input>
    </group>
  </div>
</template>

<script>
import { Group, XInput } from 'vux'
import { Tab, TabItem } from 'vux-components/tab'

export default {
  components: {
    Group,
    XInput,
    Tab,
    TabItem,
  },
  mounted() {
    // window.onresize = function() {
    //   alert(1)
    // }
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>