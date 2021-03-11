<template>
  <div class="page">
    <div class="page-header">
      <h3>ຈັດການແອັບມິນ </h3>
     
        
        <button  @click="$router.push({name: 'Manage_Admin' })" class=" btn-left button is-success">ເພີ່ມ</button>

    </div>
    <div class="box">
      <div class="page-content">
        <table class="table is-fullwidth" id="mytable">
          <thead>
            <tr>
              <th class="is-md">ຮູບພາບ</th>
              <th class="is-md ">ຊື່ຜູ້ໃຊ້</th>
              <th class="is-md">ອີເມວ</th>
              <th class="is-sm is-center">ເຄື່ອງມື</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="https://madewithnetwork.ams3.cdn.digitaloceanspaces.com/spatie-space-production/3075/nuxtjs-2.jpg" class="tb-img" alt=""></td>
              <td>Semicolon</td>
              <td >Semicolon@gmail.com</td>
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
export default {};
</script>

<style lang="scss" scoped>
</style>