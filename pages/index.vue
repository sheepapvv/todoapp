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

    <!-- <v-container>
      <label v-for="label in options" :key="label.id">
        <input type="radio" v-model="current" v-bind:value="label.value" />{{
          label.label
        }}
      </label>
    </v-container> -->
    <v-container>
      <v-checkbox
        v-model= "state"
        label= "IN PROGRESS"
        value= "inProgress"
      ></v-checkbox>
      <v-checkbox
        v-model= "state"
        label= "FINISHED"
        value= "finish"
      ></v-checkbox>
    </v-container>

    <v-divider />

    <v-card>
      <v-list-item v-for="task,index in tasks" :key="index">
        <v-list-subtitle>{{ task.date }}</v-list-subtitle>

        <v-list-subtitle>{{ labels[task.state] }}</v-list-subtitle>

        <v-list-title>{{ task.text }}</v-list-title>
        <v-list-item-icon>
          <v-btn color="primary" @click="finishTodo(task)">FINISH</v-btn>

          <v-btn color="primary" @click="deleteTodo(index)">DELETE</v-btn>
        </v-list-item-icon>
      </v-list-item>
    </v-card>
    <v-pagination
          v-model="page"
          :length="length"
          @input="pageChange"
        ></v-pagination>
    
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
        state: 1,
      },
    ],
    state: [
      {value: 0, label: "IN PROGRESS"},
      {value: 1, label: "FINISHED"},
    ],
    //   page: 1,
    //   length: 0,
    //   lists: [],
    //   displayLists: [],
    //   pageSize: 10,
    // current: 0,
    newTask: null,
  }),
  computed: {
    labels() {
      return this.state.reduce(function (a, b) {
        return Object.assign(a, { [b.value]: b.label });
      }, {});
    },
    // computedTodos: function() {
      
      // return this.tasks.filter(function(el) {
    //     return this.current < 1 ? true : this.current === el.state
    //   }, this)
    // }
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
    finishTodo: function (task) {
      task.state = task.state ? 0 : 1;
    },
  },
};
</script>
