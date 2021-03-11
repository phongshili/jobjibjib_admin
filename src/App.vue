<template>
  <div id="app">
    <sidebar v-if="$store.getters.isAuth" />
    <div class="content">
      <div class="content-area">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "./components/sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>
<style lang="scss">
#app {
  display: flex;
  height: 100%;
  font-family: $font;
}
.content {
  margin-left: 220px;
  left: -220px;
  flex-grow: 1;
  .content-area {
    margin-top: 40px;
  }
}
.page-header {
  margin-bottom: 30px;
  .page-title {
    font-size: 30px;
    font-weight: 700;
    color: $font-color;
    margin: 0;
  }
}

li {
  list-style-type: none;
}
.page-item {
  font-size: 1em;
  justify-content: center;
  margin: 0.25rem;
  text-align: center;

  &.active {
    a {
      background-color: #3273dc;
      border-color: #3273dc;
      color: #fff;
      min-width: 2.5em;
    }
  }

  a {
    border-color: #978989;
    color: #363636;
    border-radius: 5px;
    padding: 7px 15px 7px 15px;
    min-width: 2.5em;
    &:focus {
      outline: none;
    }
  }
}
</style>
