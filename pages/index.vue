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

    <v-divider></v-divider>

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

    <v-divider></v-divider>
    <v-card>
      <v-list-item v-for="(task, index) in tasks" :key="index">
        <v-list-subtitle>{{ task.date }}</v-list-subtitle>

        <v-list-subtitle>{{ task.state }}</v-list-subtitle>

        <v-list-title>{{ task.text }}</v-list-title>
        <v-list-item-icon>
          <v-btn color="primary" @click="finishedTodo(index)">FINISH</v-btn>

          <v-btn color="primary" @click="deleteTodo(index)">DELETE</v-btn>
        </v-list-item-icon>
      </v-list-item>
    </v-card>
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
        state: "IN PROGRESS",
      },
    ],
    options: [
      { value: -1, label: "全て" },
      { value: 0, label: "IN PROGRESS" },
      { value: 1, label: "FINISHED" },
    ],
    current: -1,
    newTask: null,
  }),
  computed: {
    labels() {
      return this.options.reduce(function (a, b) {
        return Object.assign(a, { [b.value]: b.label });
      }, {});
      // キーから見つけやすいように、次のように加工したデータを作成
      // {0: '作業中', 1: '完了', -1: 'すべて'}
    },
    computedTodos: function () {
      // データ current が -1 ならすべて
      // それ以外なら current と state が一致するものだけに絞り込む
      return this.todos.filter(function (el) {
        return this.current < 0 ? true : this.current === el.state;
      }, this);
    },
  },

  methods: {
    create() {
      this.tasks.push({
        date: this.date,
        menu2: false,
        text: this.newTask,
        state: 0,
      });

      this.newTask = null;
      this.date = null;
    },
    deleteTodo: function (index) {
      this.tasks.splice(index, 1);
    },
    finishedTodo: function (index) {
      task.state = tasks.state ? 0 : 1;
    },
  },
};
</script>
