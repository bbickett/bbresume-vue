<template>
    <div class="home">
        <div class="row">
            <div class="col-xs-12 col-md-5 col-lg-4 bg-brand p-4">
                <bio :resume="data"></bio>
            </div>
            <div class="col p-5">
                <experience :resume="data"></experience>
                <skills :resume="data"></skills>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">



import Bio from '@/components/Bio.vue'
import Experience from '@/components/Experience.vue'
import Skills from '@/components/Skills.vue'

const data = await fetch('/resume.json', { cache: "no-store" }).then(r => r.json())


</script>
