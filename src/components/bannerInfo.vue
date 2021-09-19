<template>
    <div  class="d-flex banner-container align-items-center justify-content-between">
        <div class="d-flex flex-column banner-text"><span class="speak-out">Speak out. Be heard.</span><strong class="counted">Be counted</strong></div>
        <div class="banner-p"><p class="text-justify">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p></div>
        <div  class="banner-icon"><button @click="removeBanner"><v-icon large style="color:black;" >mdi-close</v-icon></button></div>
    </div>
</template>
<script>
export default {
  name: "bannerInfo",
  data: () => {
    return {
      
    };
  },
  methods: {
      removeBanner() {
      this.$emit("removeBanner");
    },
  },
  created() {},
  computed: {},
};
</script>
<style scoped>
.banner-container{
    background: rgba(208, 208, 208, 0.659);
    width: 65%;
}
.counted{
    font-size: 1.5rem;
}
.speak-out{
    font-size: 1rem;
    font-weight: 400;
}
.banner-p{
    text-align: left;
    width: 70%;
    transform: translateY(10%);
}
.banner-text{
    width: 20%;
}
.banner-icon{
    margin-right: 1rem;
}
@media all and (max-width: 900px) {
  .banner-icon{
      display:none;
  } 
  .banner-p{
    transform: translateY(5%);
}
.counted{
    font-size: 1rem;
    }
.banner-container{
    
    width: 80%;
    padding: 1rem;
}
  
}
@media all and (max-width: 768px) {
    .counted{
    font-size: 1rem;
    }
    .banner-container{
    
    width: 90%;
    padding: 1vw;
}
.banner-p{
    text-align: left;
    width: 55%;
    transform: translateY(0%);
}
.banner-text{
    width: 30%;
}
    

}
@media all and (max-width: 484px) {
    
}
</style>  