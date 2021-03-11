<template>
  <div>
    <div class="test">
      <label for class="label">test</label>
      <div class="control">
        <div class="select is-fullwidth">
          <div class="selected-list">
            <div
              class="selected-item"
              @click="selectedItem.splice(index, 1)"
              v-for="(i, index) in selectedItem"
              :key="index"
            >
              <span>{{ selected_skill(i) }}</span>
            </div>
            <div class="input-group">
              <input
                type="text"
                class="input"
                placeholder="Category"
                @focus="selectFocus = true"
              />
              <div class="select-list" v-if="selectFocus">
                <div
                  class="select-item"
                  @click="selectItem(i._id)"
                  v-for="(i, index) in skill_select"
                  :key="index"
                  :value="i._id"
                >
                  <span>{{ i.skill }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      get_skill: [],
      skill: "",
      skillId: "",
      find_id: "",
      selectFocus: false,
      selectedItem: [],

    };
  },
  created() {
    this.FetchSkill();
  },
  computed: {
    skill_select() {
      return this.get_skill.filter((i) => !this.selectedItem.includes(i._id));
    },
    selected_skill() {
      return (id) => {
        const obj = this.get_skill.find((i) => i._id === id);
        return obj ? obj.skill : "";
      };
    },
  },
  methods: {
        selectItem(val) {
      this.selectedItem.push(val);
      this.selectFocus = false;
    },
    FetchSkill() {
      this.$axios.get(`${this.$server}admin-get-skills`).then((res) => {
        this.get_skill = res.data.mapSkill;
      });
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        // code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      };
      this.options.push(tag);
      this.value.push(tag);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
