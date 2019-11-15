<template>

	<div>
		<h2>最近10日营业额</h2>
		
		<v-chart :options="option" id="echarts"></v-chart>
	</div>
</template>

<script>
	import 'echarts/lib/chart/line'

	export default {
		created() {
			this.showchart();
		},
		data() {
			return {
				option: {}
			}
		},
		methods: {
			showchart() {
				var xlist = [];
				var ylist = [];
				this.$axios.get("orders/tenmoney", {
						params: {
							tid: "1"
						}
					})
					.then((response) => {
						for (var i in response.data) {
							xlist.push(response.data[i].dates);
							ylist.push(response.data[i].sum);
						}
						console.log(xlist);
						var option = {
							// title: {
							// 	text: "最近10日订单",

							// },
							tooltip: { //提示条
								trigger: 'axis',
								axisPointer: {
									type: 'cross',
									label: {
										backgroundColor: '#6a7985'
									}
								}
							},
							legend: {
								data: ['销售量']
							},
							xAxis: {
								type: 'category',
								boundaryGap: false, //是否显示所有点

								data: xlist.reverse()
							},
							yAxis: {
								type: 'value',

							},
							series: [{
								// data: [820, 932, 901, 934, 1290, 1330, 1320],
								data: ylist.reverse(),
								type: 'line',
								name: "营业额",
								stack: "营业额",
								areaStyle: {},
								// itemStyle: {
								// 	normal: {
								// 		lineStyle: {
								// 			color: 'blue'
								// 		}
								// 	}
								// },


								label: {
									normal: {
										show: true,
										position: 'top'
									}
								},
							}]
						};
						this.option = option;
					})
			}
		}
	}
</script>

<style scoped="scoped">
	#echarts {
		width: 800px;
		height: 500px;
	}
</style>
