<template>
  <div class="page">
    <div class="page-header">
      <h3>ເພີ່ມຜູ້ຈ້າງ</h3>
    </div>
    <div class="box">
      <div class="input-text">
        <label for=""
          >ຊື່ຜູ້ຕິຕໍ່
          <p>*</p></label
        >
        <div class="input-area">
          <input
            v-model="name"
            class="input is-primary"
            type="text"
            placeholder="Primary input"
          />
        </div>
      </div>
      <div class="input-text">
        <label for=""
          >ນາມສະກຸນ
          <p>*</p></label
        >
        <div class="input-area">
          <input
            v-model="lastname"
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
                v-for="i in provinces[selectedItem].districts"
                :key="i.id"
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
          >ລະຫັດຜ່ານ
          <p>*</p></label
        >
        <div class="input-area">
          <input
            v-model="password"
            class="input is-primary"
            type="text"
            placeholder="Primary input"
          />
        </div>
      </div>
      <div class="input-text">
        <label for=""
          >ຢືນຢັນລະຫັດຜ່ານ
          <p>*</p></label
        >
        <div class="input-area">
          <input
            v-model="confirm_password"
            class="input is-primary"
            type="text"
            placeholder="Primary input"
          />
        </div>
      </div>
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
        <button @click="Add_Individua" class="button is-link">ບັນທຶກ</button>
        <button
          @click="$router.push({ name: 'Personal' })"
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
    name: "",
    lastname: "",
    tel: "",
    email: "",
    selectedItem: 0,
    provinces: [],
    selectedDistricts: "",
    password: "",
    confirm_password: "",
    status: "approve",
    img: "",
  }),
  created() {
    this.FetchProvinces();
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
      this.selectedDistricts = this.provinces[
        this.selectedItem
      ].districts[0]._id;
    },
    Add_Individua() {
      this.$axios.post(`${this.$server}admin-add-empindividual`, {
        employer_individual: {
          name: this.name,
          lastname: this.lastname,
          district_id: this.selectedDistricts,
        },
        tel: this.tel,
        email: this.email,
        password: this.password,
        status: this.status,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>