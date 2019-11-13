<template>
	<div class="container-fluid">
		<div class="row">

			<div class="col-lg-12">

				
				<template>
					<div class="card">
						<div class="card-close">
							<div class="dropdown">
								<button type="button" id="closeCard3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle"><i
									 class="fa fa-ellipsis-v"></i></button>
								<div aria-labelledby="closeCard3" class="dropdown-menu dropdown-menu-right has-shadow"><a href="#" class="dropdown-item remove">
										<i class="fa fa-times"></i>Close</a><a href="#" class="dropdown-item edit"> <i class="fa fa-gear"></i>Edit</a></div>
							</div>
						</div>
						
						<form class="form form-inline">
							<div class="card-header d-flex align-items-center">
								<h3 class="h4">最新顾客列表</h3>
							</div>
							<select id="searchField" class="custom-select">
								<option value="cname">按昵称查询</option>
								<option value="cphone">按电话查询</option>
								<option value="cemail">按邮箱查询</option>
							</select>
							<input type="text" id="searchContent" class="form-control" />
							<button class="btn btn-info" @click="findOne" type="button">查询</button>
						</form>
						<div class="card-body">
							<div class="table-responsive">
								<table class="table table-striped table-hover">
									<thead>
										<tr>
											<th>#</th>
											<th>昵称</th>
											<th>头像</th>
											<th>电话</th>
											<th>邮箱</th>
											<!-- <th>顾客id</th> -->
											<th>操作</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(item,i) in list" v-bind:key='item' >
											<th scope="row">{{i+1}}</th>
											<!-- 	<td>{{item.cid}}</td> -->
											<td>{{item.cname}}</td>
											<td>{{item.cphoto}}</td>
											<td>{{item.cphone}}</td>
											<td>{{item.cemail}}</td>
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
</template>

<script>
	export default {
		mounted(){
			this.showAllCustomers();
		},
		data() {
			return {
			list: "",
			field: "",
			content: "",
			tid: "",
			}
		},
		methods: {
			showAllCustomers() {
				this.$axios.get("customers/fbt", {
						params: {
							tid: 1
						},
					})
					.then((response) => {

						this.list = response.data;
					})
			},
			findOne() {
				this.field = $("#searchField").val();
				this.content = $("#searchContent").val();
				this.$axios.get("customers", {
					params: {
						field: this.field,
						content: this.content,
						tid: 1
					}
				}).then((response) => {
					this.list = response.data;
				})
			}
		}
	}
</script>

<style>
</style>
