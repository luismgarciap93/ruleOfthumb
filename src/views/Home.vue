<template>
  <div>
    <div class="pope-bg d-flex flex-column justify-content-between mb-4">
      <navMenu class="" />
      <mainCard class="align-self-star" />
      <div class="d-flex info-bar">
        <div class="closing-text d-flex justify-content-end align-items-center">
          <p class="m-0">CLOSING IN</p>
        </div>
        <div
          class="days-remaining d-flex justify-content-start align-items-center"
        >
          <p class="m-0"><span class="number-days">22</span>days</p>
        </div>
      </div>
    </div>
    <div v-show="displayBanner" class="banner-container">
      <bannerInfo class="banner-box" @removeBanner="removeBanner"></bannerInfo>
    </div>
    <div class="title-frame mt-3">
      <span class="h1 previus-tittle">Previous Rulings</span>
      <button class="toggle-btn" @click="toggleListGrid">
        {{ toggleText }}
      </button>
    </div>
    <div v-show="!showList" class="celeb-container">
      <div
        class="col-10 col-sm-6 col-lg-4"
        v-for="(celeb, i) in celebArrRes"
        :key="i"
      >
        <celebrityFrame
          :celebrityArr="celeb"
          :index="i"
          @addPositive="addPositive(i)"
          @addNegative="addNegative(i)"
        ></celebrityFrame>
      </div>
    </div>
    <div v-show="showList" class="celeb-list-container">
      <div
        class="col-xl-8 col-md-11 m-auto mt-3 mb-3"
        v-for="(celeb, i) in celebArrRes"
        :key="i"
      >
        <celebrityFrameList
          :celebrityArr="celeb"
          :index="i"
          @addPositive="addPositive(i)"
          @addNegative="addNegative(i)"
        ></celebrityFrameList>
      </div>
    </div>
    <carousel :perPage="1" class="celeb-carousel">
      <slide v-for="(celeb, i) in celebArrRes" :key="i">
        <celebrityFrame
          :celebrityArr="celeb"
          :index="i"
          @addPositive="addPositive(i)"
          @addNegative="addNegative(i)"
        ></celebrityFrame>
      </slide>
    </carousel>
    <footerAndBanner></footerAndBanner>
  </div>
</template>

<script>
import navMenu from "../components/navMenu";
import mainCard from "../components/mainCard";
import bannerInfo from "../components/bannerInfo";
import footerAndBanner from "../components/footerAndBanner";
import celebrityFrame from "../components/celebrityFrame";
import celebrityFrameList from "../components/celebrityFrameList";
import celebData from "../../assets/data.json";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Home",

  components: {
    navMenu,
    mainCard,
    bannerInfo,
    footerAndBanner,
    celebrityFrame,
    celebrityFrameList,
    Carousel,
    Slide,
  },
  data: () => {
    return {
      displayBanner: true,
      celebArr: [],
      // showList: false,
    };
  },
  methods: {
    removeBanner() {
      this.displayBanner = false;
    },
    addPositive(index) {
      this.celebArr[index].votes.positive++;
      localStorage.setItem("celebrityArray", JSON.stringify(this.celebArr));
    },
    addNegative(index) {
      this.celebArr[index].votes.negative++;
      localStorage.setItem("celebrityArray", JSON.stringify(this.celebArr));
    },
    toggleListGrid() {
      this.$store.commit("changeList");
    },
  },
  computed: {
    celebArrRes() {
      return this.celebArr;
    },
    showList() {
      return this.$store.getters.showListState;
    },

    toggleText() {
      if (!this.showList) {
        return "Grid";
      } else return "List";
    },
  },
  created() {
    let localCelebArray = JSON.parse(localStorage.getItem("celebrityArray"));
    if (localCelebArray == null) {
      this.celebArr = [...celebData.data];
    } else {
      this.celebArr = localCelebArray;
    }
  },
};
</script>

<style scoped>
.pope-bg {
  height: 80vh;
  background-image: linear-gradient(
      to bottom,
      rgba(1, 1, 1, 0.7),
      rgba(1, 1, 1, 0)
    ),
    url("../../assets/img/pope-francis.@2x.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.celeb-container {
  display: flex;
  flex-wrap: wrap;
  width: 65vw;
  margin: auto;
}
.celeb-list-container {
  margin: auto;
}
.celeb-carousel {
  display: none;
}

.closing-text {
  background: rgba(95, 95, 95, 0.666);
  width: 30%;
  color: #fff;
  height: 5vh;
  font-weight: 200;
}
.days-remaining {
  background: rgba(253, 253, 253, 0.7);
  width: 70%;
  color: rgb(88, 88, 88);
  height: 5vh;
}
.toggle-btn {
  border: 2px solid #111;
  padding: 0.3rem 0;
  width: 10%;
}
.number-days {
  font-weight: 700;
  margin-left: 1vw;
}
.banner-box {
  margin: auto;
}
.title-frame {
  display: flex;
  width: 65vw;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}
@media all and (max-width: 1024px) {
  .celeb-container {
    width: 90vw;
  }
}
@media all and (max-width: 750px) {
}
@media all and (max-width: 576px) {
  .celeb-container {
    display: none;
  }
  .celeb-list-container {
    display: none;
  }
  .celeb-carousel {
    display: block;
  }
  .toggle-btn {
    display: none;
  }
  .previus-tittle {
    margin: auto;
  }
}
</style>
