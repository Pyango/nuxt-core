export function useToast() {
    const showToast = useState('showToast', () => false);
    const toastType = useState<'success' | 'error' | 'warning' | 'info'>('toastType', () => 'success');
    const toastTitle = useState('toastTitle', () => '');
    const toastDescription = useState('toastDescription', () => '');
    const timerRef = ref<ReturnType<typeof setTimeout> | null>(null);
    const toast = (
        {title, description, type = 'success'}: {title: string; description: string; type?: 'success' | 'error' | 'warning' | 'info'}
    ) => {
      toastTitle.value = title;
      toastDescription.value = description;
      toastType.value = type;
      showToast.value = false
      clearTimeout(timerRef.value ?? 0)
      timerRef.value = setTimeout(() => {
        showToast.value = true
      }, 100)
    }

    return {
        showToast,
        toastType,
        toastTitle,
        toastDescription,
        toast,
    }
}
