<script setup lang="ts">
</script>

<template>
  <div class="p-8 h-screen bg-blue-500">
    <header class="flex items-center gap-5">
      Core Layer
      <LanguageSwitch />
    </header>
    <h1>{{ $t('welcome') }}</h1>
  </div>
</template>
