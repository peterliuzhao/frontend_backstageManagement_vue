<template>
	<div  >
		
		<router-view name="top"></router-view>
		<div class="page-content d-flex align-items-stretch">
		<router-view name="sideNavbar"></router-view>
		<router-view name="contentInner" class="col-md-12" style="padding:0px"></router-view> <!---->
		<router-view name="pageFooter" class="col-md-12" style="padding:0px"></router-view> <!---->
		</div>
		<!-- <router-view name="middle"></router-view>
		
		<router-view name="bottom"></router-view> -->
	
	</div>
</template>

<script>
</script>

<style>
	
</style>
