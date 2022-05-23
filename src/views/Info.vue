<template>
  <div class="wrap">
    <div class="container">
      <h2>關於好運</h2>
      <div class="aboutbody">
        <div class="item">
          <div class="itemhead">
            <img src="../assets/images/about1-1.png" alt="" srcset="" />
            
            <h3>luckypopcorn</h3>
          </div>
          <img src="../assets/images/about1.png" alt="" srcset="" />
          <div class="text">
            <p><font-awesome-icon :icon="['fas', 'heart']" /> 9,999個讚</p>
            <p>
              好運堅持使用最好的原料
            </p>
            <p>
              <font-awesome-icon :icon="['fas', 'check']" /> 美國非基改玉米粒
            </p>
            <p><font-awesome-icon :icon="['fas', 'check']" /> 爆米花專用椰子油</p>
            <p><font-awesome-icon :icon="['fas', 'check']" /> 美國進口焦糖</p>
          </div>
        </div>
        <div class="item">
          <div class="itemhead">
            <img src="../assets/images/about1-1.png" alt="" srcset="" />
            <h3>luckypopcorn</h3>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.9583744175125!2d121.61067421561208!3d25.001530345744925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd4c8aeb65b%3A0x5dd0ea45ce3735ab!2z5aW96YGL54iG57Gz6Iqx!5e0!3m2!1szh-TW!2stw!4v1653241815682!5m2!1szh-TW!2stw"
            width="100%"
            height="487px"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div class="text">
            <p><font-awesome-icon :icon="['fas', 'heart']" /> 9,999個讚</p>
            <p>好運爆米花也有網美實體店喔！</p>
            <p>歡迎大家來打卡拍照</p>
            <p>拿著好運爆米花人人是網美</p>
            <p>來店還有免費試吃活動</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.wrap {
  .container {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin-top: 30px;
    h2 {
      font-size: 40px;
      color: #93a38a;
      position: relative;
      margin-bottom: 50px;
      text-align: center;
      &:after {
        content: "";
        width: 200px;
        border-bottom: 5px dotted #93a38a;
        position: absolute;
        bottom: -50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      @media screen and (max-width: 768px) {
        margin-bottom: 40px;
      }
    }
  }
  .aboutbody {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .item {
      width: 48%;
      height: 100%;
      margin: 10px;
      box-shadow: 0 0 5px #93a38a;
      
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      iframe {
        @media screen and (max-width: 768px) {
          height: 100%;
        }
      }
      .itemhead {
        display: flex;
        align-items: center;
        margin: 10px 0 10px 20px;
        img {
          width: 10%;
          height: 10%;
        }
        h3 {
          font-size: 26px;
          padding-left: 20px;
          color: #5c5e66;
        }
      }
      .text {
        margin: 10px 0 0 20px;
        font-size: 20px;
        p {
          padding-bottom: 10px;
          color: #5c5e66;
        }
        & > :first-child svg{
          color: #d67675;
        }
      }
    }
  }
}
</style>
