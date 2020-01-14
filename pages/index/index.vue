<template>
	<view class="content">
		<swiper :indicator-dots="indicatorDots"
				:autoplay="autoplay" :interval="interval" :duration="duration"
		:style="{height: imgHeight + 'px'}">
			<block v-for="(item, index) in backgrounds" :key="index">
				<swiper-item>
					<image :src="item" class="swiper-item" mode="widthFix"/>
				</swiper-item>
			</block>
		</swiper>
		<view class="title-conter" v-if="introList.length > 0">
			<view class="title">选择博学教育四大优势</view>
			<view class="sub-title">老师用心|孩子开心|家长放心</view>
		</view>
		<view class="intro-list">
			<view class="intro-box" v-for="(item, index) in introList" :key="index">
				<image class="intro-img" :src="item.src" mode="widthFix" @click="previewImg(item.src)"/>
				<view class="intro-text1">{{item.tip}}</view>
				<view class="intro-text2">{{item.intro}}</view>
			</view>
		</view>
		<view class="title-conter" v-if="advList.length > 0">
			<view class="title">针对不同年龄段开设托班</view>
			<view class="sub-title">解决孩子无人照看的窘境</view>
		</view>
		<view class="class-list">
			<view class="inner-box" :class="{'text': !item.src}" v-for="(item, index) in advList" :key="index">
				<img :src="item.src" class="inner-img" v-if="item.src"/>
                <view class="text-title" v-if="!item.src">{{item.title}}</view>
                <view v-if="!item.src">{{item.detail}}</view>
			</view>
		</view>
        <view class="title-conter">
            <view class="title">解决6大人群烦恼</view>
            <view class="sub-title">解决学习难题，发展素质教育</view>
        </view>
        <view class="resolve-box">
            <image src="../../static/p3_img.png" class="inner-img" mode="widthFix"/>
        </view>
        <view class="subject-box" v-if="showSubject">
            <image src="../../static/p8_left.jpg" class="inner-img" mode="widthFix"/>
            <view>
                <view>培养学习习惯，强化基础知识</view>
                <view>提升学习效率、加强时间观念</view>
                <view>巩固学科知识，培养学习兴趣</view>
                <view>错题疑点解答，提升文化成绩</view>
            </view>
        </view>
        <view class="title-conter">
            <view class="title">六层严选好老师</view>
            <view class="sub-title">好老师才有好效果</view>
        </view>
        <view class="resolve-box">
            <image src="../../static/temp_adv1.jpg" class="inner-img" mode="widthFix"/>
        </view>
        <view class="title-conter" v-if="notice">
            <view class="title">公告</view>
        </view>
        <view class="resolve-box" v-if="notice">
            <image :src="notice" class="inner-img" mode="widthFix" @click="goDetail"/>
        </view>
        <view class="bottom-text">到底了~</view>
        <view class="contact" @click="goConnact" v-if="notice && navigationBar_fiexd">
            <image src="../../static/mobile.png" mode="widthFix" class="inner-img"/>
            <view>立即报名</view>
<!--            <image src="../../static/join.gif" mode="widthFix"/>-->
        </view>
<!--		<button open-type="contact" class="contact">联系我们</button>-->
<!--		<image src="../../static/temp_adv1.jpg" mode="widthFix"/>-->
	</view>
</template>

