<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { VaButton, VaForm, VaInput, useForm } from 'vuestic-ui';
import { IPlayer } from '∼/common/interfaces/IPlayer';
import { router } from '∼/router';

const { isValid } = useForm('formRef');

const players = ref<IPlayer[]>([]);

const form = reactive({
  playerName: '',
});

// Computed
const addPlayerButtonDisabled = computed((): boolean => {
  return (
    !isValid.value || players.value.length >= 5 || form.playerName.length === 0
  );
});

const addPlayerInputDisabled = computed((): boolean => {
  return players.value.length >= 5;
});

const startGameButtonDisabled = computed((): boolean => {
  return players.value.length < 1;
});

// Methods
const addPlayer = (newPlayerName: string) => {
  players.value.push({ id: players.value.length + 1, name: newPlayerName });
  form.playerName = '';
};

const startGame = () => {
  localStorage['players'] = JSON.stringify(players.value);
  router.push({ path: '/game' });
};

const removePlayer = (playerToRemove: string) => {
  players.value = players.value.filter(
    player => player.name !== playerToRemove,
  );
};
</script>
<template>
  <section class="SetGameSection">
    <img
      class="SetGameSection__Logo"
      src="∼/assets/cluedo_header_logo.png"
      alt="Cluedo logo"
    />

    <section class="SetGameSection__Players">
      <p class="SetGameSection__Players__Title">Jugadores:</p>
      <ol>
        <li>Tu</li>
        <li v-for="(player, index) in players" :key="index">
          {{ player.name }}
          <VaButton
            round
            icon="close"
            size="small"
            color="#00000000"
            @click="removePlayer(player.name)"
          ></VaButton>
        </li>
      </ol>

      <VaForm ref="formRef" class="flex flex-col items-baseline gap-6">
        <VaInput
          clearable-icon="va-clear"
          v-model="form.playerName"
          :disabled="addPlayerInputDisabled"
          :max-length="8"
          :rules="[
            value => value.length < 8 || 'No más de 8 caracteres',
            value =>
              !value ||
              !players.some(p => p.name === value) ||
              'Jugador ya existente',
          ]"
          @keyup.enter="addPlayer(form.playerName)"
        />
        <VaButton
          :disabled="addPlayerButtonDisabled"
          color="secondary"
          @click="addPlayer(form.playerName)"
        >
          Añadir jugador
        </VaButton>
      </VaForm>
    </section>

    <section class="SetGameSection__Footer">
      <VaButton :disabled="startGameButtonDisabled" @click="startGame()">
        ¡Empieza el juego!
      </VaButton>
    </section>
  </section>
</template>
<style lang="scss">
.SetGameSection {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 90px 0px;

  &__Logo {
    padding: 0 80px;
    width: 100%;
  }

  &__Players {
    &__Title {
      font-weight: bold;
      font-size: 24px;
      margin-bottom: 16px;
    }

    ol {
      width: 160px;
      margin: 0 auto;
      font-size: 20px;
      margin-bottom: 18px;

      li {
        position: relative;

        &:not(:first-child) {
          margin-top: 18px;
        }

        button {
          position: absolute;
          right: 0;
        }
      }
    }

    .va-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 18px;
      padding: 0 80px;

      button {
        width: fit-content;
      }
    }

    .va-input-wrapper__field {
      border-color: black;
    }
  }
}
</style>
