<template>
  <div class="page">
    <div class="page-header">
      <h3>ເພີ່ມຜູ້ຊອກວຽກ</h3>
    </div>
    <div class="box">
      <div class="input-text">
        <label class="text-right" for=""
          >ຊື່
          <p>*</p></label
        >
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
          >ນາມສະກຸນ
          <p>*</p></label
        >
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
          >ເພດ
          <p>*</p></label
        >
        <div class="input-area">
          <label class="radio is-option">
            <input type="radio" name="gender" checked />
            ຊາຍ
          </label>
          <label class="radio is-option">
            <input type="radio" name="gender" />
            ຍິງ
          </label>
        </div>
      </div>
      <div class="input-text">
        <label for=""
          >ເບີໂທ
          <p>*</p></label
        >
        <div class="input-area">
          <input
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
            class="input is-primary"
            type="text"
            placeholder="Primary input"
          />
        </div>
      </div>

      <div class="input-text">
        <label for=""
          >ລະຫັດຜ່ານ
          <p>*</p></label
        >
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
          >ຢືນຢັນລະຫັດຜ່ານ
          <p>*</p></label
        >
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
          >ທັກສະ
          <p>*</p></label
        >

        <div class="input-area">
          <div class="area-content">
            <div class="select is-primary">
              <select>
                <option selected="selected">ໝວດໝູ່ທັກສະ</option>
                <option>ssss</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="input-text">
        <label for=""
          >ແຂວງຢູ່ປະຈຸບັນ
          <p>*</p></label
        >
        <div class="input-area">
          <div class="select is-primary">
            <select>
              <option selected="selected">ເລືອກແຂວງ</option>
              <option>ssss</option>
            </select>
          </div>
        </div>
      </div>
      <div class="input-text">
        <label for=""
          >ລະດັບການສຶກສາສູງສຸດ
          <p>*</p></label
        >
        <div class="input-area">
          <div class="area-content">
            <div class="select is-primary">
              <select>
                <option selected="selected">ລະດັບການສຶກສາ</option>
                <option>ssss</option>
              </select>
            </div>
          </div>
          <div class="area-content">
            <div class="select is-primary">
              <select>
                <option selected="selected">ສາຂາ</option>
                <option>ssss</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="input-text">
        <label for=""
          >ປະສົບການເຮັດວຽກ
          <p>*</p></label
        >
        <div class="input-area">
          <label class="radio is-option">
            <input
              type="radio"
              v-model="expStatus"
              name="experience"
              :value="false"
              checked
            />
            ບໍ່ມີປະສົບການ
          </label>
          <label class="radio is-option">
            <input
              type="radio"
              v-model="expStatus"
              name="experience"
              :value="true"
            />
            ມີປະສົບການ
          </label>
        </div>
      </div>
      <div class="input-text" v-if="expStatus != false">
        <label class="not-req" for="">ລາຍລະອຽດຂອງປະສົບການ</label>

        <div class="input-area" v-for="(i, index) in experience" :key="index">
          <div class="area-content">
            <input
              class="input is-primary"
              type="text"
              placeholder="Primary input"
            />
          </div>
          <div class="area-content">
            <input
              class="input is-primary"
              type="text"
              placeholder="Primary input"
            />
          </div>
        </div>
        <button class="button is-link">ເພີ່ມປະສົບການ</button>
      </div>
      <div class="input-text">
        <label class="not-req" for="">ຮູບບັດປະຈຳຕົວ </label>
        <div class="img-container">
          <i style="font-size: 100px" class="fas fa-cloud-upload-alt"></i>
          <input type="file" />
        </div>
      </div>
      <div class="input-text">
        <label class="not-req" for="">ຮູບພາບ </label>
        <div class="img-container isProfile">
          <i style="font-size: 100px" class="fas fa-cloud-upload-alt"></i>
          <input type="file" />
        </div>
      </div>
      <div class="input-text">
        <label for=""
          >ຊວງເລາເຮັດວຽກ
          <p>*</p></label
        >
        <div class="input-area">
          <div class="area-content">
            <div class="area-content">
              <div class="select is-primary">
               <select >
                <option
                  v-for="(i, index) in get_salary"
                  :key="index"
                  selected="selected"
                >
                  {{ i.amount }}
                </option>
              </select>
              </div>
            </div>
          </div>

          <div class="area-content">
            <div class="select is-primary">
              <select >
                <option
                  v-for="(i, index) in get_salaryType"
                  :key="index"
                  selected="selected"
                >
                  {{ i.name }}
                </option>
              </select>
            </div>
          </div>
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
export default {
  data: () => ({
    get_skill: [],
    get_salaryType: [],
    get_salary: [],
    name: "",
    lastname: "",
    gender: "",
    expStatus: false,
    email: "",

    password: "",
    image: "",
    id_card: "",
    experience: [
      {
        posional: "",
        month: "",
      },
    ],
    work_time: "",
    salary_id: "",
    salary_type: "",
    provinceId: "",
    branch_id: "",
    language: [{ name: "", lang_skill: [] }],
    status: "approve",
    hide: "true",
  }),
  watch: {
    experience: {
      handler(experience) {
        this.$emit("input", experience);
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    this.FetchSkill(), this.FetchSalaryType(),this.FetchSalary()

  },
  methods: {
    FetchSkill() {
      this.$axios.get(`${this.$server}admin-get-skills`).then((res) => {
        this.get_skill = res.data.mapSkill;
      });
    },
    FetchSalaryType() {
      this.$axios.get(`${this.$server}admin-get-salaryType`).then((res) => {
        this.get_salaryType = res.data.mapSalaryType;
      });
    },
    FetchSalary(){
      this.$axios.get(`${this.$server}admin-get-salary`).then((res)=>{
        this.get_salary = res.data.mapSalary
      })
    }
  },
};
</script>

<style lang="scss" scoped>
</style>