<script>
    import api from '../../public/api'
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 500,
				backgrounds: [],
				introList: [],
                notice: '',
                advList: [],
                showSubject: '',
                navigationBar_fiexd: false
			}
		},
		onLoad() {
		    this.getHomeList()
		},
        onPageScroll(e) {
            if (e.scrollTop > 800) {
                this.navigationBar_fiexd = true;
            } else {
                this.navigationBar_fiexd = false;
            }
            console.log(e.scrollTop)
        },
		onShareAppMessage(res) {
		    const advList = ['博学教育，多才的捷径', '点滴成长，我们陪在你身边']
            let randomNum = Math.floor(Math.random()  + 0.5)
            console.log(randomNum, 'randomNum')
			return {
				title: advList[randomNum],
				path: '/pages/index/index',
				imageUrl: '../../static/share.jpg',
				success: function(res) {
					console.log("转发回调", res)
				},
				fail: function(res) {
					console.log("失败")
				}
			}
		},
		methods: {
		    goConnact () {
                uni.makePhoneCall({
                    phoneNumber: '18862769971',
                    success: (res) => {
                        console.log('调用成功!')
                    },
                    fail: (res) => {
                        console.log('调用失败!')
                    }
                })
            },
            goDetail () {
                uni.navigateTo({
                    url:  `/pages/detail/detail`
                })
            },
            getHomeList () {
                api.getHomeList().then(res => {
                    if (res.statusCode === 200) {
                        console.log(res)
                        this.backgrounds = res.data.backgrounds
                        this.introList = res.data.introList
                        this.notice = res.data.notice
                        this.advList = res.data.advList
                        this.showSubject = res.data.showSubject
                    }
                    console.log(res)
                })
            },
			previewImg (src) {
				uni.previewImage({
					current: src, // 当前显示图片的http链接
					urls: [src]
				})
			}

		},
		computed: {
			imgHeight () {
				return (39/75)*(uni.getSystemInfoSync().screenWidth)
			}
		}
	}
</script>

<style lang="less" scoped>
	.content {
		.swiper-item{
			width: 100%;
		}
	}
	.title-conter{
		text-align: center;
		line-height: 2;
		padding: 40rpx;
		.title{
			color: #00aaef;
			font-size: 30rpx;
		}
		.sub-title{
			color: #8d8d8d;
			font-size: 20rpx;
		}
	}
	.intro-list{
		display: flex;
		flex-wrap: wrap;
		padding-left: 20rpx;
		.intro-box{
			box-shadow:0px 0px 10px 0px rgba(230,230,230,1);
			border-radius:4px;
			border:1px solid rgba(238,240,244,1);
			width: 324rpx;
			margin-left: 20rpx;
			margin-bottom: 20rpx;
		}
		.intro-img{
			width: 100%;
		}
		.intro-text1{
			color: #505050;
			font-size: 24rpx;
			text-align: center;
			line-height: 2;
		}
		.intro-text2{
			font-size: 20rpx;
			color:#9b9b9b;
			padding: 0 10rpx 10rpx;
			line-height: 1.5;
		}
	}
	.class-list{
		display: flex;
		flex-wrap: wrap;
		padding-left: 20rpx;
		.text{
			background-color: #f06429;
			color: #fff;
			font-size: 20rpx;
			padding: 20rpx;
			box-sizing: border-box;
		}
		.text-title{
			text-align: center;
			font-size: 24rpx;
			line-height: 1.8;
		}
		.inner-box{
			width: 324rpx;
			margin-left: 20rpx;
			margin-bottom: 20rpx;
			height: 270rpx;
			line-height: 1.4;
			.inner-img{
				width: 100%;
				height: 100%;
				border: 2rpx solid #f06429;
			}
		}
	}
    .resolve-box{
        padding: 0 40rpx;
        .inner-img{
            width: 100%;
        }
    }
    .subject-box{
        margin-top: 40rpx;
        display: flex;
        align-items: center;
        padding: 0 40rpx;
        font-size: 24rpx;
        line-height: 2;
        font-weight: bold;
        color:#9b9b9b;
        .inner-img{
            width: 50%;
            margin-right: 20rpx;
        }
    }
    .bottom-text{
        padding: 20rpx 0 100rpx;
        text-align: center;
        color:#9b9b9b;
        font-size: 24rpx;
    }
    .contact{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80rpx;
        background-color: #325374;
        color: #fff;
        font-size: 24rpx;

        .inner-img{
            width: 25rpx;
            margin-right: 10rpx;
        }
    }
</style>
