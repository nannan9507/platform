<template>
  <div class="home">
    <div class="vux-fixed">
      <tab :line-width="1">
        <tab-item selected>附近</tab-item>
        <tab-item>桌游</tab-item>
        <tab-item>引导者</tab-item>
      </tab>
    </div> 
    <p>start</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>ending</p>
    <input type="text" @focus="aaa($event)" @blur="bbb($event)"/>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux-components/tab'

export default {
  components: {
    Tab,
    TabItem,
  },
  mounted() {
    
  },
  data() {
    return {}
  },
  methods: {
    aaa(event) {
      console.log(1)
      event.target.scrollIntoView(true)
      // setTimeout(function(){
      //   event.target.scrollIntoView(true)
      //   console.log(1)
      // }, 200)
    },
    bbb(event) {
      setTimeout(function(){
        event.target.scrollIntoView(false)
        console.log(2)
      }, 200)
    }
  }
}
</script>