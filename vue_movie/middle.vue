<template>
	<div id="sideNavbar" style="clear:both">
		<div class="page-content d-flex align-items-stretch">
			<!-- Side Navbar -->
			<nav class="side-navbar">
				<!-- Sidebar Header-->
				<div class="sidebar-header d-flex align-items-center">
					<div class="avatar"><img src="img/wanda.jpg" alt="..." class="img-fluid rounded-circle"></div>
					<div class="title">
						<h1 class="h4">万达影院</h1>
						<p>万达</p>
					</div> 
				</div>
				<!-- Sidebar Navidation Menus--><span class="heading">Main</span>
				<ul class="list-unstyled">
					<li> 
						<router-link to="/contentInner"> <i class="icon-home"></i>Home</router-link>
					</li>
					<li>
						<router-link to="/orders"><i class="icon-grid"></i> 订单</router-link>
					</li>
					<li>
						<router-link to="/customer"><i class="icon-user"></i> 顾客</router-link>
					</li>
					<li>
						<router-link to="/chart"> <i class="fa fa-bar-chart"></i>Charts </router-link>
					</li>
					<li><a href="forms.html"> <i class="icon-padnote"></i>Forms </a></li>
					<li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class="icon-interface-windows"></i>Example
							dropdown </a>
						<ul id="exampledropdownDropdown" class="collapse list-unstyled ">
							<li><a href="#">Page</a></li>
							<li><a href="#">Page</a></li>
							<li><a href="#">Page</a></li>
						</ul>
					</li>
					<li><a href="login.html"> <i class="icon-interface-windows"></i>Login page </a></li>
				</ul><span class="heading">Extras</span>
				<ul class="list-unstyled">
					<li> <a href="#"> <i class="icon-flask"></i>Demo </a></li>
					<li> <a href="#"> <i class="icon-screen"></i>Demo </a></li>
					<li> <a href="#"> <i class="icon-mail"></i>Demo </a></li>
					<li> <a href="#"> <i class="icon-picture"></i>Demo </a></li>
				</ul>
			</nav>
			<router-view style="padding: 0px;"></router-view>
		</div>

	</div>
</template>

<script>
	
</script>

<style>

</style>
