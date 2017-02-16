<template>
  <div class="mobile">
    <div class="container">
      <tab>
        <tab-item selected>附近</tab-item>
        <tab-item>桌游</tab-item>
        <tab-item>引导者</tab-item>
      </tab>
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
import { Tab, TabItem } from 'vux-components/tab'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Tab,
    TabItem,
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