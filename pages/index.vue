<template>
  <v-container>
    <v-row>
      <v-col>
        <v-subheader>DUE DATE :</v-subheader>
      </v-col>
<<<<<<< HEAD
=======

>>>>>>> main
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
<<<<<<< HEAD
      <v-col>
        <v-text-field
          label="日時を入力"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
      </v-col>
=======
>>>>>>> main
    </v-row>
    <v-row>
      <v-col>
        <v-subheader>TODO :</v-subheader>
      </v-col>
      <v-col>
        <v-text-field

          v-model="newTask"
          label="ここにタスクを"
          solo
          @keydown.enter="create"
        > <template v-slot:append-outer>
            <v-btn color="primary"
                   @click="create"
            >SAVE</v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
<<<<<<< HEAD
    <v-container fluid>
    <v-row>
      <v-col>
=======
    


    <v-divider/>
  
    <v-container>
      <v-row>
        <v-col>
    
>>>>>>> main
      <v-checkbox
        v-model="checkbox1"
        :label="`Checkbox 1`"
      ></v-checkbox>
      <v-checkbox
        v-model="checkbox2"
        :label="`Checkbox 2`"
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
<<<<<<< HEAD
                  <v-row>
                    <v-col>
                    <div
                    :class="task.done && 'grey--text' || 'primary--text'"
                    class="ml-4"
                    v-text="task.date"
                  ></div></v-col>
                  
                  <v-spacer/>
                  
                  <v-col>
                    <v-chip
                      class="ml-4"
                      color="primary"
                      label
                      >IN PROGRESS
                    </v-chip>
                  </v-col>
                    <v-col>
=======
>>>>>>> main
                  <div
                    :class="task.done && 'grey--text' || 'primary--text'"
                    class="ml-4"
                    v-text="task.text"
<<<<<<< HEAD
                  ></div></v-col>
                  <v-spacer/>
                  <v-col>
                    <v-btn color="primary"
                    @click="finishedTodo"
                    >FINISH</v-btn>
                  </v-col>
                  <v-col>
                    <v-btn color="primary"
                    @click="deleteTodo"
                    >DELETE</v-btn>
                  </v-col>
                  </v-row>
=======
                  ></div>
>>>>>>> main
                </template>
              </v-checkbox>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-slide-y-transition>
<<<<<<< HEAD
=======

>>>>>>> main
    </v-card>
  </v-container>
  
</template>

<script>
<<<<<<< HEAD
=======

>>>>>>> main
export default {
    data: () => ({
      tasks: [
        {
          done: false,
          text: 'TODODODO',
        },
      ],
      newTask: null,
    }),

    

    methods: {
      create () {
        this.tasks.push({
          done: false,
          text: this.newTask,
        })

        this.newTask = null
      },
    },
  }
<<<<<<< HEAD
=======

>>>>>>> main
</script>
