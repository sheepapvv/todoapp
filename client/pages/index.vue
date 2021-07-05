<template>
  <v-container>
    <v-form ref="task_form" lazy-validation @submit.prevent="addTask">
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
          <v-text-field v-model="newTask" label="ここにタスクを" :rules="[required]" solo>
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
        <v-spacer />
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
      <v-data-table :headers="headers" :items="tasks" :search="search">
        <template template v-slot:[`item.state`]="{ item }">
          {{ taskState.find(x => x.value === item.state).label }}
        </template>
        <template template v-slot:[`item.actions`]="{ item }">
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
    required: value => !!value || "必ず入力してください",
    headers: [
      { text: "タスク", value: "task",　align: "start",　sortable: false},
      { text: "いつまで？", value: "date" },
      { text: "状態", value: "state" },
      { text: "ボタン", value: "actions", sortable: false },
    ],
    tasks: [
      {
        task: "TOTOTOTODODODODODODODO",
        date: new Date().toISOString().substr(0, 10),
        state: 0,
      },
      {
        task: "これはふぃにっしゅ",
        date: new Date().toISOString().substr(0, 10),
        state: 1,
      },
    ],
    taskState: [
      { value: 0, label: "IN PROGRESS" },
      { value: 1, label: "FINISHED" },
    ],
    newTask: null,
  }),

  computed: {
    // labels() {
    //   return this.taskState.reduce(function (a, b) {
    //     return Object.assign(a, { [b.value]: b.label });
    //   }, {});
    // },
  },

  methods: {
    create() {
      if(!this.$refs.task_form.validate()){
        return
      }
      this.tasks.push({
        date: this.date,
        menu2: false,
        task: this.newTask,
        state: 0,
      });
      this.newTask = null;
      this.date = null;
    },
    deleteTodo: function (item) {
      const index = this.tasks.indexOf(item);
      this.tasks.splice(index, 1);
    },
    finishTodo: function (tasks) {
      tasks.state = tasks.state ? 0 : 1;
    },
  },
};
</script>
