<template>
  <div class="page">
    <div class="page-header">
      <h3>ຈັດການປະເພດຂ່າວ</h3>
    </div>
    <div class="box">
      <div class="insert-edit">
        <input
        v-model="new_Category" 
        class="input" type="text" placeholder="Text input" />
        <button v-if="!category_Id"
        @click="AddCategory"
        class="button is-success">ເພີ່ມ</button>
        <button v-else
        @click="EditCategory"
         class="button is-link">ແກ້ໄຂ</button>
      </div>
      <div class="page-content">
        <table class="table is-fullwidth" id="mytable">
          <thead>
            <tr>
              <th>ຊື້ໝວດໝູ່</th>
              <th class="is-center is-sm">ເຄື່ອງມື</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i,index) in category" :key="index">
              <td>{{i.name}}</td>
              <td class="option is-center">
                <span 
                @click="EditID(i._id,i.name)"
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
    category:[],
      new_Category:"",
    category_Id:"",
  }),
  created(){
    this.FetchCategory()
  },
  methods:{
    EditID(id,name){
      (this.category_Id = id), (this.new_Category = name)
    },
    FetchCategory(){
      this.$axios.get(`${this.$server}admin-get-newsType`).then((res)=>{
        this.category = res.data.mapNewsType
      })
    },
    AddCategory(){
      this.$axios.post(`${this.$server}admin-add-newsType`,{
        id: this.category_Id,
        name : this.new_Category,
      }).then(() =>{
        this.FetchCategory(),
        this.category_Id = ""
      })
    },
    EditCategory(){
      this.$axios.put(`${this.$server}admin-update-newsType`,{
        id: this.category_Id,
        name: this.new_Category
      }).then(()=>{
        this.FetchCategory(),
        this.category_Id = ""
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  .box {
    .insert-edit {
      display: flex;
      justify-content: center;
      padding-bottom: 20px;
      input {
        max-width: 80%;
      }
      button {
        margin-left: 10px;
      }
    }
  }
}
</style>