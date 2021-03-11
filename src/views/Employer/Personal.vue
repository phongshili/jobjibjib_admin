<template>
  <div class="page">
    <div class="page-header">
      <h3>ຈັດການຜູ້ຈ້າງ</h3>
     
        <div class="input-group">
          <input class="input" type="text" placeholder="Text input" />
        <i class="fas fa-search"></i>
        </div>
        <button @click="$router.push({name: 'Add_Personal' })" class="button is-success">ເພີ່ມ</button>

    </div>
    <div class="box"> 
      <div class="manage-list">
          <p>All(6)</p>
          <p>Approve(3)</p>
          <p>Pending(0)</p>
          <p>Fail(3)</p>
        </div>
      <div class="page-content">
        <table class="table is-fullwidth" id="mytable">
          <thead>
            <tr>
              <th class="is-md">ຊື່ ແລະ ນາມສະກຸນ</th>
              <th class="is-md ">ແຂວງຢູ່ປະຈຸບັນ</th>
              <th class="is-sm is-right">ເບີໂທ</th>
              <th class="is-sm is-center">ສະຖານະ</th>
              <th class="is-sm is-center">ເຄື່ອງມື</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i,index) in personal" :key="index">
              <td>{{i.employer_per.name + ' ' + i.employer_per.lastname}}</td>
              <td>{{i.employer_per.district_id.provinceId.name}}</td>
              <td class="is-right">{{i.tel}}</td>
              <td class="is-center">{{i.status}}</td>
              <td class="is-center option">
                <span
                  @click="$router.push({
                    name: 'Edit_Personal',
                    params:{id:i._id}
                  })"
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
    personal:[],
  }),
  created(){
this.FetchPersonal()
  },
  methods:{
    FetchPersonal(){
      this.$axios.get(`${this.$server}admin-get-empindividual`).then((response) =>{
        this.personal = response.data.mapEmpIndividual
      })
    }
  }

  
};
</script>

<style lang="scss" scoped>
</style>