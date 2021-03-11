<template>
  <div class="page">
    <div class="page-header">
      <h3>ຈັດການທັກສະ</h3>
       <button @click="$router.push({name: 'Skill' })" class="button is-danger">ກັບຄືນ</button>
    </div>
    <div class="box">
      <div class="insert-edit">
        <input
        v-model="new_SubSkill" 
        class="input" type="text" placeholder="Text input" />
        <button v-if="!SubSkill_Id"
        @click="AddSubSkill"
        class="button is-success">ເພີ່ມ</button>
        <button v-else
        @click="EditSubSkill"
         class="button is-link">ແກ້ໄຂ</button>
      </div>
      <div class="page-content">
        <table class="table is-fullwidth" id="mytable">
          <thead>
            <tr>
              <th>ຊື້ທັກສະ</th>
              <th class="is-sm is-center">ເຄື່ອງມື</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i,index) in SubSkills" :key="index">
              <td>{{i.subskill}}</td>
              <td class="option is-center">
                <span 
                @click="EditID(i._id,i.subskill)"
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
    SubSkills:[],
    new_SubSkill:"",
    SubSkill_Id:"",
    Skill_Id:'',
  }),
  created(){
    this.FetchSubSkills()
  },
  methods:{
       EditID(id,subskill){
      (this.SubSkill_Id = id), (this.new_SubSkill = subskill)
    },
    FetchSubSkills(){
      this.$axios.get(`${this.$server}admin-findId-skills/` + this.$route.params.id).then((response) =>{
        this.SubSkills = response.data.findById.subSkills;
      })
    },
    AddSubSkill(){
        this.$axios.post(`${this.$server}admin-add-subskills`,{
        subskill : this.new_SubSkill,
        skill_id : this.$route.params.id,
        }).then(()=>{
            this.new_SubSkill="",
            this.FetchSubSkills()
        })
    },
    EditSubSkill(){
      this.$axios.put(`${this.$server}admin-update-subskills`,{
        id : this.SubSkill_Id,
        skill_id : this.$route.params.id,
        subskill : this.new_SubSkill,
      }).then(()=>{
        this.FetchSubSkills(),
        this.new_SubSkill='',
        this.subskill=''
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