<template>
  <v-container>
    <v-row>
      <v-col>
        <v-subheader>DUE DATE :</v-subheader>
      </v-col>
      <v-col>
        <v-text-field
          v-model="newDate"
          label="ここに日付を"
          solo
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
   
    <v-divider></v-divider>

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
                  <div
                    :class="task.done && 'grey--text' || 'primary--text'"
                    class="ml-4"
                    v-text="task.text"
                  ></div>
                </template>
              </v-checkbox>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-slide-y-transition>

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
          done: false,
          text: this.newTask,
        })

        this.newTask = null
      },
    },
  }
</script>
