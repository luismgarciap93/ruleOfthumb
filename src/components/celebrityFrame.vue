<template>
  <div class="main-frame" :style="bannerBgImage()">
    <div class="filler"></div>
    <div class="frame-header">
        <div v-show="voted">
            <div v-if="btnNegativeAct"  class="vote-btn vote-btn-down">
                <img src="../../assets/img/thumbs-down.svg" alt="" />
            </div>
            <div v-else  class="vote-btn vote-btn-up">
                <img src="../../assets/img/thumbs-up.svg" alt="" />
            </div>
        </div>
      <div class="celebrity-name">{{celebArrayRes.name}}</div>
    </div>
    <div class="frame-text">
      <p>{{celebArrayRes.description}}</p>
    </div>
    <div class="frame-time">
      <span v-if="!voted">{{getRelativeTime}} in {{celebArrayRes.category}} </span>
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
</template>

<script>
import moment from "moment";

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
    reVote(){
        this.voted=false
        this.btnPositiveAct=false
        this.btnNegativeAct=false

    },
    bannerBgImage(){
    return  'background-image: linear-gradient(to bottom,rgba(1,1,1,0.7),rgba(1,1,1,0)), url(/img/' + this.celebrityArr.picture + '.jpg)';
    
  },
    
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
      },
      getRelativeTime(){
        let voteDate=this.celebrityArr.lastUpdated
        return  moment(voteDate, "YYYYMMDD").fromNow();
    },
  
  },
  created() {

  },
};
</script>
<style scoped>
.main-frame {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 20rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin: 1rem;
}
.filler {
  height: 40%;
}
.frame-header {
  display: flex;
  align-items: center;
}
.celebrity-name {
  font-size: 1.7rem;
  margin-left: 0.3vw;
  text-align: left;
  text-justify: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color:#fff;
}
.vote-btn {
  padding: 0.3rem 0.5rem;
  margin-right: 0.4rem;
}
.active-btn{
    border:2px solid white
}

.frame-text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1vw 0 1vw;
}
.frame-text p {
  text-align: left;
  text-justify: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color:#fff;
}
.frame-time {
  align-self: flex-end;
}
.frame-time span {
  font-size: 0.7rem;
  margin-right: 1vw;
  color: #fff;
}
.frame-buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0.2vh 1vw 1vh auto;
}
.vote-btn-up {
  background: #47a8a2;
}
.vote-btn-down {
  background: #f3ac29;
}
.submit-vote-btn {
  border: 1px solid #fff;
  padding: 0.5rem;
  color: #fff;
  background: rgba(1, 1, 1, 0.7);
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
</style>