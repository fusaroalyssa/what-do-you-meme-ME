<template>
<div>
    <div class="alert alert-success">
        Yay we have a game!
    </div>

    <div class="row">
        <div class="col-md-4">
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-hearder">
                        Players
                        <a @click.prevent="login" class="btn btn-sm btn-primary" :class="{disabled: playerId() !== null}">+</a>
                    </h5>
                    <ul class="list-group list-group-flush">
                        <li  v-for="p in state.players" :key="p.id"
                            class="list-group-item">
                            <img/>
                            <h5>{{p.name}}</h5>
                            <span class="badge badge-primary badge-pill">{{p.score}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-header">My Captions</h5>
                    <ul class="list-group list-group-flush">
                        <li v-for="c in myCaptions" :key="c"
                            @click.prevent="submitCaption(c)"
                            class="list-group-item">{{c}}</li>
                    </ul>
                  </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card" >
                <img class="card-img" :src="state.picture.url" :alt="state.picture.name">
                <a @click.prevent="flipPicture" class="btn btn-primary">Flip Picture</a>

            </div>
        </div>
        <div class="col-md-4">
            <div class="card" >
                <h5 class="card-header">Played Captions</h5>
                <ul class="list-group list-group-flush">
                    <li v-for="c in state.playedCaptions" :key="c.text"
                        class="list-group-item">
                        {{c.text }}
                        <div>
                            <a  v-if="isDealer"
                                @click.prevent="chooseCaption(c)"
                                class="btn btn-primary btn-sm">Choose</a>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
    li.list-group-item {
        display: flex;
        align-content: center;
        justify-content: space-between;
        img{
            width: 30px; height: 30px;
            margin-right: 5px;
        }
        h5{
            flex-grow: 1;
            
        }
    }

</style>

<script>
import * as api from '@/services/api_access';
let loopTimer = null;

export default {
    data(){
        return {
            state: {
                picture: "",
                players: [],
                playedCaptions: [],
            },
            myCaptions: [],
            //playerId: null
        }
    },
    created: function(){
        this.refresh() 
        loopTimer = setInterval(this.refresh, 1000)
    },
    methods: {
        refresh(){
            api.GetState()
            .then(x=> this.state = x)
        },
        flipPicture(){
            api.FlipPicture()
            
        }, 
        login(){
            api.Login(prompt('What is your name?'))
            .then (()=> api.GetMyCaptions().then(x=> this.myCaptions = x))
        },   
        submitCaption(c){
            api.SubmitCaption(c)
            .then(x=> {
                this.myCaptions.splice(this.myCaptions.indexOf(c),1);
                this.myCaptions.push(x[0]);
            })
        },
        chooseCaption(c){
            api.ChooseCaption(c)
            
        }, 

        playerId: ()=> api.playerId
    },
    computed: {
        isDealer(){
            return this.playerId() == this.state.dealerId;
        }
    }
}
</script>
