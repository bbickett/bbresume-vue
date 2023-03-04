<template>
    <div class="experience">
        <p class="summary">
            {{  resume.summary }}
        </p>

        <h4 class="page-heading">Experience</h4>
        <template v-for="(experience, index) in props.resume.experience">
            <div class="job">
                <div class="dates">
                    {{ experience.startdate }} - {{ experience.enddate }}
                </div>

                <div class="position">
                    <h5 class="title">{{ experience.title }}</h5>
                    <small class="company">{{ experience.company }}</small>

                    <ul class="duties">
                        <template v-for="duty in experience.duties">
                            <li>{{ duty }}</li>
                        </template>
                        
                    </ul>
                </div>
            </div>
        </template>
    </div>
</template>


<script setup lang="ts">
    import { ref } from 'vue'

    var props = defineProps(['resume'])

    let showMoreJobs = ref(false)
    
    var listedJobs = (!showMoreJobs) ? props.resume.experience.slice(0, 4) : props.resume.experience




</script>