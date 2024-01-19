<script setup lang="ts">
import { IMainTable } from './IMainTable';
import TableSection from './TableSection/TableSection.vue';

defineProps<IMainTable>();
</script>
<template>
  <div class="va-table-responsive">
    <table id="MainTable" class="va-table va-table--striped">
      <thead>
        <tr>
          <th>Jugadores</th>
          <td v-for="player in players" :key="player.id">
            {{ player.name }}
          </td>
        </tr>
      </thead>
      <tbody>
        <TableSection
          title="¿Quién?"
          :column-number="players.length"
          :rows="who"
        />
        <TableSection
          title="¿Qué Arma?"
          :column-number="players.length"
          :rows="weapon"
        />
        <TableSection
          title="Dónde?"
          :column-number="players.length"
          :rows="where"
        />
      </tbody>
    </table>
  </div>
</template>
<style lang="scss">
.va-table {
  width: 100%;
  border: 1px solid;
}
</style>
