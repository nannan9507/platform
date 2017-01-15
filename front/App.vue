<template>
  <div class="mobile">
    <div class="container">
      <router-view></router-view>
    </div>
<!--     <mu-paper>
      <mu-bottom-nav :value="paperbar.value" @change="handleChange">
        <mu-bottom-nav-item v-for="item in paperbar.barList" :value="item.value" :title="item.title" :icon="item.icon" :href="item.href"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-paper> -->
    
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  components: {

  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['paperbar', 'appbar'])
  },
  methods: {
    ...mapActions(['savePaperValue', 'saveAppbarTitle']),
    handleChange (val) {
      this.savePaperValue(val);
    }
  }
}
</script>
<!-- 
<style lang="less">
@import '~vux/src/styles/reset.less'; 
</style> -->