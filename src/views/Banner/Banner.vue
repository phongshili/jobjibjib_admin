<template>
  <div class="page">
    <div class="page-header">
      <h3>ຈັດການໂຄສະນາ </h3>
     
        <div class="input-group">
          <input class="input" type="text" placeholder="Text input" />
        <i class="fas fa-search"></i>
        </div>
        <button @click="$router.push({name: 'Manage_Banner' })" class="button is-success">ເພີ່ມ</button>

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
              <th class="is-md ">link</th>
              <th class="is-sm is-right">ວັນທີ່ລົງໂຄສະນາ</th>
              <th class="is-sm is-center">ສະຖານະ</th>
              <th class="is-sm is-center">ເຄື່ອງມື</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="https://madewithnetwork.ams3.cdn.digitaloceanspaces.com/spatie-space-production/3075/nuxtjs-2.jpg" class="tb-img" alt=""></td>
              <td>Semicolon</td>
              <td class="is-right">2/28/21</td>
              <td class="is-center"><div class="status">
                Show Both
                </div></td>
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
  data:() =>({
    banner:[]
  }),
  methods:{
    FetchBanner(){
      this.$axios.get(`${this.$server}admin-get-banner`).then((res) => {
        this.banner = res.data.getBanner 
      })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>