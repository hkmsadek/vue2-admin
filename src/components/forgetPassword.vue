<template>
    <div>
        <div class="_login">
            <div class="_login_left">
                <div class="_login_overlay"></div>

                <div class="authentic_nav_logo">
                    <a href="" class="authentic_nav_logo_a">
                        <img src="/static/img/logo-icon.png" alt="" title="" class="_navbar_logo_img"> 
                        <img src="/static/img/logo-text.png" alt="" title="" class="_navbar_logo_img_text">
                    </a>
                </div>

                <p class="_login_left_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus elit.</p>

                <Button type="primary">Learn More</Button>
            </div>

            <div class="_login_right">
                <div class="_login_main">
                    <div class="_login_top _1border_color">
                        <p class="_login_top_text">Change your password</p>
                    </div>

                    <div class="_login_form">
                        <Form ref="formInline">
                            <FormItem prop="user">
                                <Input  size="large" type="text"  placeholder="Email">
                                    <Icon type="ios-mail" />
                                </Input>
                            </FormItem>
                            
                            <FormItem>
                                <button class="_log_btn">Sand mail</button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>