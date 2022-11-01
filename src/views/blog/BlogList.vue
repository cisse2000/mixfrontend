<template>
    <div id="blog-list">
        <v-container grid-list-xs>
            <h1>La list des blogs</h1>

            <v-row>
                <v-col cols="8" md="4"> 
                    <p>Les données</p>

                    <div v-for="item in data" :key="item.id">
                        <h3>{{item.title}}</h3>
                        <p>{{item.content}}</p>
                    </div>
                </v-col>
                <v-col >
                    <p>Image</p>
                 </v-col>
                
            </v-row>
        </v-container>
    </div>
</template>

<script>
import ApiService from '@/services/ClientApiService';

    export default {
        name: 'BlogList',
        created(){
            console.log("Sa marche")
            this.blogs()
        },
        data:() => ({
            data: '',
        }),
        methods:{

            blogs(){
                let api = new ApiService;

                api.find('/blogs/')
                .then( response => {
                    console.log(response.data)
                    this.data = response.data
                })
                .catch(error => {
                    console.log(error.data, "Il ya des erreures")
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>