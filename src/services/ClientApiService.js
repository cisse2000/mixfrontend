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
            baseURL: `https://mixproject.herokuapp.com`,
            
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