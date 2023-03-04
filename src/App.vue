<template>
  <div class="container-xl">

    <div class="page">
      <div class="container-fluid">
        <Suspense>
          <router-view></router-view>
        </Suspense>
        
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">


</script>