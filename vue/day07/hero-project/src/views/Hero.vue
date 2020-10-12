<template>
  <div class="hero">
    <p><a @click='toHeroAdd' href="javascript:;" class="btn btn-primary">添加英雄</a></p>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>英雄名称</th>
          <th>英雄性别</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='item in list' :key='item.id'>
          <td>{{ item.id }}</td>
          <td>{{ item.heroName }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.cTime | time}}</td>
          <td>
            <button @click='goEdit(item.id)' class="btn btn-success">编辑</button>
            &nbsp;
            <button @click='del(item.id)' class="btn btn-danger">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import moment from 'moment'
// 这个也是全局也可以写过滤器
export default {
  created () {
    this.getList()
  },
  // 这里的过滤器是局部过滤器  所以要写成函数
  // filters: {
  //   time (value) {
  //     return moment(+new Date(value)).format('YYYY年MM月DD日 HH:mm:ss')
  //   }
  // },
  data () {
    return {
      list: []
    }
  },
  methods: {
    getList () {
      this.$axios.get('/heroes').then(res => {
        this.list = res.data
      })
    },
    del (id) {
      const flag = confirm('确认删除?')
      if (flag) {
        // 删除
        this.$axios.delete(`/heroes/${id}`).then(res => {
          this.getList()
        })
      }
    },
    toHeroAdd () {
      this.$router.push('/hero-add')
    },
    goEdit (id) {
      this.$router.push(`/hero-edit/${id}`)
    }
  }
}
</script>

<style>

</style>
