const axios = require ('axios')
const endpoints = {
    playlists:'http://localhost:4000/playlists/'
}

function getPlaylists(){
return axios.get(endpoints.playlists)
}

function getPlaylist(id){
    return axios.get(endpoints.playlists + id)
    }

function newPlaylist(name){
    return axios.post(endpoints.playlists, {name})
    }

function renamePlaylist(id, name){
    return axios.patch(endpoints.playlists + id, {name})
    }

function likePlaylist(id){
    return axios.post(endpoints.playlists + id + '/likes')
    }

function dislikePlaylist(id){
    return axios.deletes(endpoints.playlists + id + '/likes')
    }
    
function deletePlaylist(id){
    return axios.delete(endpoints.playlists + id)
    }


module.exports={
    getPlaylist,
    getPlaylists,
    deletePlaylist,
    dislikePlaylist,
    renamePlaylist,
    newPlaylist,
    likePlaylist
}
//getPlaylists().then(res => console.log(res.data))

// newPlaylist('nueva playlist')
//     .then(res => console.log(res))
//     .catch(error => console.log(error))

// renamePlaylist(1, 'cumbia')
//     .then(res => console.log(res))
//     .catch(error => console.log(error))


// deletePlaylist(3)
//     .then(res => console.log(res))
//     .catch(error => console.log(error))
