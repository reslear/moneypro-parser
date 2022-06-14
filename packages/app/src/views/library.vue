<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Library data</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-list-header class="ion-no-padding">Accounts</ion-list-header>
        <ion-reorder-group
          id="reorder"
          @ionItemReorder="doReorder($event)"
          disabled="false"
        >
          <ion-item v-for="item in items">
            <ion-label> Item {{ item }} </ion-label>
            <ion-reorder slot="end"></ion-reorder>
          </ion-item>
        </ion-reorder-group>
      </ion-list>

      <ion-list-header class="ion-no-padding">Categories</ion-list-header>
      <div>
        <tree :config="config" :nodes="nodes" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  IonContent,
  IonButton,
  IonButtons,
  IonBackButton,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonModal,
  IonList,
  IonListHeader,
  IonReorderGroup,
  IonItem,
  IonLabel,
  IonReorder,
  ItemReorderCustomEvent,
} from '@ionic/vue'

const nodes = ref({
  id1: {
    text: 'text1',
    children: ['id11', 'id12'],
  },
  id11: {
    text: 'text11',
    children: ['id112'],
  },
  id12: {
    text: 'text12',
    children: ['id111'],
  },
  id111: {
    text: 'text111',
  },
  id112: {
    text: 'text111',
  },
})

const config = ref({
  roots: ['id1'],
  editable: true,
  dragAndDrop: true,
})

const items = ref([1, 2, 3, 4, 5])

const doReorder = (event: CustomEvent) => {
  // Before complete is called with the items they will remain in the
  // order before the drag
  console.log('Before complete', items.value)

  // Finish the reorder and position the item in the DOM based on
  // where the gesture ended. Update the items variable to the
  // new order of items
  items.value = event.detail.complete(items.value)

  // After complete is called the items will be in the new order
  console.log('After complete', items.value)
}
</script>

<style>
.level-enter-active,
.level-leave-active {
  transition: opacity 0.5s ease;
}

.level-enter-from,
.level-leave-to {
  opacity: 0;
}
</style>
