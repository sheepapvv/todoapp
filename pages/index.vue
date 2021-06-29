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
    
    <v-card>
      <v-card-title>
        タスク一覧
        <v-spacer></v-spacer>
        <v-item-group type="checkbox" v-model="search">
          <v-checkbox
            v-model="search"
            label="IN PROGRESS"
            value="IN PROGRESS"
          ></v-checkbox>
          <v-checkbox
            v-model="search"
            label="FINISHED"
            value="FINISHED"
          ></v-checkbox>
        </v-item-group>
      </v-card-title>
      <v-data-table :headers="headers" :items="desserts" :search="search"
        ><template template v-slot:[`item.actions`]="{ item }"
          >>
          <v-btn color="primary" @click="finishTodo(item)">FINISH</v-btn>
          <v-btn color="primary" @click="deleteTodo(item)">DELETE</v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    search: "",
    headers: [
      {
        text: "タスク",
        align: "start",
        sortable: false,
        value: "task",
      },
      { text: "いつまで？", value: "date" },
      { text: "状態", value: "state" },
      { text: "ボタン", value: "actions", sortable: false },
    ],
    desserts: [
      {
        task: "TOTOTOTODODODODODODODO",
        date: new Date().toISOString().substr(0, 10),
        state: "IN PROGRESS",
      },
      {
        task: "これはふぃにっしゅ",
        date: new Date().toISOString().substr(0, 10),
        state: "FINISHED",
      },
    ],
    taskState: [
      { value: 0, label: "IN PROGRESS" },
      { value: 1, label: "FINISHED" },
    ],
    newTask: null,
  }),
  computed: {
    checkboxes() {
      return [
        { text: "IN PROGRESS", value: "inprogress" },
        { text: "FINISHED", value: "finished" },
      ];
    },
    labels() {
      return this.taskState.reduce(function (a, b) {
        return Object.assign(a, { [b.value]: b.label });
      }, {});
    },
  },

  methods: {
    create() {
      this.desserts.push({
        date: this.date,
        menu2: false,
        task: this.newTask,
        state: 0,
      });
      this.newTask = null;
      this.date = null;
    },
    deleteTodo: function (item) {
      const index = this.desserts.indexOf(item);
      this.desserts.splice(index, 1);
    },
    finishTodo: function (desserts) {
      desserts.state = desserts.state ? 0 : 1;
    },
  },
};
</script>
