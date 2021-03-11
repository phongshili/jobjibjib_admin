<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
        alt=""
      />
    </div>
    <div class="sidebar-content">
      <ul class="items">
        <li>
          <router-link to="/postjob">
            <i class="fas fa-clipboard-list"></i>
            <span>ປະກາດວຽກ</span>
          </router-link>
        </li>
        <li>
          <router-link to="/banner">
            <i class="fas fa-ad"></i>
            <span>ໂຄສະນາ</span>
          </router-link>
        </li>
        <li :class="{ emp: emp }">
          <span class="drop" @click="emp = !emp">
            <i class="fas fa-user-check"></i>
            <span>ຈັດການບໍລິສັດ/ຜູ້ຈ້າງ</span>
            <span><i class="fas fa-angle-right"></i></span>
          </span>
          <ul>
            <li>
              <router-link to="/employer">
                <span>ບໍລິສັດ</span>
              </router-link>
            </li>
            <li>
              <router-link to="/personal">
                <span>ຜູ້ຈ້າງ</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/jobseeker">
            <i class="fas fa-id-card-alt"></i>
            <span>ຈັດການຜູ້ຊອກວຽກ</span>
          </router-link>
        </li>
        <li :class="{ news: news }">
          <span class="drop" @click="news = !news">
            <i class="far fa-newspaper"></i>
            <span>ຈັດການຂ່າວ</span>
            <span><i class="fas fa-angle-right"></i></span>
          </span>
          <ul>
            <li>
              <router-link to="/news">
                <span>ຂ່າວ</span>
              </router-link>
            </li>
            <li>
              <router-link to="/categorynews">
                <span>ປະເພດຂ່າວ</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/skill">
            <i class="fas fa-folder-open"></i>
            <span>ທັກສະ</span>
          </router-link>
        </li>
        <li>
          <router-link to="/admin">
            <i class="fas fa-user-cog"></i>
            <span>ແອັດມິນ</span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="fas fa-door-open"></i>
            <span>ອອກຈາກລະບົບ</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data: () => ({
    emp: false,
    news: false,
  }),
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 220px;
  transition: all ease-in-out 0.3s;
  background-color: $primary-color;
  position: fixed;
  top: 0;
  bottom: 0;
  font-family: $font;
  display: flex;
  flex-direction: column;
  .sidebar-header {
    padding: 15px;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  .sidebar-content {
    overflow: auto;
    flex-grow: 1;

    margin-bottom: 30px;
  }
  ::-webkit-scrollbar {
    width: 4px; /* remove scrollbar space /
background: transparent; / optional: just make scrollbar invisible /

/ optional: show position indicator in red */
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #dadde1;
  }

  .items {
    li {
      cursor: pointer;
      list-style-type: none;
      line-height: 40px;
      &.news {
        span span i {
          transform: rotate(90deg);
        }
        ul {
          max-height: 280px;
          transition: max-height ease-in-out 0.3s;
        }
      }
      &.emp {
        span span i {
          transform: rotate(90deg);
        }
        ul {
          // display: block;
          max-height: 280px;
          transition: max-height ease-in-out 0.3s;
        }
      }
      a.router-link-exact-active.router-link-active {
        color: $menu-color;
        background: $menu-hover-color;
      }
      a {
        display: block;
        max-height: 280px;
        padding-left: 15px;
        width: 100%;
        border-left: 3px solid transparent;
        position: relative;
        color: #fff;

        i {
          margin-right: 10px;
        }
        span i {
          position: absolute;
          top: 30%;
          right: 10px;
        }
      }
      a:hover {
        background: $menu-hover-color;
        border-left-color: $alert-color i {

        }
        span {
          color: $menu-color;
        }
        i {
          color: $menu-color;
        }
      }

      .drop {
        display: block;
        max-height: 280px;
        padding-left: 15px;
        width: 100%;
        border-left: 3px solid transparent;
        position: relative;
        i {
          color: $menu-color;
          margin-right: 10px;
        }
        span {
          color: $menu-color;
        }
        span i {
          position: absolute;
          top: 30%;
          right: 10px;
        }
      }
      .drop:hover {
        background: $menu-hover-color;
        border-left-color: $alert-color i {
          color: $menu-color;
        }
        span {
          color: $menu-color;
          cursor: pointer;
        }
        i {
          color: $menu-color;
          cursor: pointer;
        }
      }
      ul {
        // display: none;
        max-height: 0;
        transition: max-height ease-in-out 0.3s;
        overflow: hidden;
        li {
          a {
            padding-left: 55px;
          }
        }
      }
    }
  }
}
</style>