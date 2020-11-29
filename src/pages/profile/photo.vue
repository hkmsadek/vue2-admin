<template>
    <div>
        <div class="_main_content">
            <div class="_1profile">
                <!-- Banner -->
                <Banner/>
                <!-- Banner -->

                <div class="_1profile_main">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-auto col-lg-auto">
                                <div class="_1profile_left">
                                    <div class="_1profile_left_all _1card _mar_b20">
                                        <div class="_1card_body">
                                            <div class="_intro_card_main_pic _load_div"><img alt="" title="" class="_intro_card_main_img" data-src="/static/img/pic.jpg" src="/static/img/pic.jpg" lazy="loaded">
                                                <div class="_intro_card_main_edit"><Icon type="md-camera" /> Change profile pic
                                                </div>
                                            </div>
                                            <h2 class="_2title _text_center">
                                                Hussain Shipu
                                                <span>(Shipu)</span></h2>

                                            <div class="_intro_card_main_button">
                                                <Button type="primary"><Icon type="md-create" /> Edit Profile </Button>
                                            </div>

                                            <div class="_intro_card">
                                                <div class="_intro_card_icon"><Icon type="md-briefcase" /></div>
                                                <div class="_intro_card_details">
                                                    <p class="_intro_card_details_text">Nothing at <strong>Nothing</strong></p>
                                                </div>
                                            </div>
                                            <div class="_intro_card">
                                                <div class="_intro_card_icon"><Icon type="md-school" /></div>
                                                <div class="_intro_card_details">
                                                    <p class="_intro_card_details_text">Studied at <strong>Border guard school and college</strong></p>
                                                </div>
                                            </div>
                                            <div class="_intro_card">
                                                <div class="_intro_card_icon"><Icon type="md-school" /></div>
                                                <div class="_intro_card_details">
                                                    <p class="_intro_card_details_text">Studied at <strong>Mathergoan high school</strong></p>
                                                </div>
                                            </div>
                                            <div class="_intro_card">
                                                <div class="_intro_card_icon"><Icon type="md-pin" /></div>
                                                <div class="_intro_card_details">
                                                    <p class="_intro_card_details_text">Lives in <strong>Sylhet</strong></p>
                                                </div>
                                            </div>
                                            <div class="_intro_card">
                                                <div class="_intro_card_icon"><Icon type="md-pin" /></div>
                                                <div class="_intro_card_details">
                                                    <p class="_intro_card_details_text">From <strong>Sunamgonj</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="_1card _mar_b20">
                                        <div class="_1card_body">
                                            <div class="_right_title _mar_b10">
                                                <h2 class="_3title">Stories</h2> 
                                                <div class="_right_contact_drop">
                                                    <a href="">See all</a>
                                                </div>
                                            </div> 
                                            <div class="_pages_photo">
                                                <div class="_pages_photo_main">
                                                    <div class="_pages_photo_pic">
                                                        <img src="/static/img/ons.png" alt="" title="" class="_pages_photo_img">
                                                    </div>
                                                </div>

                                                <div class="_pages_photo_main">
                                                    <div class="_pages_photo_pic">
                                                        <img src="/static/img/ONE.jpg" alt="" title="" class="_pages_photo_img">
                                                    </div>
                                                </div> 
                                                <div class="_pages_photo_main"><div class="_pages_photo_pic">
                                                    <img src="/static/img/pro.png" alt="" title="" class="_pages_photo_img"></div>
                                                </div> 
                                                <div class="_pages_photo_main">
                                                    <div class="_pages_photo_pic">
                                                        <img src="/static/img/ons.png" alt="" title="" class="_pages_photo_img">
                                                    </div>
                                                </div> 
                                                <div class="_pages_photo_main">
                                                    <div class="_pages_photo_pic">
                                                        <img src="/static/img/ONE.jpg" alt="" title="" class="_pages_photo_img">
                                                    </div>
                                                </div> 
                                                <div class="_pages_photo_main">
                                                    <div class="_pages_photo_pic">
                                                        <img src="/static/img/pro.png" alt="" title="" class="_pages_photo_img">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-md col-lg">
                                <div class="_1profile_right">
                                    <div class="_1profile_right_menu _mar_b20">
                                        <ul class="_1profile_menu_list">
                                            <li>
                                                <router-link to="/profile">
                                                    <Icon type="md-trending-up" />
                                                    <p class="_1profile_menu_text">Timeline</p>
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/about">
                                                    <Icon type="md-information-circle" />
                                                    <p class="_1profile_menu_text">About</p>
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/friend">
                                                    <Icon type="ios-people" />
                                                    <p class="_1profile_menu_text">Friends</p>
                                                </router-link>
                                            </li>
                                            <li class="_active">
                                                <router-link to="/photo">
                                                    <Icon type="md-image" />
                                                    <p class="_1profile_menu_text">Photos</p>
                                                </router-link>
                                            </li>
                                            <li>
                                                <a>
                                                    <Dropdown  trigger="click" placement="bottom-end">
                                                        <a href="javascript:void(0)">
                                                            <Icon style="transform: rotate(90deg);" type="md-more" />
                                                        </a>
                                                        <DropdownMenu slot="list">
                                                            <DropdownItem>Follow</DropdownItem>
                                                            <DropdownItem>Add more</DropdownItem>
                                                            <DropdownItem>Unfriend</DropdownItem>
                                                            <DropdownItem>Send request</DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="_1profile_right_main">
                                        <!-- Card -->
                                        <div class="_1card _mar_b20">
                                            <div class="_1card_body">
                                                <div class="_friend_main">
                                                    <h2 class="_1frient_title _2title _pre_icon _mar_b20">
                                                        <Icon type="md-image" />
                                                        Photos
                                                    </h2>

                                                    <div class="_group_menu_top _1border_color">
                                                        <div class="_group_menu">
                                                        <ul class="_group_menu_list">
                                                            <li
                                                            @click="selectPhoto('photo')" :class="(tab == 'photo') ? '_active' : ''">Photos</li>
                                                            <li
                                                            @click="selectPhoto('albums')" :class="(tab == 'albums') ? '_active' : ''">Albums</li>
                                                            <li>Videos</li>
                                                        </ul>
                                                        </div>

                                                        <div class="_group_menu_button">
                                                            <button class="_3btn _btn_sm" type="button">
                                                                <Icon type="md-add" />Create Album
                                                            </button>
                                                            <button class="_3btn _btn_sm" type="button">
                                                                <Icon type="md-add" />Add Video
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <!-- All Photos -->
                                                    <div class="_photo_main_all" v-if="tab == 'photo'">
                                                        <!-- Items -->
                                                        <div class="_photo_main" v-for="(items, index) in 10" :key="index">
                                                            <div class="_photo_main_pic _1border_color">
                                                                <img class="_photo_main_img" src="/static/img/login-bg.jpg" alt title />
                                                            </div>
                                                        </div>
                                                        <!-- Items -->
                                                    </div>
                                                    <!-- All Photos -->

                                                    <!-- All Albums -->
                                                    <div class="_photo_albums_all" v-if="tab == 'albums'">
                                                        <!-- Items -->
                                                        <div
                                                        class="_photo_albums_card"
                                                        v-for="(items, index) in 10"
                                                        :key="index"
                                                        >
                                                        <div class="_photo_albums_card_pic _1border_color">
                                                            <img class="_photo_albums_card_img" src="/static/img/ONE.jpg" alt title />
                                                        </div>

                                                        <div class="_photo_albums_card_details">
                                                            <p class="_photo_albums_card_title _1text_overflow">
                                                            <a class="_3link" href>Supercopa vs barcab</a>
                                                            </p>
                                                            <p class="_photo_albums_card_num">19 photos</p>
                                                        </div>
                                                        </div>
                                                        <!-- Items -->
                                                    </div>
                                                    <!-- All Albums -->
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Card -->
                                    </div>
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
import Banner from '../../components/profile/banner.vue'

export default {
  data() {
    return {
      tab: "photo"
    };
  },

  components: {
    Banner
  },

  methods: {
    selectPhoto(tab) {
      return (this.tab = tab);
    }
  }
};
</script>