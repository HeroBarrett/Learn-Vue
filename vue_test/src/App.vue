<template>
	<div class="app">
		<h1>{{msg}}</h1>
		<School :getSchoolName="getSchoolName"/>
		<Student v-on:atguigu="getStudentName"/>
	</div>
</template>

<script>
	import Student from './components/Student'
	import School from './components/School'

	export default {
		name:'App',
		components:{School,Student},
		data() {
			return {
				msg: '你好啊！',
			}
		},
		methods: {
			getSchoolName(name) {
				console.log('App收到了学校名：', name);
			},
			getStudentName(name) {
				console.log('demo被调用了！', name);
				
			}
		}
	}
</script>

<style scoped>
	.app {
		background-color: gray;
		padding: 5px;
	}
</style>
