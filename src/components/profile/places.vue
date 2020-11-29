<template>
    <div>
        <div class="_mar_b20">
            <p class="_3title">YOU'VE LIVED</p>
            </div>

            <p class="_work_title _1border_color">CURRENT CITY AND HOMETOWN</p>

            <div class="_mar_b35">
            <div class="_1add _mar_b15"  v-if="!isCollege">
                <span  @click="collegeClick(true)">
                <i class="fas fa-plus"></i> Edit your city
                </span>
            </div>

            <div class="_from_data _padd_b30" v-if="isCollege">
                <div class="row">
                <div class="col-12 col-md-6 col-lg-6">
                    <div class="_1input_group">
                    <p class="_1label">School</p>
                    <Input placeholder="Where have you worked?" />
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-6">
                    <div class="_1input_group">
                    <p class="_1label">Time Period</p>
                    <DatePicker style="width:100%" type="date" placeholder="Select date"></DatePicker>
                    </div>
                </div>

                <div class="col-12 col-md-12 col-lg-12">
                    <div class="_1input_group">
                    <p class="_1label">Description</p>
                    <Input v-model="value6" type="textarea" :rows="4" placeholder="Description" />
                    </div>
                </div>

                <div class="col-12 col-md-12 col-lg-12">
                    <div class="_1button_group _flex_row justify-content-center align-items-center">
                    <div class="_flex_auto">
                        <Dropdown trigger="click">
                        <a class="_public" href="javascript:void(0)">
                            <i class="fas fa-globe-europe"></i> Public
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>Only me</DropdownItem>
                            <DropdownItem>Only Friend</DropdownItem>
                            <DropdownItem>Public</DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div class="_flex_auto _mar_l10">
                        <button class="_1btn" type="button">Save</button>
                    </div>
                    <div class="_flex_auto _mar_l10">
                        <button class="_3btn"  @click="collegeClick(false)" type="button">Cancel</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="_overview_card">
                <div class="_overview_card_pic">
                <img class="_overview_card_img" src="/img/bg2.jpg" alt title />
                </div>

                <div class="_overview_card_details">
                <p class="_overview_card_title">
                    <a href class="_1link">Sylhet</a>
                </p>
                <p class="_overview_card_pre">Current city</p>
                </div>
            </div>

            <div class="_overview_card">
                <div class="_overview_card_pic">
                <img class="_overview_card_img" src="/img/bg2.jpg" alt title />
                </div>

                <div class="_overview_card_details">
                <p class="_overview_card_title">
                    <a href class="_1link">Sylhet</a>
                </p>
                <p class="_overview_card_pre">Hometowen</p>
                </div>
            </div>
            </div>

            <p class="_work_title _1border_color">OTHER PLACES LIVED</p>

            <div class="_mar_b35">
            <div class="_1add" v-if="!isWork">
                <span @click="workClick(true)">
                <i class="fas fa-plus"></i> Add a place
                </span>
            </div>

            <div class="_from_data" v-if="isWork">
                <div class="row">
                <div class="col-12 col-md-6 col-lg-6">
                    <div class="_1input_group">
                    <p class="_1label">Company</p>
                    <Input placeholder="Where have you worked?" />
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-6">
                    <div class="_1input_group">
                    <p class="_1label">Position</p>
                    <Input placeholder="What is your job title?" />
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-6">
                    <div class="_1input_group">
                    <p class="_1label">City Town</p>
                    <Input placeholder="What is your job title?" />
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-6">
                    <div class="_1input_group">
                    <p class="_1label">Time Period</p>
                    <DatePicker style="width:100%" type="date" placeholder="Select date"></DatePicker>
                    </div>
                </div>

                <div class="col-12 col-md-12 col-lg-12">
                    <div class="_1input_group">
                    <p class="_1label">Description</p>
                    <Input v-model="value6" type="textarea" :rows="4" placeholder="Description" />
                    </div>
                </div>

                <div class="col-12 col-md-12 col-lg-12">
                    <div class="_1button_group _flex_row justify-content-center align-items-center">
                    <div class="_flex_auto">
                        <Dropdown trigger="click">
                        <a class="_public" href="javascript:void(0)">
                            <i class="fas fa-globe-europe"></i> Public
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>Only me</DropdownItem>
                            <DropdownItem>Only Friend</DropdownItem>
                            <DropdownItem>Public</DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div class="_flex_auto _mar_l10">
                        <button class="_1btn" type="button">Save</button>
                    </div>
                    <div class="_flex_auto _mar_l10">
                        <button class="_3btn"  @click="workClick(false)" type="button">Cancel</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
           isWork:false,
           isCollege:false 
        }
    },

    methods: {
        workClick(value){
           this.isWork = value
        },
        collegeClick(value){
            this.isCollege = value
        }
    }
}
</script>