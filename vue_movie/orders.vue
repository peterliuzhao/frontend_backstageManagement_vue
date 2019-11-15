<template>
	<div class="content-inner">
		<!-- Page Header-->
		<header class="page-header">
			<div class="container-fluid">
				<h2 class="no-margin-bottom">订单</h2>
			</div>
		</header>
		<!-- Breadcrumb-->
		<div class="breadcrumb-holder container-fluid">
			<ul class="breadcrumb">
				<li class="breadcrumb-item"><a href="index.html">Home</a></li>
				<li class="breadcrumb-item active">订单</li>
			</ul>
		</div>

		<section class="tables">


			<div class="container-fluid">
				<div class="row">

					<div class="col-lg-12">
						<router-view name="ordersChart"></router-view>
						<form class="form form-inline">
							<button class="btn btn-info" @click="showAllOrders" type="button">所有订单</button>
							<label>当前日期：</label> <input type="date" class="form-control" v-model="dates" />
							<button class="btn btn-info" @click="showDayOrders" type="button">查询</button>
						</form>
						<template>
							<div class="card">
								<div class="card-close">
									<div class="dropdown">
										<button type="button" id="closeCard3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle">
											<i class="fa fa-ellipsis-v"></i></button>
										<div aria-labelledby="closeCard3" class="dropdown-menu dropdown-menu-right has-shadow"><a href="#" class="dropdown-item remove">
												<i class="fa fa-times"></i>Close</a><a href="#" class="dropdown-item edit"> <i class="fa fa-gear"></i>Edit</a></div>
									</div>
								</div>
								<div class="card-header d-flex align-items-center">
									<h3 class="h4">订单表</h3>
								</div>
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-striped table-hover">
											<thead>
												<tr>
													<th>#</th>
													<th>订单号</th>
													<th>订单生成时间</th>
													<th>订单修改时间</th>
													<th>订单价</th>
													<th>订单状态</th>
													<!-- <th>顾客id</th> -->
													<th>场次id</th>
													<th>操作</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="(item,i) in allOrders">
													<th scope="row">{{i+1}}</th>
													<td>{{item.oid}}</td>
													<td>{{item.ostartTime|fmtDate}}</td>
													<td>{{item.oupdateTime|fmtDate}}</td>
													<td>{{item.ototalprice}}</td>
													<td>{{item.ostatus}}</td>
													<!-- <td>{{item.cid}}</td> -->
													<td>{{item.fsid}}</td>
													<td>删除</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</template>

					</div>

				</div>
			</div>

			<button type="button" class="btn btn-light" id="prevBtn">前一页</button>
			<button type="button" class="btn btn-light" id="nextBtn">下一页</button>


		</section>

	</div>
</template>

<script>
	export default {

		created() {
			this.showAllOrders();
		},
		data() {
			return {
				allOrders: "",
				dates: "",
			}
		},
		methods: {
			showAllOrders() {

				axios.get("orders", {
						params: {
							tid: "1"
						}
					})
					.then((response) => {

						this.allOrders = response.data;
					})
			},
			showDayOrders() {
				axios.get("orders/findDay", {
						params: {
							tid: "1",
							date: this.dates
						}
					})
					.then((response) => {

						this.allOrders = response.data;
					})
			},
		},
		filters: {
			fmtDate(data) {
				if (data == null) {
					return null;
				} else {
					var dd = new Date(data);
					var y = dd.getFullYear();
					var m = dd.getMonth() + 1;
					var d = dd.getDate();
					var h = dd.getHours();
					var mm = dd.getMinutes();
					var s = dd.getSeconds();
					return y + "-" + m + "-" + d + " " + h + ":" + mm + ":" + s;
				}
			}
		}
	}
</script>

<style>
</style>
