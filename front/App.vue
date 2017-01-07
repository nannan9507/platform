<template>
  <div class="mobile">
    <mu-appbar title="Title">
      <mu-icon-button icon='menu' slot="left" />
    </mu-appbar>
    <div class="container">
      <router-view></router-view>
    </div>
    <mu-paper>
      <mu-bottom-nav :value="paperbar.value" @change="handleChange">
        <mu-bottom-nav-item v-for="item in paperbar.barList" :value="item.value" :title="item.title" :icon="item.icon" :href="item.href"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      bottomNav: 'movies',
    }
  },
  computed: {
    ...mapState(['paperbar'])
  },
  methods: {
    ...mapActions(['savePaperValue']),
    handleChange (val) {
      this.savePaperValue(val);
    }
  }
}
</script>