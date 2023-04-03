const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
        }, {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
        }
      ]
    }
  },
})


// 1번째 인자: "-"를 포함한 두 단어로 구성되어야함(공식 내장 HTML 요소와 충돌을 막기위함)
// 2번째 인자: 미니 앱
app.component('friend-contact', {
  template: `
    <li v-for="friend in friends">
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friends: [{
        id: 'julie',
        name: 'Julie Jones',
        phone: '09876 543 221',
        email: 'julie@localhost.com',
      }],
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    }
  }
})

app.mount('#app')