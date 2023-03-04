<template>
    <div class="bio">
        <h1>{{resume.name}}</h1>
        <h3 class="text-mute mt-4">{{resume.title}}</h3>

        <div class="personal-info">
            <h4 class="heading">Info</h4>

            <div class="subheading">
                <fa-icon icon="location-dot" class=""></fa-icon>
                <div class="info">
                    {{ resume.address.city }} {{ resume.address.state }}
                </div>
            </div>

            <div class="subheading">
                <fa-icon :icon="resume.websites.github.icon"></fa-icon>
                <a :href="resume.websites.github.url" class="info" target="_blank" rel="noopener noreferrer">
                    
                    {{ resume.websites.github.title }}
                </a>
            </div>

            <div class="subheading">
                <fa-icon :icon="resume.websites.linkedin.icon"></fa-icon>
                <a :href="resume.websites.linkedin.url" target="_blank"
                    rel="noopener noreferrer">{{ resume.websites.linkedin.title }}</a>
            </div>

            <!-- <div class="subheading contact-me" @click="showContactForm">
                <fa-icon icon="comment"></fa-icon>
                <div class="info">
                    Contact Me
                </div>
            </div> -->

        </div>

        <div class="education">
            <h4 class="heading">Education</h4>

            <template v-for="item in resume.education">
                <h5 class="degree">{{ item.degree }}</h5>
                <small>{{ item.school }}</small><br>
                <small>{{ item.year }}</small>
            </template>
        </div>


        <div class="hobbies">
            <h4 class="heading">Hobbies</h4>
            <template v-for="hobby in resume.hobbies">
                <span class="hobby"><fa-icon :icon="hobby.icon"></fa-icon>{{ hobby.hobby}}</span>
            </template>

        </div>
    </div>
</template>

<style lang="scss">
.contact-me {
    cursor: pointer;

    &:hover {
        color: #ccc;
    }
}
</style>

<script setup lang="ts">

    var props = defineProps(['resume'])

    const showContactForm = () => {alert('clicked contact')}

</script>