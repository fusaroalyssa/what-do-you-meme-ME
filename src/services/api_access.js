const api_root = "http://localhost:80/game";
let playerId = 0;

export function GetState(){
    return myFetch(api_root + "/");
}
export function GetMyCaptions(){
    return myFetch(api_root + `/players`, {name: "Alyssa"})
     .then(x=> myFetch(api_root + `/captions/${playerId}`));
}
export function FlipPicture(){
    return myFetch(api_root + "/picture", {})
}
export function GetPlayers(){
    return myFetch(api_root + `/players`, {name: "Alyssa"})
    //myFetch(api_root + `/players`)
    /*return myFetch(api_root + `/players`, {id: 0})
    .then(x=> myFetch(api_root + `/players/${playerId}`));*/
    //return myFetch(api_root + `/players`, {id: 0})
    /*return myFetch(api_root + `/players`, {name: "Alyssa"})
    .then(x=> myFetch(api_root + `/players/${playerId}`));*/
}





  function myFetch(url = ``, data = null) {
      let options = {
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
      };
      if(data){
          options = { 
            ...options,
            method:  "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          };
      }
      return fetch(url, options)
      .then(response =>{
        return response.json()
      }); // parses response to JSON
  }