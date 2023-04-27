<template>
  <v-app>
    <HeaderView />
    <v-main>
      <v-container>
        <router-view
        :books="books"
        @add-book-list="addBook"
        @update-book-info="updateBookInfo"
        @delete-book="deleteBook"/>
      </v-container>
    </v-main>
    <FooterView />
  </v-app>
</template>

<script>
import HeaderView from '@/global/HeaderView.vue';
import FooterView from '@/global/FooterView.vue';
const STORAGE_KEY = 'books'

export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView
  },
  data() {
    return {
      books: [],
      nextId: 1
    }
  },
  methods: {
    addBook(e) {
      this.books.push({
        id: this.nextId,
        title: e.title,
        image: e.image,
        description: e.description,
        readDate: '',
        memo: ''
      })
      this.nextId++
      this.saveBooks()
      //最後に追加したidの取得コード
      this.goToEditPage(this.books.slice(-1)[0].id)
    },
    updateBookInfo(e) {
      let index = e.id -1
      const updateInfo = {
        id: e.id,
        readDate: e.readDate,
        memo: e.memo,
        title: this.books[index].title,
        image: this.books[index].image,
        description: this.books[index].description
      }

      this.books.splice(index, 1, updateInfo)
      this.saveBooks()
      this.$router.push('/')
    },
    deleteBook(id) {
      let index = this.books.findIndex(book => book.id === id)
      this.books.splice(index, 1)
      this.saveBooks()
    },
    saveBooks() {
      const parsed = JSON.stringify(this.books)
      localStorage.setItem(STORAGE_KEY, parsed)
    },
    goToEditPage(id) {
      this.$router.push(`/edit/${id}`)
    }
  },
    mounted() {
    if (localStorage.getItem(STORAGE_KEY)) {
      try {
        this.books = JSON.parse(localStorage.getItem(STORAGE_KEY))
        let ids = this.books.map(book => book.id)
        this.nextId = Math.max(...ids) + 1
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  },
};
</script>
