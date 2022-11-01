import axios from 'axios';

const network = {
    ip: '127.0.0.1',
    port: 8000
}

export default class ApiService {

     /**
     * Initialisation 
    */
    axiosInstance(){
        return axios.create({
            baseURL: `http://${network.ip}:${network.port}/api`,
            headers:{
                Authorization: `JWT ${localStorage.getItem('accessToken')}`
            }
        })
    }

    /**
     * Création d'une requête post
     * @param {String} url
     * @param {Object} data
     * @param {Object} onUploadProgress
    */
    addForm(url, data, onUploadProgress){
        return this.axiosInstance().post(url, data, {
            headers:{
                "Content-Type": "multipart/form-data",
                "X-CSRFToken"  : "{{ csrf_token }}"
            },
            onUploadProgress
        })  
    }

    /**
     * Création d'une requête post
     * @param {String} url
     * @param {Object} data
     * @param {Integer} id
     * @param {Object} onUploadProgress
    */
    updateForm(url, data, id, onUploadProgress){
        return this.axiosInstance().put(url, data, {
            headers:{
                "Content-Type": "multipart/form-data",
                "X-CSRFToken"  : "{{ csrf_token }}"
            },
            params: {id},
            onUploadProgress
        })  
    }

    /**
     * Création d'une requête post
     * @param {String} url
     * @param {Object} data
    */
     add(url, data){
        return this.axiosInstance().post(url, data)
    }
    /**
     * Exécution d'une requête get sur toutes les données disponibles.
     * @param {String} url
     */
    find(url){
        return this.axiosInstance().get(url)
    }

    /**
     * Exécute une réquête de selection par valeur d'un parametre
     * @param {String} url
     * @param {Integer} id
     */
    findOne(url, id){
        return this.axiosInstance().get(url, {
            params: {id}
        })
    }

    /**
     * Exécute une réquête de selection par valeur d'un parametre
     * @param {String} url
     * @param {Integer} id
     */
    findBy(url){
        return this.axiosInstance().get(url)
    }

    /**
     * Exécute une requête de mise à jour
     * @param {String} url
     * @param {Object} data
     * @param {Integer} id
     */
    update(url, data, id){
        return this.axiosInstance().put(url, data, {
            params: {id}
        })
    }

    updatePatch(url, data, id){
        return this.axiosInstance().patch(url, data, {
            params: {id}
        })
    }

    /**
     * Suppression d'une instance de donnée
     * @param {String} url
     * @param {Integer} id
     */
    delete(url, id){
        return this.axiosInstance().delete(url, {
            params:{id}
        })
    }
}