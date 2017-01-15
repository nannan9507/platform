<template>
  <div class="mobile">
    <div class="container">
      <router-view></router-view>
      <Cell></Cell>
    </div>
  </div>
</template>

<script>
import Cell from 'vux-components/cell'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  components: {
    Cell
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

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>