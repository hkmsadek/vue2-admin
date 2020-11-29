<template>
    <div>
        <div class="_main_content">
            <div class="_newFeed">
                <div class="container">
                    <!-- Feed -->
                    <div class="col-12 col-md col-lg">
                        <div class="_newFeed_main">
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
                                                <a href="/pages/3" class="_load_div" style="color: black;">
                                                    <img alt="" title="" class="_1card_details_img" src="/static/img/logimage.png">
                                                </a>
                                            </div>

                                            <div class="_1card_details">
                                                <div class="_status_card_title">
                                                    <a href="/pages/3" class="" style="color: black;"><span>Appifylab</span></a>
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
                    <!-- Feed -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
           
        }
    },

    methods: {
        
    }
}
</script>