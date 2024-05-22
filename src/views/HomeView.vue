<template>
  <div class="home-view">
    <HeaderTitle />
    <div class="content">
      <Sidebar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '../components/HeaderTitle.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  components: {
    HeaderTitle,
    Sidebar
  }
}
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  display: flex;
  flex: 1;
}
</style>
