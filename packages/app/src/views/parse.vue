<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Ionic Vite - Parse</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="scroll-content">
      <h1>Parse</h1>

      <div><ion-input type="file" accept=".csv" @change="onChange" /></div>

      <template v-for="(name, i) in headers" :key="i">
        <ion-list inset="true">
          <ion-accordion-group expand="inset">
            <ion-accordion :value="i" toggleIconSlot="start">
              <ion-item slot="header" class="ion-no-padding">
                {{ name }}

                <ion-button
                  v-if="name === MPHeader.Category || name === MPHeader.Account"
                  slot="end"
                  size="small"
                  @click.prevent="saveToLibrary(name)"
                >
                  <IonIcon :icon="save" />
                </ion-button>
              </ion-item>

              <ion-list slot="content" v-if="groups[name]">
                <ion-item class="ion-no-padding" v-for="value in groups[name]">
                  <ion-label>{{ value }}</ion-label>
                </ion-item>
              </ion-list>
            </ion-accordion>
          </ion-accordion-group></ion-list
        >
      </template>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonContent,
  IonButton,
  IonButtons,
  IonBackButton,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonList,
  IonLabel,
  IonInput,
  IonIcon,
  IonListHeader,
} from '@ionic/vue'
import { computed, shallowRef } from 'vue'
import { save } from 'ionicons/icons'
import {
  MPData,
  MPHeader,
  MPHeaders,
  MPDataItem,
  MPDataGroupValues,
} from '@/types/moneypro'
import { parseCsv } from '@/utils/csv'
import { usePreviewStore } from '@/stores/usePreviewStore'
import { storeToRefs } from 'pinia'

const previewStore = usePreviewStore()
const { groups, headers } = storeToRefs(previewStore)

function toGroups(data: MPData[], headers: MPHeaders[]) {
  const returnResult: MPDataGroupValues = {}

  headers.forEach((header) => {
    const result = new Set<MPDataItem>()

    data.forEach((item) => {
      result.add(item[header])
    })

    const current = returnResult[header]

    if (current) {
      current.push(...current)
    } else {
      returnResult[header] = [...result]
    }
  })

  return returnResult
}

const onChange = async (e: Event) => {
  const files = (e.target as HTMLInputElement).files

  if (files?.length) {
    const file = files[0]

    const { data, meta } = await parseCsv<MPData>(file)

    const fields = ((meta?.fields as MPHeaders[]) || []).filter(Boolean)

    previewStore.$patch({
      groups: toGroups(data, fields),
      headers: fields,
    })
  }
}

function saveToLibrary(header: MPHeaders) {
  console.log('saveToLibrary', header, groups.value[header])
}
</script>

<style>
ion-content {
  --background: #f2f2f7;
}
</style>
