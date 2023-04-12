import { ref } from 'vue';

// 컴포지션 api 함수는 "use" 로 시작해야함
export default function useAlert() {
  const alertIsVisible = ref(false);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [alertIsVisible,
    showAlert,
    hideAlert];
}