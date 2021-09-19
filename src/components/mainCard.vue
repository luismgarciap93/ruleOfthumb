<template>
  <div class="main-card d-flex flex-column justify-content-between">
    <div class="m-4">
      <span>What's your opinion on</span>
      <h1 class="main-card-title">{{ popeData.name }} ?</h1>
      <p class="main-card-description">{{ popeData.description }}</p>
      <a
        class="more-info"
        target="_blank"
        href="https://en.wikipedia.org/wiki/Pope_Francis"
        ><span>
          <img src="../../assets/img/wikipedia.svg" alt="" /> More
          information</span
        ></a
      >
      <h5>What's Your Veredict?</h5>
    </div>
    <div class="d-flex vote-bar-container">
      <div class="vote-bar thumbs-up d-flex">
        <img class="img-custom" src="../../assets/img/thumbs-up.svg" alt="" />
      </div>
      <div class="vote-bar thumbs-down d-flex">
        <img class="img-custom" src="../../assets/img/thumbs-down.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainCard",
  data: () => {
    return {
      popeData: {
        name: "Pope Francis",
        description:
          "He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up).",
        category: "religion",
        picture: "kanye.png",
        lastUpdated: "2020-03-10T23:08:57.892Z",
        votes: {
          positive: 23,
          negative: 36,
        },
      },
    };
  },
  methods: {},
  created() {},
  computed: {},
};
</script>
<style scoped>
.main-card {
  width: 35%;
  height: 65%;
  background-color: rgba(15, 13, 13, 0.479);
  backdrop-filter: blur(5px);
  text-align: left;
  color: white;
  margin: 2vh 0 2vh 18vw !important;
}

.vote-bar {
  width: 50%;
  justify-content: center;
  height: 100%;
}
.vote-bar-container {
  height: 15%;
}
.thumbs-up {
  background: #47a8a2;
}
.thumbs-up:hover {
  background: #57d1c9;
}
.thumbs-down {
  background: #d39623;
}
.thumbs-down:hover {
  background: #f3ac29;
}
.img-custom {
  width: 2.5rem;
  margin: 1rem;
}
.more-info {
  color: #fff;
  text-decoration: none;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 100;
}
.main-card-description {
  font-size: 1.3rem;
  font-weight: 400;
}
@media all and (max-width: 900px) {
  .main-card {
    font-size: 15px;
    margin: 2vh 0 2vh 10vw !important;
  }
}
@media all and (max-width: 1100px) {
  .main-card-description {
    font-size: 1.2rem;
  }
}
@media all and (max-width: 768px) {
  .main-card {
    font-size: 15px;
    width: 50%;
  }
  .vote-bar-container {
    height: 10vh;
  }
  .img-custom {
    width: 2rem;
  }
  .main-card-description {
    font-size: 1.2rem;
    font-weight: 400;
  }
}
@media all and (max-width: 484px) {
  .main-card {
    width: 70%;
  }

  .vote-bar-container {
    height: 400px;
  }
  .main-card-description {
    font-size: 1rem;
  }
  .img-custom {
    width: 1.5rem;
  }
}
</style>