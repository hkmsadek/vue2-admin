<template>
    <div>
        <div class="_mar_b20">
        <p class="_3title">Work and Education</p>
        </div>

        <p class="_work_title _1border_color">WORK</p>

        <div class="_mar_b35">
        <div class="_1add" v-if="!isWork">
        <span @click="workClick(true)">
        <i class="fas fa-plus"></i> Add a work place
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

        <p class="_work_title _1border_color">PROFESSINAL SKILLS</p>

        <div class="_mar_b35">
        <div class="_1add" v-if="!isSkills">
        <span @click="skillsClick(true)">
        <i class="fas fa-plus"></i> Add a professinal skils
        </span>
        </div>

        <div class="_from_data" v-if="isSkills">
        <div class="row">
        <div class="col-12 col-md-12 col-lg-12">
            <div class="_1input_group">
            <p class="_1label">Professional Skills</p>
            <Input placeholder="Professional Skills" />
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
                <button class="_3btn"  @click="skillsClick(false)" type="button">Cancel</button>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>

        <p class="_work_title _1border_color">COLLEGE</p>

        <div class="_mar_b35">
        <div class="_1add _mar_b15"  v-if="!isCollege">
            <span  @click="collegeClick(true)">
            <i class="fas fa-plus"></i> Add a college
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
                <p class="_1label">Graduated</p>
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
                Studied at
                <a href class="_1link">Blue Bird School & College, Sylhet</a>
            </p>
            <p class="_overview_card_pre">Sylhet</p>
            </div>
        </div>

        <div class="_overview_card">
            <div class="_overview_card_pic">
            <img class="_overview_card_img" src="/img/bg2.jpg" alt title />
            </div>

            <div class="_overview_card_details">
            <p class="_overview_card_title">
                Studied at
                <a href class="_1link">Blue Bird School & College, Sylhet</a>
            </p>
            <p class="_overview_card_pre">Derai, Sylhet, Bangladesh</p>
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
           isSkills:false,
           isCollege:false 
        }
    },

    methods: {
        workClick(value){
           this.isWork = value
        },
        skillsClick(value){
            this.isSkills = value
        },
        collegeClick(value){
            this.isCollege = value
        }
    }
}
</script>