export function useToast() {
    const showToast = useState('showToast', () => false);
    const toastType = useState<'success' | 'error'>('toastType', () => 'success');
    const toastTitle = useState('toastTitle', () => '');
    const toastDescription = useState('toastDescription', () => '');
    const timerRef = ref(0)

    const toast = (
        {title, description, type = 'success'}: {title: string; description: string; type?: 'success' | 'error'}
    ) => {
      toastTitle.value = title;
      toastDescription.value = description;
      toastType.value = type;
      showToast.value = false
      window.clearTimeout(timerRef.value)
      timerRef.value = window.setTimeout(() => {
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