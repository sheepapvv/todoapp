<template>
  <v-container>
    <v-row>
      <v-col>
        <v-subheader>DUE DATE :</v-subheader>
      </v-col>
      <v-col>
        <v-text-field
          label="日時を入力"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-subheader>TODO :</v-subheader>
      </v-col>
      <v-col>
        <v-text-field
          label="タスクを入力"
          :rules="rules"
          hide-details="auto"
        > <template v-slot:append-outer>
            <v-btn color="primary">SAVE</v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-container fluid>
      <v-checkbox
        v-model="checkbox1"
        :label="`Checkbox 1`"
      ></v-checkbox>
      <v-checkbox
        v-model="checkbox2"
        :label="`Checkbox 2`"
      ></v-checkbox>
    </v-container>
    <v-card class="mx-auto" tile>
      <v-list rounded>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>TODO</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>TODODODO</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>TOTODO</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
  
</template>

<script>

</script>
