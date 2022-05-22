<template>
  <div class="banner2">
    <div class="text">
        <h3>也可以在這些地方<br>找到"好運"</h3>
        <h3></h3>
        <div class="icon">
        <a href="https://www.instagram.com/luckypopcorn/?fbclid=IwAR06VR5EOVeAFbZZESQ4KMkW-oXpqYew-hvAqFYTobRe8HU9C-7O_nJnvn4"><font-awesome-icon :icon="['fab', 'instagram-square']" /></a>
        <a href="https://www.facebook.com/luckypopcorn"><font-awesome-icon :icon="['fab', 'facebook-square']" /></a>
        <a href="https://www.facebook.com/luckypopcorn"><font-awesome-icon :icon="['fab', 'line']" /></a>
        </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
.banner2 {
    background-image: url(../assets/images/banner2.png);
    width: 100%;
    height: 450px;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
    @media screen and (max-width: 768px) {
      margin: 0 0 20px 0;
    }
    .text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background:linear-gradient(90deg,rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .8) 50%, rgba(255, 255, 255, 0) 100%);
      width: 600px;
      height: 300px;
      @media screen and (max-width: 768px) {
      width: 100%;
      margin: 0 0 20px 0;
    }
    }
    h3 {
        font-size: 40px;
        color: #d67675;
        font-weight: 700;
        text-align: center;
        line-height: 60px;
    }
    .icon{
      display: flex;
    }
    a {
        font-size: 70px;
        color: #d67675;
        font-weight: 700;
        text-decoration: none;
        padding: 20px 20px 0px 20px;
        transform: translateY(0);
        transition: .6s;
        i {
            padding-right: 10px;
        }
        &:hover {
            transform: translateY(-5px);
        }
    }
}
</style>

