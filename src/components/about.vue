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
                                                <Button type="primary"><i class="fas fa-pen"></i> Edit Profile </Button>
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
                                                        <img src="/static/img/ons.png" alt="" title="" class="_pages_photo_img">
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
                                            <li class="_active">
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
                                            <li>
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
                                        <!-- About -->
                                        <div class="_2profile_feed">
                                            <div class="_2profile_feed_main">
                                                <div class="row">
                                                    <div class="col-12 col-md-12 col-lg-12">
                                                    <div class="_2profile_feed_card">
                                                        <!-- Card -->
                                                        <div class="_1card _mar_b20">
                                                            <div class="_about_main _1card_body">
                                                                <div class="_about_menu _1border_color">
                                                                    <ul class="_about_menu_list">
                                                                        <li @click="selectTab('overview')" :class="(tab == 'overview') ? '_active' : ''">Overview</li>
                                                                        <li @click="selectTab('work')"  :class="(tab == 'work') ? '_active' : ''">Work and Education</li>
                                                                        <li @click="selectTab('places')" :class="(tab == 'places') ? '_active' : ''">Places You've Lived</li>
                                                                        <li @click="selectTab('contact')"  :class="(tab == 'contact') ? '_active' : ''">Contact and Basic Info </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="_about_details">
                                                                    <!-- Overview -->
                                                                    <div class="_overview"  v-if="tab == 'overview'">
                                                                        <Overview/>
                                                                    </div>
                                                                    <!-- Overview -->
                                                                    
                                                                    <!-- Work -->
                                                                    <div v-if="tab == 'work'">
                                                                        <Work/>
                                                                    </div>
                                                                    <!-- Work -->
                                                                    
                                                                    <!-- Places -->
                                                                    <div v-if="tab == 'places'">
                                                                        <Places/>
                                                                    </div>
                                                                    <!-- Places -->

                                                                    <!-- Contact -->
                                                                    <div v-if="tab == 'contact'">
                                                                        <Contact/>
                                                                    </div>
                                                                    <!-- Contact -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Card -->
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- About -->
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
import Banner from '../components/profile/banner.vue'
import Overview from '../components/profile/overview.vue'
import Work from '../components/profile/work.vue'
import Places from '../components/profile/places.vue'

export default {
    components: {
        Banner,
        Overview,
        Work,
        Places
    },

    data(){
        return {
           tab: 'work'
        }
    },

    methods: {
        selectTab(tab){
            if(tab != 'overview' && tab != 'work' && tab != 'places' && tab != 'contact'){
                this.tab="overview"
            }
            return this.tab = tab
        }
    }
}
</script>