<template>
  <div>
    <div class="_main_content">
      <div class="_1profile">
        <!-- Banner -->
        <Banner />
        <!-- Banner -->

        <div class="_1profile_main">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-auto col-lg-auto">
                <div class="_1profile_left">
                  <div class="_1profile_left_all _1card _mar_b20">
                    <div class="_1card_body">
                      <div class="_intro_card_main_pic _load_div">
                        <img
                          alt=""
                          title=""
                          class="_intro_card_main_img"
                          data-src="/static/img/pic.jpg"
                          src="/static/img/pic.jpg"
                          lazy="loaded"
                        />
                        <div class="_intro_card_main_edit">
                          <Icon type="md-camera" /> Change profile pic
                        </div>
                      </div>
                      <h2 class="_2title _text_center">
                        Hussain Shipu
                        <span>(Shipu)</span>
                      </h2>

                      <div class="_intro_card_main_button">
                        <Button type="primary"
                          ><i class="fas fa-pen"></i> Edit Profile
                        </Button>
                      </div>

                      <div class="_intro_card">
                        <div class="_intro_card_icon">
                          <Icon type="md-briefcase" />
                        </div>
                        <div class="_intro_card_details">
                          <p class="_intro_card_details_text">
                            Nothing at <strong>Nothing</strong>
                          </p>
                        </div>
                      </div>
                      <div class="_intro_card">
                        <div class="_intro_card_icon">
                          <Icon type="md-school" />
                        </div>
                        <div class="_intro_card_details">
                          <p class="_intro_card_details_text">
                            Studied at
                            <strong>Border guard school and college</strong>
                          </p>
                        </div>
                      </div>
                      <div class="_intro_card">
                        <div class="_intro_card_icon">
                          <Icon type="md-school" />
                        </div>
                        <div class="_intro_card_details">
                          <p class="_intro_card_details_text">
                            Studied at <strong>Mathergoan high school</strong>
                          </p>
                        </div>
                      </div>
                      <div class="_intro_card">
                        <div class="_intro_card_icon">
                          <Icon type="md-pin" />
                        </div>
                        <div class="_intro_card_details">
                          <p class="_intro_card_details_text">
                            Lives in <strong>Sylhet</strong>
                          </p>
                        </div>
                      </div>
                      <div class="_intro_card">
                        <div class="_intro_card_icon">
                          <Icon type="md-pin" />
                        </div>
                        <div class="_intro_card_details">
                          <p class="_intro_card_details_text">
                            From <strong>Sunamgonj</strong>
                          </p>
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
                            <img
                              src="/static/img/ons.png"
                              alt=""
                              title=""
                              class="_pages_photo_img"
                            />
                          </div>
                        </div>

                        <div class="_pages_photo_main">
                          <div class="_pages_photo_pic">
                            <img
                              src="/static/img/ONE.jpg"
                              alt=""
                              title=""
                              class="_pages_photo_img"
                            />
                          </div>
                        </div>
                        <div class="_pages_photo_main">
                          <div class="_pages_photo_pic">
                            <img
                              src="/static/img/pro.png"
                              alt=""
                              title=""
                              class="_pages_photo_img"
                            />
                          </div>
                        </div>
                        <div class="_pages_photo_main">
                          <div class="_pages_photo_pic">
                            <img
                              src="/static/img/ons.png"
                              alt=""
                              title=""
                              class="_pages_photo_img"
                            />
                          </div>
                        </div>
                        <div class="_pages_photo_main">
                          <div class="_pages_photo_pic">
                            <img
                              src="/static/img/ONE.jpg"
                              alt=""
                              title=""
                              class="_pages_photo_img"
                            />
                          </div>
                        </div>
                        <div class="_pages_photo_main">
                          <div class="_pages_photo_pic">
                            <img
                              src="/static/img/pro.png"
                              alt=""
                              title=""
                              class="_pages_photo_img"
                            />
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
                      <li class="_active">
                        <router-link to="/friend">
                          <Icon type="ios-people" />
                          <p class="_1profile_menu_text">Friends</p>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/photo">
                          <Icon type="md-image" />
                          <p class="_1profile_menu_text">Photos</p>
                        </router-link>
                      </li>
                      <li>
                        <a>
                          <Dropdown trigger="click" placement="bottom-end">
                            <a href="javascript:void(0)">
                              <Icon
                                style="transform: rotate(90deg)"
                                type="md-more"
                              />
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
                      <div class="_friend_main _1card_body">
                        <h2 class="_1frient_title _2title _pre_icon">
                          <i class="fas fa-users"></i>
                          Friends
                        </h2>

                        <div class="_friend_search_num">
                          <p class="_friend_num">
                            All Friends
                            <span>237</span>
                          </p>

                          <div class="_friend_search">
                            <Input
                              size="small"
                              placeholder="Search"
                              style="width: 220px"
                            />
                          </div>
                        </div>

                        <div class="_friend_main_all">
                          <div class="row">
                            <!-- Card -->
                            <div
                              class="col-12 col-md-6 col-lg-6 _friend_card_main"
                              v-for="(items, index) in 10"
                              :key="index"
                            >
                              <div class="_friend_card _1border_color">
                                <div class="_friend_card_pic">
                                  <img
                                    class="_friend_card_img"
                                    src="/static/img/login-bg.jpg"
                                    alt
                                    title
                                  />
                                </div>

                                <div class="_friend_card_details">
                                  <div class="_1text_overflow">
                                    <a class="_1link _friend_card_name" href
                                      >Hussain Shipu</a
                                    >
                                  </div>

                                  <p class="_friend_card_mut">
                                    <span>38 mutual friends</span>
                                  </p>
                                </div>

                                <div class="_friend_card_drop">
                                  <Dropdown
                                    trigger="click"
                                    placement="bottom-end"
                                  >
                                    <Button
                                      type="primary"
                                      size="small"
                                      class="_pre_icon"
                                    >
                                      <Icon type="md-checkmark" />Friend
                                    </Button>
                                    <DropdownMenu slot="list">
                                      <DropdownItem>Unfollow</DropdownItem>
                                      <DropdownItem>Close Friend</DropdownItem>
                                      <DropdownItem>Unfriend</DropdownItem>
                                    </DropdownMenu>
                                  </Dropdown>
                                </div>
                              </div>
                            </div>
                            <!-- Card -->
                          </div>
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
import Banner from "../../components/profile/banner.vue";

export default {
  components: {
    Banner,
  },

  data() {
    return {};
  },

  methods: {},
};
</script>