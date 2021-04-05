<template>
  <v-container>
    <v-form ref="form" lazy-validation @submit.prevent="addTask">
      <v-row>
        <v-col>
          <v-subheader>DUE DATE :</v-subheader>
        </v-col>
        <v-col>
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="日時を選択"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-subheader>TODO :</v-subheader>
        </v-col>
        <v-col>
          <v-text-field v-model="newTask" label="ここにタスクを" solo>
            <template v-slot:append-outer>
              <v-btn color="primary" @click="create">SAVE</v-btn>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-form>

    <v-divider />

    <v-container>
      <v-row>
        <v-col>
          <v-checkbox v-model="inProgress" :label="`IN PROGRESS`"></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox v-model="finished" :label="`FINISHED`"></v-checkbox>
        </v-col>
      </v-row>
    </v-container>

    <v-divider />
    <v-list two-line subheader>
      <v-row>
        <v-list-tile v-for="(task, index) in tasks" :key="index" avatar>
          <v-list-item-content>
            <v-list-item-title>{{ task.text }}</v-list-item-title>
            <v-list-item-subtitle>{{ task.date }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-spacer />
          <v-col>
            <v-btn color="primary" @click="finishedTodo">FINISH</v-btn>
          </v-col>
          <v-col>
            <v-btn color="primary" @click="deleteTodo(index)">DELETE</v-btn>
          </v-col>
        </v-list-tile>
      </v-row>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tasks: [
      {
        date: new Date().toISOString().substr(0, 10),
        menu2: false,
        text: "TODODODO",
      },
    ],
    newTask: null,
  }),

  methods: {
    create() {
      this.tasks.push({
        date: this.date,
        menu2: false,
        text: this.newTask,
      });

      this.newTask = null;
      this.date = null;
    },
    deleteTodo: function (index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>
