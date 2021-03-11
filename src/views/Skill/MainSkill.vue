<template>
  <div class="page">
    <div class="page-header">
      <h3>ຈັດການທັກສະ</h3>
    </div>
    <div class="box">
      <div class="insert-edit">
        <input
        v-model="new_Skill" 
        class="input" type="text" placeholder="Text input" />
        <button v-if="!Skill_Id" 
        @click="AddSkills"
        class="button is-success">ເພີ່ມ</button>
        <button v-else
        @click="EditSkill"
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
            <tr v-for="(i,index) in Skills" :key="index">
              <td>{{i.skill}}</td>
              <td class="option is-center">
                 <!-- <span
                 @click="$router.push({
                   name: 'SubSkill',
                   params:{id:i._id}
                 })"
                  class="icon has-text-primary">
                  <i class="fas fa-folder-plus"></i>
                </span> -->
                <span 
                @click="EditID(i._id, i.skill)"
                class="icon edit" 
                >
                  <i class="far fa-edit"></i>
                </span>
                <span class="icon del"
                @click="DeleteSkill(i._id)">
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
    Skills:[],
    new_Skill:"",
    Skill_Id:"",
  }),
  created(){
    this.FetchSkills()
  },
  methods:{
    EditID(id,skill){
      (this.Skill_Id = id), (this.new_Skill = skill)
    },
    FetchSkills(){
      this.$axios.get(`${this.$server}admin-get-skills`).then((response) =>{
        this.Skills = response.data.mapSkill;
      })
    },
    AddSkills(){
      this.$axios.post(`${this.$server}admin-add-skills`,{
        skill: this.new_Skill
      }).then(()=>{
        this.new_Skill = "",
        this.FetchSkills()
      })
    },
    EditSkill(){
      this.$axios.put(`${this.$server}admin-update-skills`,{
        id : this.Skill_Id,
        skill : this.new_Skill,
      }).then(()=>{
        this.FetchSkills(),
        this.new_Skill='',
        this.Skill_Id=''
      })
    },
    DeleteSkill(id){
      this.$axios.delete(`${this.$server}admin-delete-skills/${id}`)
      .then(()=>{
        this.FetchSkills();
      })
    }
  }
};
</script>

<style lang="scss" scoped>

</style>