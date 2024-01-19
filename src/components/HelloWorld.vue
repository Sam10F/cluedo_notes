<script setup lang="ts">
import MainTable from './Table/MainTable.vue';
import ActionsFooter from './ActionsFooter/ActionsFooter.vue';

import defaultWho from '∼/data/defaultWho.json';
import defaultWeapon from '∼/data/defaultWeapons.json';
import defaultWhere from '∼/data/defaultWhere.json';
</script>

<template>
  <section class="GameView">
    <MainTable
      :players="[
        { id: 1, name: '' },
        { id: 2, name: 'Samuel' },
        { id: 3, name: 'Marta' },
        { id: 4, name: 'Diego' },
        { id: 5, name: 'Daniel' },
        { id: 6, name: 'Javi' },
      ]"
      :who="defaultWho"
      :weapon="defaultWeapon"
      :where="defaultWhere"
    />
    <ActionsFooter />
  </section>
</template>

<style lang="scss">
.GameView {
  .va-table-responsive {
    overflow: auto;
  }
}
</style>
