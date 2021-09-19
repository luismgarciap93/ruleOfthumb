<template>
  <div class="">
  <b-navbar toggleable="lg" class="justify-content-around align-items-center" type="dark" >
    <div>
      <b-navbar-brand class="text-light" href="#">Rule of thumb</b-navbar-brand>
    </div>
    <div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item   href="#">Past Trials</b-nav-item>
        <b-nav-item   href="#">How It Works</b-nav-item>
        <b-nav-item   href="#">Login / Sign in</b-nav-item>
        <b-nav-item   href="#"><b-icon style="color:white" icon="search"></b-icon></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: "navMenu",
  data: () => {
    return {};
  },
  methods: {},
  created() {},
  computed: {},
};
</script>
<style scoped>
nav .navbar-nav li a{
  color: white !important;
  }
</style>


