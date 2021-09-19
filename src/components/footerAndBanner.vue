<template>
    <div class="footer-container">
        <div class="footer-banner">
            <span class="banner-text">Is there anyone else you would want us to add?</span>
            <div class="submit-btn">Submit a name</div>
        </div>
        <div class="hr-custom"></div>

        <div class="footer">
            <div class="footer-links">
                <a href="#">Terms and Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Contact Us</a>
            </div>
            <div class="footer-icons">
                
                <a href="#" class="follow">Follow us</a>
                <a href="#" class="icons"><img src="../../assets/img/facebook.svg" alt="facebook"></a>
                <a href="#" class="icons"><img src="../../assets/img/twitter.svg" alt="twitter"></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "footerAndBanner",
  data: () => {
    return {};
  },
  methods: {},
  created() {},
  computed: {},
};
</script>
<style scoped>
.footer-container{
    width: 65%;
    margin: 5vh auto 5vh auto;
}
.footer-banner{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-image:linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.619),
        rgba(255, 255, 255, 0.605)
        ), url("../../assets/img/bg-people.@2x.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    backdrop-filter: blur(5px);
    padding: 1rem; 
}
.hr-custom{
    border-top: 2px dotted black !important;
    margin: 2rem 0 2rem 0;
}
.banner-text{
    color: rgba(34, 34, 34, 0.925);
    font-size: 1.4rem;
    width: 45%;
}
.submit-btn{
    border: 1px solid rgba(34, 34, 34, 0.925) ;
    font-size: 1.3rem;
    padding: 0.8rem;
    width: 25%;
}
.submit-btn:hover{
    background:  rgba(34, 34, 34, 0.925) ;
    color:#fff;
    transition: ease-in-out 0.5s;
}
.footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.footer-links a{
    text-decoration: none;
    color: rgba(34, 34, 34, 0.925) ;
    margin: 0.5rem;
    font-size: 1.1rem;
}
.follow{
    text-decoration: none;
    color: rgba(34, 34, 34, 0.925) ;
    margin: 0.5rem;
    font-size: 1.1rem;

}
.icons{
    margin: 0.5rem;
}
@media all and (max-width: 900px) {
    .footer-banner{
        flex-direction: column;
    }
    .banner-text{
    color: rgba(34, 34, 34, 0.925);
    font-size: 1.4rem;
    width: 90%;
    }
    .submit-btn{
        border: 1px solid rgba(34, 34, 34, 0.925) ;
        font-size: 1.3rem;
        padding: 0.8rem;
        width: 80%;
    }
  
  
}
@media all and (max-width: 768px) {
    
  .footer{

    flex-direction: column;

}
  
}

</style>