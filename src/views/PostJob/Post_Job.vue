<template>
  <div class="page">
    <div class="page-header">
      <h3>ຈັດການປະກາດວຽກ</h3>
     
        <div class="input-group">
          <input class="input" type="text" placeholder="Text input" />
        <i class="fas fa-search"></i>
        </div>
        <button @click="$router.push({name: 'Manage_Post_Job' })" class="button is-success">ເພີ່ມ</button>

    </div>
    <div class="box"> 
      <div class="manage-list">
          <p>All(6)</p>
          <p>Online(3)</p>
          <p>Offline(0)</p>
        </div>
      <div class="page-content"> 
        <table class="table is-fullwidth" id="mytable">
          <thead>
            <tr>
              <th class="is-md">ຕຳແໜ່ງວຽກ</th>
              <th class="is-md ">ບໍລິສັດ/ຜູ້ຈ້າງ</th>
              <th class="is-md">ສະຖານທີ່ເຮັກວຽກ</th>
              <th class="is-sm is-right">ເບີໂທ</th>
              <th class="is-sm is-center">ສະຖານະ</th>
              <th class="is-sm is-center">ເຄື່ອງມື</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Semicolon</td>
              <td>Semicolon</td>
              <td>108Hill</td>
              <td class="is-right">028882883</td>
              <td class="is-center">Approve</td>
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