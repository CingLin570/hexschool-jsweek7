<template>
  <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item" :class="{disabled:pages.current_page === 1}">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
      @click.prevent="emitPages(pages.current_page - 1)"><i class="fas fa-angle-left"></i></a>
    </li>
    <li class="page-item" v-for="item in pages.total_pages" :key="item"
    :class="{ active:pages.current_page === item }">
      <a class="page-link border" href="#" @click.prevent="emitPages(item)">{{ item }}</a></li>
    <li class="page-item" :class="{disabled:pages.current_page === pages.total_pages}">
      <a class="page-link" href="#"
      @click.prevent="emitPages(pages.current_page + 1)"><i class="fas fa-angle-right"></i></a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pages: {
      type: Object,
      default () {
        return {
        }
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    emitPages (item) {
      this.$emit('emitPages', item)
    }
  }
}
</script>

<style>
  .page-item.active .page-link{
    background: #5CA8CA;
  }
  .page-link{
    border-radius: 50%;
  }
  .page-item{
    margin-right: 10px;
  }
  .page-item:last-child{
    margin-right: 0px;
  }
</style>
