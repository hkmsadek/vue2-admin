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
                        <p class="_login_top_text">Create a new account</p>
                    </div>

                    <div class="_login_form">
                        <Form>
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-6">
                                    <FormItem>
                                        <Input size="large" type="text" placeholder="Frist Name"/>
                                    </FormItem>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <FormItem>
                                        <Input size="large" type="text" placeholder="Last Name"/>
                                    </FormItem>
                                </div>
                                <div class="col-12 col-md-12 col-lg-12">
                                    <FormItem>
                                        <Input size="large" type="text" placeholder="Email"/>
                                    </FormItem>
                                </div>
                                <div class="col-12 col-md-12 col-lg-12">
                                    <FormItem label="Genger">
                                        <RadioGroup>
                                            <Radio label="Male">
                                                <span>Male</span>
                                            </Radio>
                                            <Radio label="Female">
                                                <span>Female</span>
                                            </Radio>
                                        </RadioGroup>
                                    </FormItem>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <FormItem>
                                        <Input size="large" type="password"  placeholder="Password"/>
                                    </FormItem>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <FormItem>
                                        <Input size="large" type="password"  placeholder="Confirm Password"/>
                                    </FormItem>
                                </div>
                            </div>
                            
                            <div class="col-12 col-md-12 col-lg-12">
                                <FormItem>
                                    <button class="_log_btn">Sign up</button>
                                </FormItem>
                            </div>
                        </Form>
                    </div>

                    <div class="_login_bottom">
                        <p class="_login_do">Do you have a Account?  <router-link class="_3link _mar_l5" to="/login">Login</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>