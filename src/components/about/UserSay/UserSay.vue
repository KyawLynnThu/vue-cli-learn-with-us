<template>
  <div class="row">
    <div class="col-12">
      <h2 class="text-center m-5 font-weight-bold">What our users say</h2>
    </div>
    <div class="col-md-3 col-sm-6 col-12" v-for="j in [1,2,3,4]" :key="j">
      <UserSayCard></UserSayCard>
    </div>
  </div>
</template>

<script>
import UserSayCard from './UserSayCard'
export default {
  components: { UserSayCard },
}
</script>

<style>

</style>