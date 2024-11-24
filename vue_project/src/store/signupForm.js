import { createStore } from 'vuex'

export default createStore({
  getters: {
    
    myInputS: state => {return document.getElementById("password");},
    minmax: state => {document.getElementById("validation_minmax");}
    

  }
})
