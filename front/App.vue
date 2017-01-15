<template>
  <div class="mobile">
    <div class="container">
      <router-view></router-view>
    </div>
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