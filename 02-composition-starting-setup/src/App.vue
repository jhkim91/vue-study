<template>
  <section class="container">
    <h2>{{ userRefs.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script>
import { ref, reactive, toRefs, isRef, isReactive } from 'vue';

export default {
  setup() {
    // ref 사용시 반응형 값이 됨

    const uName = ref('Maximilian');
    // => uName.value 로 수정, 요소에서 사용시 uName으로 사용

    // object 사용시 object를 넘겨야함 이유: 요소에서 user.value.name 값은 ref에서 추출한 값이기때문
    // const user = ref({ name: 'Maximilian', age: 31, });

    // 그래서 object 는 reactive 사용 (user.name 으로 액세스 가능)
    const user = reactive({ name: 'Maximilian', age: 31 });
    // reactive 내부값을 모두 ref 치환
    const userRefs = toRefs(user);

    console.log(isRef(uName));
    console.log(isReactive(user));

    setTimeout(() => {
      user.name = 'Max';
      user.age = 32;
    }, 2000);

    return {
      uName,
      userName: user.name,
      age: user.age,
      user: user,
      userRefs,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
