<template>
    <div>
        <div class="_main_content">
            <div class="_box _b_radious3">
                <div class="_1messenger">
                    <!-- Left -->
                    <div class="_1messenger_left" :class="messengerLeft? '_1messenger_left_close' : ''">
                        <div class="_1messenger_left_header">
                            <div class="_1messenger_search_header">
                                <div class="_1messenger_search_all">
                                    <div class="_1messenger_search">
                                        <Icon type="ios-search-outline" />
                                        <input type="text" placeholder="Search.."> 
                                        <div class="outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="_1messenger_left_menu">
                                <ul class="_1messenger_left_menu_list">
                                    <li class="_active"><Icon type="md-chatbubbles" /></li>
                                    <li><Icon type="md-document" /></li>
                                    <li><Icon type="md-list" /></li>
                                    <li><Icon type="md-people" /></li>
                                </ul>
                            </div>

                            <div class="_1messenger_chat_list_main">
                                <div class="_1messenger_chat_filter">
                                    <div class="_1messenger_chat_filter_one">
                                        <Dropdown trigger="click"  placement="bottom-start">
                                            <a href="javascript:void(0)">
                                                All users
                                                <Icon type="ios-arrow-down"></Icon>
                                            </a>
                                            <DropdownMenu slot="list">
                                                <DropdownItem>One</DropdownItem>
                                                <DropdownItem>Two aone</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <div class="_1messenger_chat_filter_two">
                                        <Button  size="small">Add Contact</Button>
                                    </div>
                                </div>

                                <div class="_1messenger_chat_list_all">
                                    <Tooltip class="_1messenger_chat_list_tool" theme="light" :content="item.name" placement="right" v-for="(item, index) in chatData" :key="index">
                                        <div class="_1messenger_chat_list" :class="[(item.active? '_active':'') , (item.unseen? '_unseen' : '')]" >
                                            <div class="_1messenger_chat_pic">
                                                <img v-if="item.image != ''" class="_1messenger_chat_img" :src="item.image" alt="" title="">
                                                <img v-else class="_1messenger_chat_img" src="/static/img/male.jpeg" alt="" title="">
                                            </div>

                                            <div class="_1messenger_chat_details">
                                                <p class="_1messenger_chat_name">{{ item.name }}</p>
                                                <p v-if="item.typing" class="_typing">Typing..</p>
                                                <p v-else class="_1messenger_chat_text">{{ item.text }}</p>
                                            </div>

                                            <div class="_1messenger_chat_time">
                                                <p class="_1messenger_chat_time_text">{{ item.time }}</p>
                                                <p class="_1messenger_chat_seen_icon"><Icon type="md-checkmark" /></p>
                                                <p class="_1messenger_chat_time_panding">7</p>
                                            </div>
                                        </div>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Left -->

                    <!-- Right -->
                    <div class="_1messenger_right">
                        <!-- Header -->
                        <div class="_1messenger_right_header">
                            <div class="_1messenger_right_header_left _active">
                                <a href="" class="_1messenger_right_pic">
                                    <img class="_1messenger_right_img" src="/static/img/pic.jpg" alt="" title="">
                                </a>

                                <div class="_1messenger_right_heder_details">
                                    <a href="" class="_1messenger_right_name _1text_overflow">Winnie Sliva</a>
                                    <p class="_1messenger_right_on">Online</p>
                                </div>
                            </div>

                            <div class="_1messenger_right_header_right">
                                <ul class="_1messenger_right_list">
                                    <li><Icon type="ios-call-outline" /></li>
                                    <li><Icon type="ios-videocam-outline" /></li>
                                    <li>
                                        <Dropdown class="_1messenger_right_list_more"  placement="bottom-right" trigger="click">
                                            <a href="javascript:void(0)">
                                                <Icon type="ios-more" />
                                            </a>
                                            <DropdownMenu slot="list">
                                                <DropdownItem>See</DropdownItem>
                                                <DropdownItem>Unfollow</DropdownItem>
                                                <DropdownItem>Block</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Header -->
                        
                        <div class="_mess_chat_pro" :class="[(messengerPro? '_1messenger_pro_open' : '') , (smallProClick? '_1messenger_pro_open_small' : '')]">
                            <!-- Chat -->
                            <div class="_1messenger_right_chat">
                                <div class="_1chat_all _1scrollbar">
                                    <!-- Friend message -->
                                    <div class="_1fri_mess">
                                        <div class="_1fri_mess_main">
                                            <!-- Item -->
                                            <div class="_1fri_mess_mess">
                                                <p class="_1fri_mess_text">Hi</p>
                                            </div>
                                            <!-- Item -->

                                            <!-- Item -->
                                            <div class="_1fri_mess_mess">
                                                <p class="_1fri_mess_text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, 
                                                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut</p>
                                            </div>
                                            <!-- Item -->

                                            <!-- Item -->
                                            <div class="_1fri_mess_mess">
                                                <p class="_1fri_mess_text">Hi maria i'm chat argentl nmvllflv</p>
                                                <p class="_1fri_mess_time">45:00pm</p>
                                            </div>
                                            <!-- Item -->

                                            <!-- image -->
                                            <div class="_1fri_mess_img_all">
                                                <div class="_1fri_mess_pic" v-for="(item, index) in 5" :key="index">
                                                    <img class="_1fri_mess_img" src="/static/img/photo.jpg" alt="" title="">
                                                </div>
                                            </div>
                                            <!-- image -->

                                            <!-- Files -->
                                            <div class="_1fri_files_main _1own_files">
                                                <div class="_1fri_files">
                                                    <div class="_1fri_files_icon">
                                                        <Icon type="md-document" />
                                                    </div>

                                                    <div class="_1fri_files_details">
                                                        <p class="_1fri_files_name _1text_overflow">i'm chat argentl</p>
                                                        <p class="_1fri_files_num">122 kb</p>
                                                    </div>

                                                    <div class="_1fri_files_download_main">
                                                        <div class="_1fri_files_download">
                                                            <Icon type="md-download" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Files -->

                                            <!-- Item -->
                                            <div class="_1fri_mess_mess">
                                                <p class="_1fri_mess_text">Hi maria i'm chat argentl nmvllflv</p>
                                                <p class="_1fri_mess_time">45:00pm</p>
                                            </div>
                                            <!-- Item -->
                                        </div>

                                        <!-- Friend image -->
                                        <div class="_1fri_pic">
                                            <img class="_1fri_img" src="/static/img/pic.jpg" alt="" title="">
                                        </div>
                                        <!-- Friend image -->
                                    </div>
                                    <!-- Friend message -->

                                    <!-- Days and date -->
                                    <p class="_1mess_date">26 Dec, 2020</p>
                                    <!-- Days and date -->

                                    <!-- Own message -->
                                    <div class="_1own_mess">
                                        <div class="_1own_mess_main">
                                            <!-- Item -->
                                            <div class="_1own_mess_mess">
                                                <p class="_1own_mess_text">Hi</p>
                                            </div>
                                            <!-- Item -->

                                            <!-- Item -->
                                            <div class="_1own_mess_mess">
                                                <p class="_1own_mess_text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, 
                                                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut</p>
                                            </div>
                                            <!-- Item -->

                                            <!-- Item -->
                                            <div class="_1own_mess_mess">
                                                <p class="_1own_mess_text">Hi maria i'm chat argentl nmvllflv</p>
                                            </div>
                                            <!-- Item -->

                                            <!-- image -->
                                            <div class="_1fri_mess_img_all _1own_mess_img_all">
                                                <div class="_1fri_mess_pic" v-for="(item, index) in 5" :key="index">
                                                    <img class="_1fri_mess_img" src="/static/img/photo.jpg" alt="" title="">
                                                </div>
                                            </div>
                                            <!-- image -->

                                            <!-- Files -->
                                            <div class="_1fri_files_main">
                                                <div class="_1fri_files">
                                                    <div class="_1fri_files_icon">
                                                        <Icon type="md-document" />
                                                    </div>

                                                    <div class="_1fri_files_details">
                                                        <p class="_1fri_files_name _1text_overflow">i'm chat argentl</p>
                                                        <p class="_1fri_files_num">122 kb</p>
                                                    </div>

                                                    <div class="_1fri_files_download_main">
                                                        <div class="_1fri_files_download">
                                                            <Icon type="md-download" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Files -->

                                            <!-- Item -->
                                            <div class="_1own_mess_mess">
                                                <p class="_1own_mess_text">Hi maria i'm chat argentl nmvllflv</p>
                                                <p class="_1own_mess_time">45:00pm</p>
                                            </div>
                                            <!-- Item -->
                                        </div>
                                    </div>
                                    <!-- Own message -->
                                </div>

                                <div class="_1mess_textarea">
                                    <div class="_1mess_textarea_top">
                                        <div class="demo-upload-list" v-for="(item, index) in 4" :key="index">
                                            <template>
                                                <!-- <img :src="item.url"> -->
                                                <img src="item.url" alt="" title="">
                                                <div class="demo-upload-list-cover">
                                                    <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                                                </div>
                                            </template>
                                        </div>

                                        <div class="_1fri_files">
                                            <div class="_1fri_files_icon">
                                                <Icon type="md-document" />
                                            </div>

                                            <div class="_1fri_files_details">
                                                <p class="_1fri_files_name _1text_overflow">i'm chat argentl</p>
                                                <p class="_1fri_files_num">122 kb</p>
                                            </div>

                                            <div class="_1fri_files_download_main">
                                                <div class="_1fri_files_download">
                                                    <Icon type="md-download" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="_1mess_textarea_main">
                                        <div class="_1mess_textarea_one">
                                            <div class="_1mess_textarea_one_icon">
                                                <Icon type="md-cloud-upload" />
                                            </div>
                                        </div>

                                        <div class="_1mess_textarea_input">
                                            <Input type="textarea" :autosize="{minRows: 1,maxRows: 5}" placeholder="Type a message" />
                                            <div class="_1mess_textarea_emoj">
                                                <Icon type="md-happy" />
                                            </div>
                                        </div>

                                        <div class="_1mess_textarea_send">
                                            <Icon type="md-send" />
                                        </div>
                                    </div>
                                </div>

                                <!-- Profile button -->
                                <div @click="proClick" class="_pro_button">
                                    <img class="_pro_button_img" src="/static/img/pic.jpg" alt="" title="">
                                </div>

                                <div @click="smallProClick = true" class="_pro_button _small_pro_button">
                                    <img class="_pro_button_img" src="/static/img/ONE.jpg" alt="" title="">
                                </div>
                                <!-- Profile button -->
                            </div>
                            <!-- Chat -->

                            <!-- Profile -->
                            <div class="_1mess_pro _1scrollbar">
                                <p @click="closeProClick" class="_1mess_pro_close"><Icon type="md-close" /></p>

                                <a href="" class="_1mess_pro_pic">
                                    <img class="_1mess_pro_img" src="/static/img/pic.jpg" alt="" title="">
                                </a>

                                <a class="_1mess_pro_name" href="">Winnie Sliva</a>

                                <p class="_1mess_pro_pro">Project Manager</p>

                                <ul class="_1mess_pro_list">
                                    <li>+3453 3453 34534 </li>
                                    <li><a href="">giles.sdfsdf@gmail.com</a></li>
                                    <li>103 Donnelly Shol SAute 265</li>
                                </ul>
                                
                                <!-- Share file -->
                                <div class="_1mess_share">
                                    <p class="_1mess_share_title">Shared files</p>
                                    
                                    <div class="_1mess_share_main" v-for="(item, index) in shareFiles" :key="index">
                                        <p class="_1mess_share_time">@ {{ item.time }}</p>
                                        <div class="_1mess_share_pic">
                                            <img class="_1mess_share_img" :src="item.image" alt="" title="">
                                        </div>

                                        <div class="_1mess_share_details">
                                            <p class="_1mess_share_name _1text_overflow">{{ item.name }}</p>
                                            <p class="_1mess_share_num _1text_overflow">{{ item.stroage }}</p>
                                        </div>

                                        <div class="_1mess_share_down"><Icon type="md-download" /></div>
                                    </div>

                                    <div class="_see_more_main">
                                        <p class="_1link _see_more">See more</p>
                                    </div>
                                </div>
                                <!-- Share file -->

                                <!-- Share Photo -->
                                <div class="_1mess_share_all">
                                    <div class="_1mess_share" v-for="(item, index) in 4" :key="index">
                                        <p class="_1mess_share_title">Shared Photo</p>
                                        
                                        <div class="_1mess_photo_all">
                                            <div class="_1mess_photo_main" v-for="(item, index) in messPhoto" :key="index">
                                                <div class="_1mess_photo">
                                                    <img class="_1mess_photo_img" :src="item.image" alt="" title="">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="_see_more_main">
                                            <p class="_1link _see_more">See more</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- Share Photo -->
                            </div>
                            <!-- Profile -->
                        </div>
                    </div>
                    <!-- Right -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                // active: this.chatData.active,
                messengerLeft: false,
                messengerPro: false,
                smallProClick: false,

                chatData: [
                    {
                        image: '/static/img/photo.jpg',
                        name: 'John Brown',
                        text: 'New York No. 1 Lake Park',
                        time: '11:29',
                        active: true,
                        unseen: false
                    },
                    {
                        image: '',
                        name: 'Winnie Sliva',
                        text: 'Sent you a file',
                        time: '11:29',
                        active: false,
                        unseen: false
                    },
                    {
                        image: '/static/img/pic.jpg',
                        name: 'Johnny Guerrero',
                        text: 'We have new project for sale in market. It will',
                        time: 'today',
                        active: true,
                        unseen: true,
                        typing: true
                    },
                    {
                        image: '/static/img/ONE.jpg',
                        name: 'Jon Snow',
                        text: 'Ottawa No. 2 Lake Park',
                        time: '11:29',
                        active: false,
                        unseen: true
                    },
                    {
                        image: '/static/img/ons.png',
                        name: 'Jim Green',
                        text: 'Fresh ui for our',
                        time: '07:29',
                        active: true,
                        unseen: false
                    },
                    {
                        image: '',
                        name: 'Pauline Colon',
                        address: 'Sydney No. 1 Lake Park',
                        time: '16:00',
                        active: false,
                        unseen: false,
                        typing: true
                    },
                    {
                        image: '/static/img/ONE.jpg',
                        name: 'Jon Snow',
                        text: 'Ottawa No. 2 Lake Park',
                        time: '11:29',
                        active: false,
                        unseen: false
                    }
                ],

                messPhoto: [
                    {
                        image: '/static/img/photo.jpg'
                    },
                    {
                        image: '/static/img/ONE.jpg'
                    },
                    {
                        image: '/static/img/pic.jpg'
                    },
                    {
                        image: '/static/img/logo1.png'
                    },
                    {
                        image: '/static/img/male.jpeg'
                    },
                    {
                        image: '/static/img/sliderpic.png'
                    },
                    {
                        image: '/static/img/transation.png'
                    },
                    {
                        image: '/static/img/ons.png'
                    }
                ],

                shareFiles: [
                    {
                        time: '12:09 AM',
                        image: '/static/img/photo.jpg',
                        name: 'this.chatData.active.svg',
                        stroage: '200 kb'
                    },
                    {
                        time: '02:09 PM',
                        image: '/static/img/logimage.png',
                        name: 'style.css',
                        stroage: '10 kb'
                    }
                ]
            }
        },

        methods:{
            proClick(){
                this.messengerLeft = true
                this.messengerPro = true
            },

            closeProClick(){
                this.messengerLeft = false
                this.messengerPro = false
                this.smallProClick= false
            }
        }
    }
</script>

<style scoped>
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>