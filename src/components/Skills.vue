<template>
    <div class="skills-section">
        <h4 class="page-heading">Skills</h4>

        <h5 class="header">Languages</h5>
        <div class="skills">
            <template v-for="skill in languageSkills">
                <div class="skill">{{ skill.skill }}
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" :aria-label="skill.skill" :aria-valuenow="skill.percent" aria-valuemin="0" aria-valuemax="100" :style="`width: ${skill.percent}%`"></div>
                    </div>
                </div>
            </template>
        </div>

        <h5 class="header">Libraries / Frameworks</h5>
        <div class="skills">
            <template v-for="skill in librarySkills">
                <div class="skill">{{ skill.skill }}
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" :aria-label="skill.skill" :aria-valuenow="skill.percent" aria-valuemin="0" aria-valuemax="100" :style="`width: ${skill.percent}%`"></div>
                    </div>
                </div>
            </template>
        </div>

        <h5 class="header">Development Tools</h5>
        <div class="skills">
                <template v-for="skill in devtoolSkills">
                    <div class="skill">{{ skill.skill }}
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" :aria-label="skill.skill" :aria-valuenow="skill.percent" aria-valuemin="0" aria-valuemax="100" :style="`width: ${skill.percent}%`"></div>
                        </div>
                    </div>
                </template>
        </div>

        <h5 class="header">Personal</h5>
        <div class="skills">
            <template v-for="skill in personalSkills">
                <div class="skill"><fa-icon :icon="skill.icon"></fa-icon>{{ skill.skill }}</div>
            </template>
        </div>

    </div>
</template>


<script setup lang="ts">
    import Skill from '@/types/Skill'

    var props = defineProps(['resume'])

    var languageSkills = props.resume.skills.filter((s: Skill) => s.type === 'language')
    var librarySkills = props.resume.skills.filter((s: Skill) => s.type === 'library')
    var devtoolSkills = props.resume.skills.filter((s: Skill) => s.type === 'devtool')
    var personalSkills = props.resume.skills.filter((s: Skill) => s.type === 'personal')

</script>