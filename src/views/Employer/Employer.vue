<template>
  <div class="page">
    <div class="page-header">
      <h3>ຈັດການບໍລິສັດ</h3>
      <div class="input-group">
        <input class="input" type="text" placeholder="Text input" />
        <i class="fas fa-search"></i>
      </div>
      <button
        @click="$router.push({ name: 'Add_Employer' })"
        class="button is-success"
      >
        ເພີ່ມ
      </button>
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
              <th class="is-md">ຊື່ບໍລິສັດ</th>
              <th class="is-md">ແຂວງ</th>
              <th class="is-sm is-right">ເບີໂທ</th>
              <th class="is-sm is-center">ສະຖານະ</th>
              <th class="is-sm is-center">ເຄື່ອງມື</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, index) in employer" :key="index">
              <td>{{ i.employer_com.company_name }}</td>
              <td>{{ i.employer_com.district_id.provinceId.name }}</td>
              <td class="is-right">{{ i.tel }}</td>
              <td class="is-center">{{ i.status }}</td>
              <td class="is-center option">
                <span
                  @click="
                    $router.push({
                      name: 'Edit_Employer',
                      params: { id: i._id },
                    })
                  "
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
  data: () => ({
    employer: [],
  }),
  created() {
    this.FetchEmployer();
  },

  methods: {
    FetchEmployer() {
      this.$axios
        .get(`${this.$server}admin-get-empcompany`)
        .then((response) => {
          this.employer = response.data.mapEmpCompany;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>