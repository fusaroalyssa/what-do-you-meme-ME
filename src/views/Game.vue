<template>
<div>
    <div class="alert alert-success">
        Yay we have a game!
    </div>

    <div class="row">
        <div class="col-md-4">
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">Players</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">My Captions</h5>
                    <ul class="list-group list-group-flush">
                        <li v-for="c in myCaptions" class="list-group-item">{{c}}</li>
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
                <div class="card-body">
                    <h5 class="card-title">Played Captions</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">

</style>

<script>
import { GetState, FlipPicture, GetMyCaptions } from '@/services/api_access';

export default {
    data: function(){
        return {
            state: {
                picture: "",
                players: [],
                playedCaptions: [],
            },
            myCaptions: [],
        }
    },
    created: function(){
        GetState()
        .then(x=> this.state = x);
        GetMyCaptions()
        .then(x=> this.myCaptions = x);
    },
    methods: {
        flipPicture: function(){
            FlipPicture()
            .then(x=> GetState())
            .then(x=> this.state = x)
        }
    }
}
</script>
