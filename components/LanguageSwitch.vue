<script setup lang="ts">
import IconEn from '../assets/icons/circle-flags-en.svg';
import IconDe from '../assets/icons/circle-flags-de.svg';

const { locale, locales, setLocale } = useI18n();
const currentLocale = ref(locale.value);

watch(currentLocale, () => {
  setLocale(currentLocale.value);
});
</script>

<template>
  <SelectRoot v-model="currentLocale">
    <SelectTrigger>
      <button class="px-2 py-1 border flex items-center gap-2 rounded-full bg-white">
          <IconDe v-if="locale === 'de'" filled />
          <IconEn v-if="locale === 'en'" filled />
          {{ locale === 'en' ? 'English' : 'Deutsch' }}
      </button>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="min-w-[160px] bg-white rounded-lg border z-[100]"
        :side-offset="5"
        position="popper"
      >
        <SelectViewport class="p-[5px]">
            <SelectItem
              v-for="localeOption in locales"
              :key="localeOption.code"
              class="px-3 py-2 rounded-xl flex items-center gap-2 select-none"
              :class="localeOption.code === locale ? 'bg-blue-600 text-white' : ''"
              :value="localeOption.code"
            >
              <IconDe v-if="localeOption.code === 'de'" filled />
              <IconEn v-if="localeOption.code === 'en'" filled />
              <SelectItemText>
                {{ localeOption.code }}
              </SelectItemText>
            </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>

  </SelectRoot>
</template>
