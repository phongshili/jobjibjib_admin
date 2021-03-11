<template>
  <div class="page">
    <div class="page-header">
      <h3>ຈັດການປະກາດຂ່າວ </h3>
     
        <div class="input-group">
          <input class="input" type="text" placeholder="Text input" />
        <i class="fas fa-search"></i>
        </div>
        <button @click="$router.push({name: 'Manage_Employer' })" class="button is-success">ເພີ່ມ</button>

    </div>
    <div class="box">
      <div class="manage-list">
          <p>All(6)</p>
          <p>Show Both(3)</p>
          <p>Employer(0)</p>
          <p>Job Seeker(3)</p>
          <p>Pending(0)</p>
          <p>Expired(3)</p>
        </div>
      <div class="page-content">
        <table class="table is-fullwidth" id="mytable">
          <thead>
            <tr>
              <th class="is-md">ຮູບພາບ</th>
              <th class="is-md ">ຫົວຂໍ້ຂ່າວ</th>
              <th class="is-sm is-right">ວັນທີ່ລົງຂ່າວ</th>
              <th class="is-sm is-center">ສະຖານະ</th>
              <th class="is-sm is-center">ເຄື່ອງມື</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i,index) in news" :key="index">
              <td> <img :src="$server + '/img/' + i.image" /></td>
              <td>{{i.title}}</td>
              <td class="is-right">{{i.start_date}}</td>
              <td class="is-center">{{i.status}}</td>
              <td class="is-center option">
                <span
                  @click="EditID(i._id, i.skill)"
                  class="icon edit"
                >
                  <i class="far fa-edit"></i>
                </span>
                <span class="icon del">
                  <i class="far fa-trash-alt"></i>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    news:[],
  }),
  created(){
    this.FetchNews()
  },
  methods:{
    FetchNews(){
      this.$axios.get(`${this.$server}admin-get-news`).then((res)=>{
        this.news = res.data.mapNews
      })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>