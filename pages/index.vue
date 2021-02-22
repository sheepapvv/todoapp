<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1>ToDoリスト</h1>
      </div>
        <div class="addArea">
          <p><input type="text" name="addName" id="addName" placeholder="日時を入れる"><br>
          <input type="text" name="addName" id="addName" placeholder="タスクを入力">
          <button id="addButton">SAVE</button></p>
        </div>
      <v-card>
        <v-card-title class="headline">
          <div class="inProgress">InProgress</div>
          <div class="finished">finished</div>
        </v-card-title>
        <v-card-text>
            <div class="date">2020-04-01 12:00</div>
            <div class="status">FINISHED</div>
            <button class="button button--finish">FINISH</button>
            <button class="button button--delete">DELETE</button>
        </v-card-text>
        <v-card-actions>
          
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

</script>
