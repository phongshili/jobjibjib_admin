<template>
  <div class="page">
    <div class="page-header">
      <h3>ແກ້ໄຂບໍລິສັດ</h3>
    </div>
    <div class="box">
      <div class="input-text">
        <label class="text-right" for=""
          >ຊື່ບໍລິສັດ
          <p>*</p></label
        >
        <div class="input-area">
          <input
            v-model="empName"
            class="input is-primary"
            type="text"
            placeholder="Primary input"
          />
        </div>
      </div>
      <div class="input-text">
        <label for=""
          >ຊື່ຜູ້ຕິຕໍ່
          <p>*</p></label
        >
        <div class="input-area">
          <input
            v-model="empContact"
            class="input is-primary"
            type="text"
            placeholder="Primary input"
          />
        </div>
      </div>
      <div class="input-text">
        <label for=""
          >ນາມສະກຸນຜູ້ຕິຕໍ່
          <p>*</p></label
        >
        <div class="input-area">
          <input
            v-model="empContactLastname"
            class="input is-primary"
            type="text"
            placeholder="Primary input"
          />
        </div>
      </div>
      <div class="input-text">
        <label for=""
          >ເບີໂທ
          <p>*</p></label
        >
        <div class="input-area">
          <input
            v-model="tel"
            class="input is-primary"
            type="text"
            placeholder="Primary input"
          />
        </div>
      </div>
      <div class="input-text">
        <label class="not-req" for="">ອິເມວ</label>
        <div class="input-area">
          <input
            v-model="email"
            class="input is-primary"
            type="text"
            placeholder="Primary input"
          />
        </div>
      </div>
      <!-- select -->
      <div class="input-text">
        <label for=""
          >ໂຕເລກທະບຽນວິສະຫະກິດ
          <p>*</p></label
        >
        <div class="input-area">
          <input
            v-model="empNumber"
            class="input is-primary"
            type="text"
            placeholder="Primary input"
          />
        </div>
      </div>
      <div class="input-text">
        <label for=""
          >ສະຖານທີ່ເຮັດວຽກ (ແຂວງ)
          <p>*</p></label
        >

        <div class="input-area">
          <div class="select is-primary">
            <select v-model="selectedItem">
              <option
                v-for="(i, index) in provinces"
                :key="index"
                :value="index"
              >
                {{ i.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="input-text">
        <label for=""
          >ສະຖານທີ່ເຮັດວຽກ (ເມືອງ)
          <p>*</p></label
        >

        <div class="input-area" v-if="selectedItem || selectedItem === 0">
          <div class="select is-primary" v-if="provinces[selectedItem]">
            <select v-model="selectedDistricts">
              <option
                selected
                v-for="i in provinces[selectedItem].districts"
                :key="i._id"
                :value="i._id"
              >
                {{ i.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <!-- end select -->

      <div class="input-text">
        <label for=""
          >ສະຖານະ
          <p>*</p></label
        >
        <div class="input-area">
          <div class="select is-primary">
            <select v-model="status">
              <option value="approve">Approve</option>
              <option value="pending">Pending</option>
              <option value="fail">Fail</option>
            </select>
          </div>
        </div>
      </div>
      <div class="input-text">
        <label class="not-req" for="">ຮູບໂລໂກ່ </label>
        <div class="img-container">
          <i style="font-size: 100px" class="fas fa-cloud-upload-alt"></i>
          <input type="file" />
        </div>
      </div>
      <div class="btn-group">
        <button @click="EditEmployer" class="button is-link">ບັນທຶກ</button>
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
export default {
  data: () => ({
    emp: {},
    empName: "",
    empContact: "",
    empContactLastname: "",
    tel: "",
    email: "",
    empNumber: "",
    status: "",
    img: "",
    selectedItem: 0,
    provinces: [],
    selectedDistricts: "",
    coin: "",
    id: "",
  }),
  created() {
    this.FetchProvinces();
    this.FetchEmployer();
  },
  watch: {
    selectedItem: {
      handler() {
        this.selectedDistricts = this.provinces[
          this.selectedItem
        ].districts[0]._id;
      },
    },
  },

  methods: {
    async FetchProvinces() {
      await this.$axios.get(`${this.$server}admin-get-province`).then((res) => {
        this.provinces = res.data.provinces;
      });
    },
    FetchEmployer() {
      this.$axios
        .get(`${this.$server}admin-findId-emp/` + this.$route.params.id)
        .then((res) => {
          this.emp = res.data.findById;
          this.empName = this.emp.employer_company.company_name,
          this.empContact = this.emp.employer_company.name,
          this.empContactLastname = this.emp.employer_company.lastname;
          this.empNumber = this.emp.employer_company.tag;
          this.status = this.emp.status;
          this.tel = this.emp.user_id.tel;
          this.email = this.emp.user_id.email;
          this.selectedDistricts = this.emp.employer_company.district_id._id;
          const selectedId = this.emp.employer_company.district_id.provinceId._id;
          const idxFound = this.provinces.findIndex(
            (i) => selectedId === i._id
          );
          this.selectedItem = idxFound;
          this.id = this.emp.user_id._id;
        });
    },
    EditEmployer() {
      const employer = {
        id: this.id,
        employer_company: {
          company_name: this.empName,
          name: this.empContact,
          lastname: this.empContactLastname,
          tag: this.empNumber,
          district_id: this.selectedDistricts,
        },
        tel: this.tel,
        status: this.status,
        email: this.email,
      };
      this.$axios.put(`${this.$server}admin-update-empcompany`, employer);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>