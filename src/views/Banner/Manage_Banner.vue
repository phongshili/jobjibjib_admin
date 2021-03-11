<template>
  <div class="page">
    <div class="page-header">
      <h3>ເພີ່ມໂຄສະນາ</h3>
    </div>
    <div class="box">
      <div class="poster-container">
        <i style="font-size: 100px" class="fas fa-cloud-upload-alt"></i>
        <input type="file" />
      </div>
      <div class="input-text">
        <label for="">Link </label>
        <div class="input-area">
          <input
            class="input is-primary"
            type="text"
            placeholder="Primary input"
          />
        </div>
      </div>
      <div class="input-text">
        <label for=""
          >ວັນທີ່ປະກາດ
          <p>*</p>
        </label>
        <div class="input-area">
          <date-picker v-model="startdate"></date-picker>
        </div>
      </div>
      <div class="input-text">
        <label for=""
          >ວັນທີ່ປິດປະກາດ
          <p>*</p>
        </label>

        <div class="input-area">
          <date-picker v-model="enddate" disabled></date-picker>
        </div>
      </div>
      <div class="input-text">
        <label for=""
          >ສະຖານະ
          <p>*</p></label
        >
        <div class="input-area">
          <div class="select is-primary">
            <select>
              <option selected>Approve</option>
            </select>
          </div>
        </div>
      </div>

      <div class="btn-group">
        <button class="button is-link">ບັນທຶກ</button>
        <button
          @click="$router.push({ name: 'Employer' })"
          class="button is-danger"
        >
          ກັບຄືນ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import moment from "moment";

export default {
  components: { DatePicker },
  data: () => ({
    startdate: moment().toDate(),
    enddate: moment().add(1,'month').toDate(),
    empName: "",
    empContact: "",
    tel: "",
    email: "",
    empNumber: "",
    provinces: [],
    password: "",
    confirm_password: "",
    status: "",
    img: "",
  }),
  watch:{
    startdate:{
      handler(){
        this.enddate= moment(this.startdate).add(1,'month').toDate()
      },
      immediate:true
    }
  },
  methods: {
    currentDate() {
      return moment().format("YYYY/MM/DD");
    },
    Add_Employer() {
      this.$axios.post(`${this.$server}`);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>