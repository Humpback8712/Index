<template>
  <div>
    <div class="container">
      <div class="text">
        <div class="inner">在趣丸clans，</div>
        <div class="inner typed-out">和同频伙伴一起玩！</div>
        <div class="inner end">已经组织过298场社区活动🔥</div>
        <div class="inner btn">立即加入！🥳</div>
      </div>
      <img class="logo" alt="logo" src="./assets/demo.png">
    </div>
    <div class="more">
      <div :class="isVisible?'animate__animated animate__zoomIn':''">
        <img :class="isVisible?'':'hidden'" class="avatar" src="./assets/contact-img.svg" v-observe-visibility="visibilityChanged">
      </div>
      <div class="about-us" :class="isVisible?'animate__animated animate__zoomIn':''">
        <div class="title">我们是谁？</div>
        <div class="content">趣丸，年轻人的线下社交联盟,趣丸，年轻人的线下社交联盟,,趣丸，年轻人的线下社交联盟,,趣丸，年轻人的线下社交联盟,,趣丸，年轻人的线下社交联盟,,趣丸，年轻人的线下社交联盟,,趣丸，年轻人的线下社交联盟,,趣丸，年轻人的线下社交联盟,,v,趣丸，年轻人的线下社交联盟,趣丸，年轻人的线下社交联盟,</div>
      </div>
    </div>
    <div class="project">
        <div class="project-text"  :class="isAsVisible?'animate__animated animate__fadeInLeft':''">
          <div class="project-title">
            举办的活动...
          </div>
          <div class="box-container">
            <div class="proj-imgbx">
              <img src="./assets/logo.png" />
              <div class="proj-txtx">
                <h4>{title}</h4>
              </div>
            </div>
            <div class="proj-imgbx">
              <img src="./assets/logo.png" />
              <div class="proj-txtx">
                <h4>{title}</h4>
              </div>
            </div>
            <div class="proj-imgbx">
              <img src="./assets/logo.png" />
              <div class="proj-txtx">
                <h4>{title}</h4>
              </div>
            </div>
            <div class="proj-imgbx">
              <img src="./assets/logo.png" />
              <div class="proj-txtx">
                <h4>{title}</h4>
              </div>
            </div>
            <div class="proj-imgbx">
              <img src="./assets/logo.png" />
              <div class="proj-txtx">
                <h4>{title}</h4>
              </div>
            </div>
            <div class="proj-imgbx">
              <img src="./assets/logo.png" />
              <div class="proj-txtx">
                <h4>{title}</h4>
              </div>
            </div>

          </div>
        </div>
        <div class="project-img"  v-observe-visibility="visibilityAsChanged">
          <img class="logo-man" :class="isAsVisible?'animate__animated animate__fadeInTopRight':''" src="./assets/header-img.svg" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import 'animate.css';

export default {
  name: 'App',
  data() {
    return {
      show: true,
      isVisible: true,
      isAsVisible: true,
    }
  },
  methods:{
    visibilityChanged (isVisible) {
      console.log(isVisible)
      this.isVisible = isVisible
    },
    visibilityAsChanged (isVisible) {
      console.log(isVisible)
      this.isAsVisible = isVisible
    }
  },
}
</script>

<style>

.typed-out{
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid orange;
  width: 0;
  animation: typing 2s steps(9, end) forwards, blink 1.3s infinite;
}
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink {
  from { border-color: transparent }
  to { border-color: orange; }
}
.hidden{
  visibility: hidden;
}
.text {
  font-weight: 900;
  color: #ffffff;
  text-align: center;
  font-size: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.inner {
  height: 90px;
  color: #CABDF6;
}
.btn {
  margin-left: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 30px;
  color: #D1F571;
  border: 4px solid #D1F571;
  border-radius: 20px;
}
.end {
  font-size: 30px;
  font-weight: 100;
}
@keyframes updown {
  0% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(-20px);
  }
}
.logo {
  /*animation: updown 3s linear infinite;*/
  width: 300px;
  height: 680px;
  margin-left: 30px;
}
.about-us {
  border-radius: 5px;
  height: 500px;
  width: 700px;
  margin-top: 100px;
  margin-left: 130px;
}
.container {
  height: 100%;
  background-image: url("https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp");
  padding-top: 70px;
  display: flex;
  justify-content: center;
}
.project {
  height: 100%;
  background-image: url("./assets/banner-bg.png");
  display: flex;
}
.project-text{
  width: 50%;
  display: flex;
  flex-direction: column;
}
.project-img{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: updown 3s linear infinite;

}
.logo-man {
  width: 500px;
  height: 500px;
}
.more {
  background-color: #0D1117;
  display: flex;
  padding-left: 10%;
}
.down-text {

}
.avatar {
  animation: updown 3s linear infinite;
  width: 350px;
  height: 400px;
  margin-top: 30%;
}
.project-title {
  height: 100px;
  color: #D1F571;
  font-size: 50px;
  font-weight: bolder;
  text-align: center;
  margin-top: 90px;
}
.box-container{
  margin-left: 50px;
  width: 800px;
  height: 600px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.proj-imgbx {
  width: 200px;
  height: 200px;
  margin-left: 30px;
   position: relative;
   border-radius: 30px;
   overflow: hidden;
   margin-bottom: 24px;
 }
.proj-imgbx::before {
  content: "";
  background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
  opacity: 0.85;
  position: absolute;
  width: 100%;
  height: 0;
  transition: 0.4s ease-in-out;
}
.proj-imgbx:hover::before {
  height: 100%;
}
.proj-txtx {
  position: absolute;
  text-align: center;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s ease-in-out;
  opacity: 0;
  width: 100%;
}
.proj-imgbx:hover .proj-txtx {
  top: 50%;
  opacity: 1;
}
.proj-txtx h4 {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1.1em;
}
.proj-txtx span {
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.8px;
}
.title {
  height: 50px;
  color: #CABDF6;
  font-size: 50px;
  font-weight: bolder;
}
.content{
  font-size: 25px;
  margin-top: 30px;
  font-weight: lighter;
  word-break: break-all;
  color: white;
}
#app {
  background-color: #000000;
  padding: 0;
}
* {
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
}
</style>
