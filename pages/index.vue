<template>
  <v-container>
    <v-row>
      <div>
        <v-text-field
          label="日時を入力"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          label="タスクを入力"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
        <v-btn outlined>SAVE</v-btn>
      </div>
    </v-row>
    <v-row>
      <v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

</script>
