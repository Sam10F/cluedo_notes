<script setup lang="ts">
import MainTable from '∼/components/Table/MainTable.vue';
import ActionsFooter from '∼/components/ActionsFooter/ActionsFooter.vue';

import defaultWho from '∼/data/defaultWho.json';
import defaultWeapon from '∼/data/defaultWeapons.json';
import defaultWhere from '∼/data/defaultWhere.json';
import { onMounted, ref } from 'vue';
import { IPlayer } from '∼/common/interfaces/IPlayer';

const players = ref<IPlayer[]>([{ id: 1, name: '' }]);

onMounted(() => {
  players.value.push(...JSON.parse(localStorage['players']));
});
</script>

<template>
  <section class="GameView">
    <MainTable
      :players="players"
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
