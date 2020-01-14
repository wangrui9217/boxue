const basicUrl = 'https://www.fastmock.site/mock/0470b5a97150d1b84b9144096f2049bc/boxue'
const util = {
	//封装网络请求
	request(url, data, method = 'GET') {
		return new Promise((resolev, reject) => {
			uni.request({
				url: `${basicUrl}${url}`,
				data: data,
				method: method,
				header: {
					'content-type': 'application/x-www-form-urlencoded' // 默认值
				},
				success: function(res) {
					resolev(res)
				},
				fail: function(res) {
					reject(res)
				}
			});
		})
	},
};
export default {
	getHomeList(data) {
		return util.request('/api/home', data, 'GET')
	}
}
