<template>
	<div class="red" @click="changeHeight">红的</div>
	<div class="green">绿的</div>
	<el-button type="primary">test</el-button>
</template>

<script setup lang="ts">
const changeHeight = (event: any) => {
	// console.log(event.target.style);
	event.target.style.height = '200px'
}
</script>

<style scoped>
@import './test.scss';
</style>
