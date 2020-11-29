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
                        <p class="_login_top_text">Login your account</p>
                    </div>

                    <div class="_login_form">
                        <Form>
                            <FormItem prop="user" :error="errorData.email">
                                <Input  size="large" type="text" v-model="formInline.email" placeholder="Username">
                                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                                </Input>
                            </FormItem>
                            <FormItem prop="password" :error="errorData.password">
                                <Input size="large" type="password" v-model="formInline.password" placeholder="Password">
                                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                                </Input>
                            </FormItem>
                            <p class="_forget"><router-link class="_1link" to="/forgetPassword">Forget password?</router-link></p>
                            <FormItem>
                                <Button class="_log_btn" @click="handleSubmit">Signin</Button>
                            </FormItem>
                        </Form>
                    </div>

                    <div class="_login_bottom">
                        <p class="_login_do">Don't have Account?  <router-link class="_3link _mar_l5" to="/register">Register Now</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      formInline: {
            email: '',
            password: ''
        },
      errorData: {
            email: '',
            password: ''
        }
        
    }
  },

  methods:{
    handleSubmit() {
        this.errorData={
            email: '',
            password: ''
        }
            if(!this.formInline.email   || this.formInline.email==null || this.formInline.email.trim()==''){
                return  this.errorData.email = "Email is required!!"
            }
              if(!this.formInline.password   || this.formInline.password==null || this.formInline.password.trim()==''){
                return  this.errorData.password = "Email is required!!"
            }


             window.location ='/'
       
    }
  }
}
</script>