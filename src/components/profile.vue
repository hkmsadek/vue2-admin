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
                                            <li class="_active">
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
                                        <!-- Timeline -->
                                        <div class="_1profile_timeline">
                                            <!-- Status Box -->
                                            <div class="_1card _mar_b20">
                                                <div class="_1card_body">
                                                    <div class="_statusBox_top">
                                                        <div class="_statusBox_top_pic">
                                                            <img class="_statusBox_top_img" src="/static/img/ONE.jpg" alt title />
                                                        </div>

                                                        <div class="_statusBox_top_textarea">
                                                            <input type="text" placeholder="What's on your mind, Shipu" />
                                                        </div>
                                                    </div>

                                                    <div class="_statusBox_bottom">
                                                        <ul class="_statusBox_buttons">
                                                            <li>
                                                                <button class="_3btn _btn_sm" type="button">
                                                                    <Icon type="md-photos" />  Photo/Video
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button class="_3btn _btn_sm" type="button">
                                                                    <Icon type="md-happy" /> Felling/Activity
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button class="_3btn _btn_sm" type="button">
                                                                    <Icon style="transform: rotate(90deg);" type="md-more" />
                                                                </button>
                                                            </li>
                                                        </ul>

                                                        <div class="_statusBox_share">
                                                            <button class="_1btn _btn_sm" type="button">Create Post</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Status Box -->

                                            <!-- Card -->
                                            <div class="_1card _mar_b20">
                                                <div class="_1card_body">
                                                    <div class="_1card_top">
                                                        <div class="_1card_details_pic">
                                                            <a href="/pages/3" class="_load_div">
                                                                <img alt="" title="" class="_1card_details_img" src="/static/img/logimage.png">
                                                            </a>
                                                        </div>

                                                        <div class="_1card_details">
                                                            <div class="_status_card_title">
                                                                <a href="/pages/3" class=""><span>Appifylab</span></a>
                                                            </div>

                                                            <div class="_1card_time"><span>2 months ago</span> .
                                                                <i class="fas fa-globe-americas"></i>
                                                            </div>
                                                        </div>

                                                        <div class="_1card_details_drop">
                                                            <Dropdown  trigger="click" placement="bottom-end">
                                                                <a href="javascript:void(0)">
                                                                    <Icon style="transform: rotate(90deg);" type="md-more" />
                                                                </a>
                                                                <DropdownMenu slot="list">
                                                                    <DropdownItem>Edit</DropdownItem>
                                                                    <DropdownItem>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="_1card_status">
                                                        <p class="_1card_status_text">Download amazing free &amp; premium fully-responsive website templates and Flutter mobile app UI link: https://appifylab.com/</p>
                                                    </div>

                                                    <div>
                                                        <div class="_1card_pic _load_div">
                                                            <img alt="" title="" class="_1card_img" src="/static/img/photo.jpg">
                                                        </div>
                                                    </div>

                                                    <div class="_1card_count _1border_color _dis_flex">
                                                        <ul class="_1card_count_list _flex_space">
                                                            <li class="_active"><i class="far fa-thumbs-up"></i> 4 Unlike
                                                            </li>
                                                            <li><i class="far fa-comment-alt"></i> Comment
                                                            </li>
                                                            <!---->
                                                        </ul>
                                                        <ul class="_count_comment">
                                                            <li>
                                                                1 comment
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="_1card_comment_box">
                                                        <div class="_1card_comment_box_pic _load_div"><img alt="" title="" class="_1card_comment_box_img" data-src="/static/img/pic.jpg" src="/static/img/pic.jpg" lazy="loaded"></div>
                                                        <div class="_1card_comment_box_input_icon">
                                                            <div class="_1card_comment_box_input"><input type="text" placeholder="write a comment..."></div>
                                                        </div>
                                                    </div>

                                                    <!-- Comment -->
                                                    <div class="_1comment _1border_color"  v-for="(item, index) in 2" :key="index">
                                                        <div class="_1comment_items">
                                                            <div class="_1comment_main" style="">
                                                                <div class="_1comment_pic">
                                                                    <a href="" class="_load_div">
                                                                        <img src="/static/img/pic.jpg" alt="" title="" class="_1comment_img">
                                                                    </a>
                                                                </div>

                                                                <div class="_1comment_details">
                                                                    <div class="_1comment_details_main">
                                                                       <div class="_1comment_details_left">
                                                                           <a href="" class="_1comment_name">Hussain Shipu</a>

                                                                            <p class="_1comment_text">this is comment</p>
                                                                        </div>

                                                                        <div class="_1comment_time">
                                                                            <p class="_1comment_time_text">a few seconds ago</p>

                                                                            <div class="_1card_details_drop">
                                                                                <Dropdown  trigger="click"  placement="bottom-end">
                                                                                    <a href="javascript:void(0)">
                                                                                        <Icon style="transform: rotate(90deg);" type="md-more" />
                                                                                    </a>
                                                                                    <DropdownMenu slot="list">
                                                                                        <DropdownItem>Edit</DropdownItem>
                                                                                        <DropdownItem>Delete</DropdownItem>
                                                                                    </DropdownMenu>
                                                                                </Dropdown>
                                                                            </div>
                                                                        </div> 
                                                                    </div>
                                                                    

                                                                    <div class="_1comment_like_give _1border_color _dis_flex align-items-center">
                                                                        <ul class="_1card_count_list _flex_space">
                                                                            <li class="_active"><i class="far fa-thumbs-up"></i> 4 Unlike</li> 
                                                                            <li><i class="far fa-comment-alt"></i> Reply</li>
                                                                        </ul> 

                                                                        <ul class="_count_comment">
                                                                            <li>1 reply</li>
                                                                        </ul>
                                                                    </div>

                                                                    <div class="_1card_comment_box">
                                                                        <div class="_1card_comment_box_pic _load_div">
                                                                            <img src="/static/img/pic.jpg" alt="" title="" class="_1card_comment_box_img">
                                                                        </div>

                                                                        <div class="_1card_comment_box_input_icon">
                                                                            <div class="_1card_comment_box_input">
                                                                                <input type="text" placeholder="write a reply...">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <!-- Reply -->
                                                            <div class="_1comment_items _1reply" v-for="(item, index) in 3" :key="index">
                                                                <div class="_1comment_main" style="">
                                                                    <div class="_1comment_pic">
                                                                        <a href="" class="_load_div">
                                                                            <img alt="" title="" class="_1comment_img" src="/static/img/pic.jpg">
                                                                        </a>
                                                                    </div>

                                                                    <div class="_1comment_details">
                                                                        <div class="_1comment_details_main">
                                                                        <div class="_1comment_details_left">
                                                                            <a href="" class="_1comment_name">Hussain Shipu</a>

                                                                                <p class="_1comment_text">this is comment</p>
                                                                            </div>

                                                                            <div class="_1comment_time">
                                                                                <p class="_1comment_time_text">a few seconds ago</p>

                                                                                <div class="_1card_details_drop">
                                                                                    <Dropdown  trigger="click"  placement="bottom-end">
                                                                                        <a href="javascript:void(0)">
                                                                                            <Icon style="transform: rotate(90deg);" type="md-more" />
                                                                                        </a>
                                                                                        <DropdownMenu slot="list">
                                                                                            <DropdownItem>Edit</DropdownItem>
                                                                                            <DropdownItem>Delete</DropdownItem>
                                                                                        </DropdownMenu>
                                                                                    </Dropdown>
                                                                                </div>
                                                                            </div> 
                                                                        </div>
                                                                        

                                                                        <div class="_1comment_like_give _1border_color _dis_flex align-items-center">
                                                                            <ul class="_1card_count_list _flex_space">
                                                                                <li><i class="far fa-thumbs-up"></i> Like</li> 
                                                                                <li><i class="far fa-comment-alt"></i> Reply</li>
                                                                            </ul> 
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- Reply -->
                                                        </div>
                                                    </div>
                                                     <!-- Comment -->
                                                </div>
                                            </div>
                                            <!-- Card -->
                                        </div>
                                        <!-- Timeline -->
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

export default {
    components: {
        Banner
    },

    data(){
        return {
           
        }
    },

    methods: {
        
    }
}
</script>