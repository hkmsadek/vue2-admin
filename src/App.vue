<template>
  <div id="app">
    <div :class="darkMode? 'darkMode' : ''" id="main-wrapper">
      <!-- Menu --> 
      <nav v-if="$route.path != '/login' && $route.path != '/register' && $route.path != '/resetPassword' && $route.path != '/forgetPassword'" :class="sidebar? '_navbar _fixed_top _navbar_light _navbar_wap _mini_navbar' : '_navbar _fixed_top _navbar_light _navbar_wap'">
        <div class="_navbar_left">
          <div class="_navbar_logo">
            <a href="" class="_navbar_logo_link">
              <img class="_navbar_logo_img" src="/static/img/logo-icon.png" alt="" title="">
              <img class="_navbar_logo_img_text" src="/static/img/logo-text.png" alt="" title="">
            </a>
          </div>

          <div class="_navbar_left_button">
            <div @click="sidebar = !sidebar" class="_navbar_left_icon">
              <Icon type="md-list" />
            </div>

            <div @click="mobSidebar = !mobSidebar" class="_navbar_left_icon _mob_icon">
              <Icon type="md-list" />
            </div>
          </div>

          <div class="_navbar_search">
            <div class="_navbar_search_main_all">
              <div class="_navbar_search_main">
                <Icon type="ios-search-outline" />
                <input type="text"  placeholder="Search..">
                <div class="outline"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="_navbar_right">
          <ul class="_navbar_right_list">
            <li class="_mosearch" @click="mobSearchOpen = true"><Icon type="ios-search-outline" /></li>
            
            <li class="_1noti">
              <Dropdown trigger="click" placement="bottom-end">
                <a href="javascript:void(0)">
                  <Icon type="ios-notifications-outline" />
                  <p class="_noti_num">3</p>
                </a>
                <DropdownMenu slot="list">
                    <p class="_1noti_title">Notifications</p>

                    <template v-if="spinLoading">
                      <div class="_1noti_list _1scrollbar">
                        <!-- Items -->
                        <router-link to="" v-for="(item, index) in 2" :key="index" class="_1noti_list_items">
                          <div class="_1noti_list_pic">
                            <img class="_1noti_list_img" src="/static/img/photo.jpg" alt="" title="">
                          </div>

                          <div class="_1noti_list_details">
                            <p class="_1noti_list_title _1text_overflow">has comment on your board</p>

                            <p class="_1noti_list_time">10:12:2020</p>
                          </div>
                        </router-link>
                        <!-- Items -->

                        <!-- Items -->
                        <div class="_1noti_list_items _active">
                          <div class="_1noti_list_pic">
                            <img class="_1noti_list_img" src="/static/img/photo.jpg" alt="" title="">
                          </div>

                          <div class="_1noti_list_details">
                            <p class="_1noti_list_name _1text_overflow">Arnold Schwarzenegger</p>
                            <p class="_1noti_list_title _1text_overflow">has comment on your board</p>

                            <p class="_1noti_list_time">10:12:2020</p>
                          </div>
                        </div>
                        <!-- Items -->

                        <!-- Items -->
                        <div v-for="(item, index) in 5" :key="index" class="_1noti_list_items">
                          <div class="_1noti_list_pic">
                            <img class="_1noti_list_img" src="/static/img/photo.jpg" alt="" title="">
                          </div>

                          <div class="_1noti_list_details">
                            <p class="_1noti_list_name _1text_overflow">Arnold Schwarzenegger</p>
                            <p class="_1noti_list_title _1text_overflow">has comment on your board</p>

                            <p class="_1noti_list_time">10:12:2020</p>
                          </div>
                        </div>
                        <!-- Items -->
                      </div>

                      <div class="_1noti_see">
                        <a class="_1noti_see_text _2link" href="">See all notifications</a>
                      </div>
                    </template>

                    <template v-else>
                      <div class="_noti_load demo-spin-col">
                        <Spin fix>
                          <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
                          <div>Loading</div>
                        </Spin>
                      </div>
                    </template>
                </DropdownMenu>
            </Dropdown>
            </li>

            <li class="_1noti">
              <Dropdown trigger="click" placement="bottom-end">
                <a href="javascript:void(0)">
                  <Icon type="ios-mail-outline" /> 
                  <p class="_noti_num">5</p>
                </a>
                <DropdownMenu slot="list">
                    <p class="_1noti_title">Messages</p>

                    <template v-if="!spinLoading">
                      <div class="_1noti_list _1scrollbar">
                        <!-- Items -->
                        <div v-for="(item, index) in 2" :key="index" class="_1noti_list_items">
                          <div class="_1noti_list_pic">
                            <img class="_1noti_list_img" src="/static/img/photo.jpg" alt="" title="">
                          </div>

                          <div class="_1noti_list_details">
                            <p class="_1noti_list_name _1text_overflow">Arnold Schwarzenegger</p>
                            <p class="_1noti_list_title _1text_overflow">has comment on your board</p>

                            <p class="_1noti_list_time">10:12:2020</p>
                          </div>
                        </div>
                        <!-- Items -->

                        <!-- Items -->
                        <div class="_1noti_list_items _active">
                          <div class="_1noti_list_pic">
                            <img class="_1noti_list_img" src="/static/img/photo.jpg" alt="" title="">
                          </div>

                          <div class="_1noti_list_details">
                            <p class="_1noti_list_name _1text_overflow">Arnold Schwarzenegger</p>
                            <p class="_1noti_list_title _1text_overflow">has comment on your board</p>

                            <p class="_1noti_list_time">10:12:2020</p>
                          </div>
                        </div>
                        <!-- Items -->

                        <!-- Items -->
                        <div v-for="(item, index) in 5" :key="index" class="_1noti_list_items">
                          <div class="_1noti_list_pic">
                            <img class="_1noti_list_img" src="/static/img/photo.jpg" alt="" title="">
                          </div>

                          <div class="_1noti_list_details">
                            <p class="_1noti_list_name _1text_overflow">Arnold Schwarzenegger</p>
                            <p class="_1noti_list_title _1text_overflow">has comment on your board</p>

                            <p class="_1noti_list_time">10:12:2020</p>
                          </div>
                        </div>
                        <!-- Items -->
                      </div>

                      <div class="_1noti_see">
                        <a class="_1noti_see_text _2link" href="">See all notifications</a>
                      </div>
                    </template>

                    <template v-else>
                      <div class="_noti_load demo-spin-col">
                        <Spin fix>
                          <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
                          <div>Loading</div>
                        </Spin>
                      </div>
                    </template>
                </DropdownMenu>
            </Dropdown>
            </li>

            <li class="_nav_pro">
              <Dropdown trigger="click" placement="bottom-end">
                <a href="javascript:void(0)">
                  <div class="_nav_pro_pic">
                    <img class="_nav_pro_img" src="/static/img/photo.jpg" alt="" title="">
                  </div>
                </a>
                <DropdownMenu slot="list">
                  <div class="_nav_pro_main">
                    <div class="_nav_pro_top">
                      <div class="_nav_pro_top_pic">
                        <img class="_nav_pro_top_img" src="/static/img/ONE.jpg" title="" alt="">
                      </div>

                      <div class="_nav_pro_top_details">
                        <p class="_nav_pro_top_name">Steave Jobs</p>
                        <p class="_nav_pro_top_email">SteaveJobs@gmail.com</p>
                      </div>
                    </div>

                    <div class="_nav_pro_list_main _1border_color">
                      <ul class="_nav_pro_list">
                        <li>
                          <router-link to="/profile">
                            <Icon type="md-person" />
                            <p class="_nav_pro_list_text">My Profile</p>
                          </router-link>
                        </li>

                        <li>
                          <a href="">
                            <Icon type="md-cash" />
                            <p class="_nav_pro_list_text">My Balance</p>
                          </a>
                        </li>

                        <li>
                          <a href="">
                            <Icon type="md-mail" />
                            <p class="_nav_pro_list_text">My Inbox</p>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="_nav_pro_list_main _1border_color">
                      <ul class="_nav_pro_list">
                        <li>
                          <a href="">
                            <Icon type="ios-cog" />
                            <p class="_nav_pro_list_text">Account Setting</p>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="_nav_pro_list_main _1border_color">
                      <ul class="_nav_pro_list">
                        <li>
                          <a href="">
                            <Icon type="ios-exit" />
                            <p class="_nav_pro_list_text">Log Out</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </div>
        
        <!-- Mobile Search -->
        <div class="_mob_search"  :class="mobSearchOpen? '_mob_search_open' : ''">
          <div class="_mob_search_main">
            <div class="_navbar_search_main_all">
              <div class="_navbar_search_main">
                <Icon type="ios-search-outline" />
                <input type="text"  placeholder="Search..">
                <div class="outline"></div>
              </div>
            </div>
          </div>
          <div class="_mob_search_close"><Icon @click="mobSearchOpen = false" type="md-close" /></div>
        </div>
        <!-- Mobile Search -->
      </nav>
      <!-- Menu end -->

      <!-- Sidebar  -->
      <aside v-if="$route.path != '/login' && $route.path != '/register' && $route.path != '/resetPassword' && $route.path != '/forgetPassword'" :class="[(sidebar? '_left_sidebar _hide_sidebar':'_left_sidebar') , (lightSidebar? '_light_sidebar' : ''), (darkSidebar? '_dark_sidebar' : ''), (mobSidebar? '_mobSidebarOpen':'')]">
        <div class="_left_sidebar_main">
          <div class="_left_sidebar_top">
            <div class="_mobile_logo">
              <a href="" class="_navbar_logo_link">
                <img src="/static/img/main-logo.png" alt="" title="" class="_navbar_logo_img"> 
                <img src="/static/img/header.png" alt="" title="" class="_navbar_logo_img_text">
              </a>
            </div>

            <div class="_left_sidebar_top_main">
              <div class="_left_sidebar_pic">
                <img class="_left_sidebar_img" src="/static/img/photo.jpg" alt="" title="">
              </div>
            </div>
            <p class="_left_sidebar_pro">Admin</p>
            <p class="_left_sidebar_name">Hussain shipu</p>
          </div>
          
          <div class="_left_sidebar_menu _1scrollbar">
            <Menu :theme="theme3" :active-name="activeRoute">
              <MenuGroup title="Dashboard">
                <p class="_group_name"><Icon type="ios-more" /></p>
                <MenuItem to="/" name="index">
                    <Icon type="md-home" />
                    <span class="submenu_text">Home</span>
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-analytics" />
                    <span class="submenu_text">Analytics</span>
                </MenuItem>
                <MenuItem to="/messenger" name="messenger">
                  <Icon type="ios-mail" />
                  <span class="submenu_text">Messenger</span>
                </MenuItem>
                <MenuItem to="/profile" name="profile">
                  <Icon type="md-person" />
                  <span class="submenu_text">Profile</span>
                </MenuItem>
                <Submenu name="5">
                  <template slot="title">
                    <Icon type="md-aperture" />
                    <span class="submenu_text">Aperture</span>
                  </template>
                  <MenuItem name="5-1"><Icon type="ios-paper" /><span class="menu_item_text">Toast</span></MenuItem>
                  <MenuItem name="5-2"><Icon type="md-paper" /><span class="menu_item_text">Sweet alert</span></MenuItem>
                </Submenu>
                <MenuItem name="6">
                  <Icon type="ios-notifications" />
                  <span class="submenu_text">Notifications</span>
                </MenuItem>
              </MenuGroup>

              <MenuGroup title="App">
                <p class="_group_name"><Icon type="ios-more" /></p>
                <MenuItem name="6">
                    <Icon type="ios-basket" />
                    <span class="submenu_text">Components</span>
                </MenuItem>
                <Submenu name="8">
                  <template slot="title">
                    <Icon type="md-people" />
                    <span class="submenu_text">Session</span>
                  </template>
                  <MenuItem to="/login" name="8-1"><Icon type="md-exit" /><span class="menu_item_text">Login</span></MenuItem>
                  <MenuItem to="/register" name="8-2"><Icon type="md-person-add" /><span class="menu_item_text">Register</span></MenuItem>
                  <MenuItem to="/resetPassword" name="8-3"><Icon type="md-unlock" /><span class="menu_item_text">Reset Password</span></MenuItem>
                  <MenuItem to="/forgetPassword" name="8-4"><Icon type="md-flag" /><span class="menu_item_text">Forget Password</span></MenuItem>
                  <!-- <MenuItem name="8-3"><Icon type="md-paper" /><span class="menu_item_text">Sweet alert</span></MenuItem> -->
                </Submenu>
                <Submenu name="7">
                  <template slot="title">
                    <Icon type="md-document" />
                    <span class="submenu_text">Other Pages</span>
                  </template>
                  <MenuItem to="/timeline" name="7-1"><Icon type="ios-timer-outline" /><span class="menu_item_text">Timeline</span></MenuItem>
                  <MenuItem to="/pricing" name="7-2"><Icon type="md-pricetags" /><span class="menu_item_text">Priceing</span></MenuItem>
                  <MenuItem to="/emailTemplate" name="7-3"><Icon type="ios-mail" /><span class="menu_item_text">Email Template</span></MenuItem>
                  <MenuItem to="/invoice" name="7-4"><Icon style="transform: rotate(45deg);" type="md-attach" /><span class="menu_item_text">Invoice</span></MenuItem>
                  <!-- <MenuItem name="7-3"><Icon type="md-paper" /><span class="menu_item_text">Sweet alert</span></MenuItem> -->
                </Submenu>
                <MenuItem name="8">
                  <Icon type="md-radio-button-off" />
                  <span class="submenu_text">Button</span>
                </MenuItem>
                <MenuItem name="9">
                  <Icon type="md-analytics" />
                  <span class="submenu_text">Process</span>
                </MenuItem>
              </MenuGroup>
            </Menu>
          </div>
          
          <div class="_left_sidebar_bottom _1border_color">
            <Menu :theme="theme3" active-name="1">
                <MenuItem>
                    <Icon @click="lightSidebarClick" type="ios-sunny" />
                    <span @click="lightSidebarClick" class="submenu_text">Light</span>
                </MenuItem>
                <MenuItem>
                    <Icon @click="darkModeClick" type="ios-moon" />
                    <span @click="darkModeClick" class="submenu_text">Dark</span>
                </MenuItem>
                <MenuItem to="/login">
                    <Icon type="md-log-out" />
                    <span class="submenu_text">Logout</span>
                </MenuItem>
            </Menu>
            <!-- <p>Change theme</p>
            <RadioGroup v-model="theme3">
                <Radio label="light"></Radio>
                <Radio label="dark"></Radio>
            </RadioGroup> -->
          </div>
        </div>
      </aside>
      <!-- Sidebar -->

      <div :class="[(sidebar? '_main_layout _mini_main_layout':'_main_layout') , ($route.path  != '/login' && $route.path  != '/register' && $route.path  != '/resetPassword' && $route.path  != '/forgetPassword'? '':'_login_layout')]"> 
        <router-view></router-view>

        <Footer v-if="$route.path != '/login' && $route.path != '/register' && $route.path != '/resetPassword' && $route.path != '/forgetPassword' && $route.path  != '/messenger'"/>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "./components/footer.vue";
export default {
  components: { 
    Footer
  },

  data(){
    return{
      activeRoute:'index',
      sidebar:false,
      isHovering: false,
      theme3: 'light',
      lightSidebar: false,
      darkSidebar: true,
      darkMode: true,
      mobSearchOpen: false,
      mobSidebar: false,
      spinLoading: false
    }
  },

  methods:{
    lightSidebarClick(){
      this.lightSidebar = true
      this.darkSidebar = false
      this.darkMode = false
    },

    darkModeClick(){
      this.darkSidebar = true
      this.lightSidebar = false
      this.darkMode = true
    }
  },
  watch: { 
    "$route.name": function (newVal, oldVal) {
       this.activeRoute = newVal; 
          
      },
    },
  created(){
      this.activeRoute = this.$route.name;
  }
}
</script>

<style scoped>
.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
.demo-spin-col{
    height: 200px;
    position: relative;
    /* border: 1px solid #eee; */
}
</style>