<template>
  <div class="hero-add">
    <legend>编辑英雄</legend>
    <div class="form-group">
      <label>英雄名称</label>
      <input type="text" v-model="heroObj.heroName" class="form-control"/>
    </div>
    <div class="form-group">
      <label>英雄性别</label>
      <div>
        <input name='gender' value="男" v-model="heroObj.gender" type="radio"> 男
        <input name='gender' value="女" v-model="heroObj.gender" type="radio"> 女
      </div>
    </div>
    <button @click='edit' class="btn btn-primary">提交</button>
  </div>
</template>

<script>
export default {
  created () {
    const id = this.$route.params.id
    this.$axios.get(`/heroes/${id}`).then(res => {
    //   console.log(res.data)
      this.heroObj = res.data
    })
  },
  data () {
    return {
      heroObj: {
        id: '',
        heroName: '',
        gender: '男',
        cTime: ''
      }
    }
  },
  methods: {
    edit () {
      if (this.heroObj.heroName === '') return
      const id = this.$route.params.id
      this.$axios.put(`/heroes/${id}`, this.heroObj).then(res => {
        this.$router.push('/hero')
      }
      )
    }
  }
}
</script>
