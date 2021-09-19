<template>
  <div class="main-frame" :style="bannerBgImage()">
    <div class="top-container">
      <div class="thumbs-header col-1">
        <div v-show="voted">
            <div v-if="btnNegativeAct"  class="vote-btn vote-btn-down">
                <img src="../../assets/img/thumbs-down.svg" alt="" />
            </div>
            <div v-else  class="vote-btn vote-btn-up">
                <img src="../../assets/img/thumbs-up.svg" alt="" />
            </div>
        </div>
      </div>
      <div class="text-container col-7 ">
        <div class="celebrity-name">{{celebArrayRes.name}}</div>
        <p class="celebrity-description">{{celebArrayRes.description}}</p>
      </div>
      <div class="buttons-container col-3 ">
        <div class="frame-time">
          <span v-if="!voted">1 month ago in {{celebArrayRes.category}} </span>
          <span v-else>Thank you for your vote!</span>
        </div>
        <div class="frame-buttons">
          <button :disabled="voted" :class="btnPositiveAct ? 'vote-btn vote-btn-up active-btn' :'vote-btn vote-btn-up' " @click="activePositive">
            <img src="../../assets/img/thumbs-up.svg" alt="" />
          </button>
          <button :disabled="voted" :class="btnNegativeAct ? 'vote-btn vote-btn-down active-btn' :'vote-btn vote-btn-down' " @click="activeNegative">
            <img src="../../assets/img/thumbs-down.svg" alt="" />
          </button>
          <button v-if="!voted" class="submit-vote-btn" @click="sendVote">Vote Now</button>
          <button v-else class="submit-vote-btn" @click="reVote">Vote Again</button>
       </div>
      </div>
    </div>
    <div>
      <div class="votes-container">
      <div class="thumbs-up-bar votes-bar" :style="'width:'+positiveResult+'%'">
        <span
          >{{positiveResult}} %</span
        >
      </div>
      <div
        class="thumbs-down-bar votes-bar" :style="'width:'+negativeResult+'%'"
      >
        <span
          >{{negativeResult}} %</span
        >
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "celebrityFrame",
  props: {
    celebrityArr: Object,
    index: Number,
  },
  data: () => {
    return {
      celebArr: [],
      voted:false,
      btnPositiveAct:false,
      btnNegativeAct:false,
      disableVoting:true,
    };
  },
  methods: {
    activePositive(){
        this.btnPositiveAct=true
        this.btnNegativeAct=false
    },
    activeNegative(){
        this.btnNegativeAct=true
        this.btnPositiveAct=false
    },

    addPositive() {
      this.$emit('addPositive');
      this.voted=true
    },
    addNegative() {
      this.$emit('addNegative');
      this.voted=true
    },
    sendVote(){
        if(this.btnPositiveAct){
            this.$emit('addPositive');
             this.voted=true
        }else if (this.btnNegativeAct){
            this.$emit('addNegative');
            this.voted=true
        }

    },
    bannerBgImage(){
    return  'background-image: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(119,119,119,1) 16%, rgba(88,88,88,1) 100%), url(/img/' + this.celebrityArr.picture + '.jpg)';
    
  },
    reVote(){
        this.voted=false
        this.btnPositiveAct=false
        this.btnNegativeAct=false

    }
  },
  computed: {
      celebArrayRes(){
          return this.celebrityArr
      },
      positiveResult(){
          let positive = (this.celebArrayRes.votes.positive/(this.celebArrayRes.votes.positive+this.celebArrayRes.votes.negative))*100
          return positive.toFixed(1)
      },
      negativeResult(){
          let negative = (this.celebArrayRes.votes.negative/(this.celebArrayRes.votes.positive+this.celebArrayRes.votes.negative))*100
          return negative.toFixed(1)
      },
      voteMessage(){
          if(this.voted==false){
              return "Vote now"
          }else return "Vote Again"
      }
  },
  created() {

  },
};
</script>
<style scoped>
.main-frame{
   /* background-image: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(119,119,119,1) 16%, rgba(88,88,88,1) 100%),
    url("../../assets/img/pope-francis.png"); */
  background-position:left;
  background-repeat: no-repeat;
  background-size:contain;
  position: relative;
}
.top-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.thumbs-header{
  width: 5%;
}
.celebrity-name{
  color: #fff;
  font-size: 2.3rem;
  text-align: left;
}
.celebrity-description{
  text-align: left;
  text-justify: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color:#fff;
}
.buttons-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 1rem;
}
.frame-time {
  align-self: flex-end;
}
.frame-time span {
  font-size: 1rem;
  
  color: #fff;
}
.frame-buttons{
 align-self: flex-end;
  

}
.submit-vote-btn {
  border: 1px solid #fff;
  padding: 0.5rem;
  color: #fff;
  background: rgba(1, 1, 1, 0.4);
}
.vote-btn {
  padding: 0.3rem 0.5rem;
  margin-right: 0.4rem;
}
.active-btn{
    border:2px solid white
}
.vote-btn-up {
  background: #47a8a2;
}
.vote-btn-down {
  background: #f3ac29;
}
.votes-container {
  display: flex;
}
.votes-bar {
  color: white;
  font-size: 1.3rem;
}
.thumbs-up-bar {
  background: rgba(71, 168, 162, 0.75);
  text-align: left;
}
.thumbs-down-bar {
  background: rgba(243, 172, 41, 0.75);
  text-align: right;
}
.thumbs-up-bar span {
  margin-left: 0.7vw;
}
.thumbs-down-bar span {
  margin-right: 0.7vw;
}
@media all and (max-width: 900px) {

  .celebrity-name{

  font-size: 1.5rem;
  text-align: center;
}
.celebrity-description{
  color: #fff;
  text-align: left;
}
  
  
}
</style>