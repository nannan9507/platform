<template>
  <div class="mobile">
    <div class="container">
      <div class="content">
        <router-view></router-view>
      </div>
      <tabbar>
        <tabbar-item v-for="item in paperbar.barList" :link="item.link" :selected="$route.path === item.link">
          <span slot="label">{{ item.title }}</span>
        </tabbar-item>
      </tabbar>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

import { Tabbar, TabbarItem } from 'vux-components/tabbar'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  mounted() {
    console.log(this)
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['paperbar', 'appbar'])
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>