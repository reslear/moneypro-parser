<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" href="/home">
            <ion-icon :icon="triangle" />
            <ion-label>Home</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="parse" href="/parse">
            <ion-icon :icon="ellipse" />
            <ion-label>Parse</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="library" href="/library">
            <ion-icon :icon="square" />
            <ion-label>Library</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonContent,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from '@ionic/vue'
import { ellipse, square, triangle } from 'ionicons/icons'
</script>
