<template>
  <section class="container">
    <user-data
      :first-name="firstName"
      :last-name="lastName"
      :age="age"
    ></user-data>
    <!-- <h2>{{ userRefs.name }}</h2>
    <h2>{{ uName }}</h2>
    <h3>{{ user.age }}</h3> -->
    <button @click="setAge">Change Age</button>
    <div>
      <!-- <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="last Name" @input="setLastName" /> -->
      <input type="text" placeholder="First Name" v-model="firstName" />
      <!-- <input type="text" placeholder="last Name" v-model="lastName" /> -->
      <input type="text" placeholder="last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  isRef,
  isReactive,
  computed,
  watch,
  provide,
} from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: { UserData },
  setup() {
    // ref 사용시 반응형 값이 됨
    const firstName = ref('');
    const lastName = ref('');

    // const uName = ref('Maximilian');
    // => uName.value 로 수정, 요소에서 사용시 uName으로 사용

    // object 사용시 object를 넘겨야함 이유: 요소에서 user.value.name 값은 ref에서 추출한 값이기때문
    // const user = ref({ name: 'Maximilian', age: 31, });

    // 그래서 object 는 reactive 사용 (user.name 으로 액세스 가능)
    const user = reactive({ name: 'Maximilian', age: 31 });
    // reactive 내부값을 모두 ref 치환
    const userRefs = toRefs(user);

    console.log(isRef(firstName));
    console.log(isReactive(user));

    const uAge = ref(31);
    provide('userAge', uAge);
    watch(uAge, function (newValue, oldValue) {
      console.log('Old age: ' + oldValue);
      console.log('New age: ' + newValue);
    });
    // watch([uAge, uName], function (newValues, oldValues) {
    //   console.log('Old age: ' + oldValues[0]);
    //   console.log('New age: ' + newValues[0]);
    // });

    setTimeout(() => {
      user.name = 'Max';
      user.age = 32;
    }, 2000);

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });
    function setNewAge() {
      // user.age = 33;
      uAge.value = 33;
    }
    function setFirstName(event) {
      firstName.value = event.target.value;
    }
    // function setLastName(event) {
    //   lastName.value = event.target.value;
    // }
    const lastNameInput = ref(null);
    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return {
      uName,
      age: user.age,
      user: user,
      userRefs,
      setAge: setNewAge,
      setFirstName,
      setLastName,
      firstName,
      lastName,
      lastNameInput,
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
