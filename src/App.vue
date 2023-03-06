<template>
  <div class="container-xl">

    <div class="page">
      <div class="ribbon"><a href="/react"><span><small>See in<br/></small><fa-icon icon="fa-brands fa-react"></fa-icon> React</span></a></div>
      <div class="container-fluid">
        <Suspense>
          <router-view></router-view>
        </Suspense>
        
      </div>
    </div>

    <div class="built-with">
      <a href="https://github.com/bbickett/bbresume-vue">
        Built with <fa-icon class="px-1" icon="fa-brands fa-vuejs" size="lg"></fa-icon> Vue
      </a>
    </div>
  </div>
</template>

