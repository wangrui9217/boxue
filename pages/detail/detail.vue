<template>
    <view>
        <image :src="src" mode="widthFix"  class="img1"/>
    </view>
</template>

<script>
    import api from '../../public/api'
    export default {
        name: "detail",
        data () {
            return {
                src: ''
            }
        },
        onLoad() {
            this.getDetail()
        },
        methods: {
            getDetail () {
                api.getHomeList().then(res => {
                    if (res.statusCode === 200) {
                        this.src = res.data.src
                    }
                })
            }
        },
        onShareAppMessage(res) {
            const advList = ['博学教育，多才的捷径', '点滴成长，我们陪在你身边']
            let randomNum = Math.floor(Math.random()  + 0.5)
            console.log(randomNum, 'randomNum')
            return {
                title: advList[randomNum],
                path: '/pages/detail/detail',
                imageUrl: '../../static/share.jpg',
                success: function(res) {
                    console.log("转发回调", res)
                },
                fail: function(res) {
                    console.log("失败")
                }
            }
        },
    }
</script>

<style scoped lang="less">
    .img1{
        width: 100%;
    }

</style>
