export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const localePath = useLocalePath();
  const {toast} = useToast();

  let locale = 'en';
  // called right after a new locale has been set
  nuxtApp.hook('i18n:localeSwitched', ({ oldLocale, newLocale }) => {
    console.log('onLanguageSwitched', oldLocale, newLocale);
    locale = newLocale;
  });

  const API_URL = config.public.apiUrl;

  const api = $fetch.create({
    baseURL: API_URL,
    onRequest({ _request, options, _error }) {
      const CSRFToken = useCookie('csrftoken');
      if (CSRFToken?.value) {
        options.headers.set('X-CSRFToken', CSRFToken?.value);
      }
      options.headers.set('Accept-Language', locale);
    },
    async onResponseError({response, options, _error}) {
      const skipError = (options as never)?.skipError;
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo(localePath('/login')));
        return;
      }

      if (!skipError) {
        const message =
          response._data?.message ||
          response._data?.detail ||
          `Error ${response.status}`;

        toast({
          title: 'Error',
          description: message,
          type: 'error',
        });
      }
    },
  });

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  };
});
