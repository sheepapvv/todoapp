<template>
  <v-container>
    <v-row>
      <v-col>
        <v-subheader>DUE DATE :</v-subheader>
      </v-col>
<<<<<<< HEAD
      <v-col
      
    >
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
=======
      <v-col>
        <v-text-field
          label="日時を入力"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
      </v-col>
>>>>>>> main
    </v-row>
    <v-row>
      <v-col>
        <v-subheader>TODO :</v-subheader>
      </v-col>
      <v-col>
        <v-text-field
<<<<<<< HEAD
          v-model="newTask"
          label="ここにタスクを"
          solo
          @keydown.enter="create"
        > <template v-slot:append-outer>
            <v-btn color="primary"
                   @click="create"
            >SAVE</v-btn>
=======
          label="タスクを入力"
          :rules="rules"
          hide-details="auto"
        > <template v-slot:append-outer>
            <v-btn color="primary">SAVE</v-btn>
>>>>>>> main
          </template>
        </v-text-field>
      </v-col>
    </v-row>
<<<<<<< HEAD

    <v-divider/>
   
    <v-container>
      <v-row>
        <v-col>
      <v-checkbox
        v-model="inProgress"
        :label="`IN PROGRESS`"
      ></v-checkbox>
        </v-col>
        <v-col>
      <v-checkbox
        v-model="finished"
        :label="`FINISHED`"
      ></v-checkbox>
        </v-col>
      </v-row>
    </v-container>

    <v-divider/>

    <v-card v-if="tasks.length > 0">
      <v-slide-y-transition
        class="py-0"
        group
        tag="v-list"
      >
        <template v-for="(task, i) in tasks">
          <v-divider
            v-if="i !== 0"
            :key="`${i}-divider`"
          ></v-divider>

          <v-list-item :key="`${i}-${task.text}`">
            <v-list-item-action>
              <v-checkbox
                v-model="task.done"
                :color="task.done && 'grey' || 'primary'"
              >
                <template v-slot:label>
                  <v-row>
                    <v-col>
                    <div
                    :class="task.done && 'grey--text' || 'primary--text'"
                    class="ml-4"
                    v-text="task.date"
                  ></div></v-col>
                    <v-col>
                  <div
                    :class="task.done && 'grey--text' || 'primary--text'"
                    class="ml-4"
                    v-text="task.text"
                  ></div></v-col>
                  <v-col>
                    <v-btn color="primary"
                   @click="finished"
            >FINISH</v-btn></v-col>
            <v-col>
            <v-btn color="primary"
                   @click="deleteTodo"
            >DELETE</v-btn></v-col>
                  </v-row>
                </template>
              </v-checkbox>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-slide-y-transition>
=======
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
>>>>>>> main
    </v-card>
  </v-container>
  
</template>

<script>
<<<<<<< HEAD
export default {
    data: () => ({
      tasks: [
        {
          date: new Date().toISOString().substr(0, 10),
          menu2: false,
          done: false,
          text: 'TODODODO',
        },
      ],
      newTask: null,
    }),

    computed: {
      completedTasks () {
        return this.tasks.filter(task => task.done).length
      },
      progress () {
        return this.completedTasks / this.tasks.length * 100
      },
      remainingTasks () {
        return this.tasks.length - this.completedTasks
      },
    },

    methods: {
      create () {
        this.tasks.push({
          date: new Date().toISOString().substr(0, 10),
          menu2: false,
          done: false,
          text: this.newTask,
        })

        this.newTask = null
        this.date = null
      },
    },
  }
=======

>>>>>>> main
</script>
