<template>
  <swiper class="home-swiper">
    <swiper-item v-for="item in banners" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper';
    export default {
        name: "HomeSwiper",
        props: {
            cbanners:{
                type:Array,
                default() {
                    return []
                }
            }
        },
        data() {
          return {
            isLoad:false,
                banners: [{
                 id:1,
                 image:'https://ctcmc.oss-cn-zhangjiakou.aliyuncs.com/free_movie/upload/2020/06/17/eb6021923b1b4cecbadbf3d03123a8a7.jpg'
            },{
                 id:2,
                 image:'https://ctcmc.oss-cn-zhangjiakou.aliyuncs.com/free_movie/upload/2020/06/17/eb6021923b1b4cecbadbf3d03123a8a7.jpg'
            },
            {
                 id:3,
                 image:'https://ctcmc.oss-cn-zhangjiakou.aliyuncs.com/free_movie/upload/2020/06/17/eb6021923b1b4cecbadbf3d03123a8a7.jpg'
            },
            {
                 id:4,
                 image:'https://ctcmc.oss-cn-zhangjiakou.aliyuncs.com/free_movie/upload/2020/06/17/eb6021923b1b4cecbadbf3d03123a8a7.jpg'
            },
                        {
                 id:5,
                 image:'https://ctcmc.oss-cn-zhangjiakou.aliyuncs.com/free_movie/upload/2020/06/17/eb6021923b1b4cecbadbf3d03123a8a7.jpg'
            },
                        {
                 id:6,
                 image:'https://ctcmc.oss-cn-zhangjiakou.aliyuncs.com/free_movie/upload/2020/06/17/eb6021923b1b4cecbadbf3d03123a8a7.jpg'
            }
],
          }
        },
        components:{
            Swiper,SwiperItem
        },
        methods: {
          imageLoad(){
            if (!this.isLoad){
              console.log('---');
              this.$emit('swiperImageLoad')
              this.isLoad = true
            }
          }
        },
    }
</script>

<style scoped>


</style>
