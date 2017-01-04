<template>
  <div>
    <mu-appbar title="Title">
      <mu-icon-button icon='menu' slot="left" />
    </mu-appbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
}
</script>