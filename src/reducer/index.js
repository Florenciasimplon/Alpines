const initialState = {

modelisation : {},
picturesCarousel : {
    1:'images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg',
    2:'images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (2).jpg',
    3:'images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (3).jpg',
    4:'images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (4).jpg',
},
totalPrice: 0


};

function rootReducer(state = initialState, action) {
   let newState;
   switch (action.type) {
  
       case "CHOICE_VERSION":
           newState = {
               ...state,
                 modelisation:action.payload.choix,
                picturesCarousel : action.payload.images,
               

           }
           console.log('choix version', newState);
           return newState;

           case "CHOICE_COLORS":
            newState = {
                ...state,
                 modelisation:{
                    ...state.modelisation, 
                    couleurs : action.payload.color
                },
                 picturesCarousel : action.payload.images
            }
           
            console.log('choix Couleur', newState);

            return newState

           case "CHOICE_JANTES":
            newState = {
                ...state,
                 modelisation:{
                    ...state.modelisation, 
                    jantes : action.payload.jantes
                },
                picturesCarousel : action.payload.images 
            }
             console.log('choix Jante', newState);
            return newState

            
           case "CHOICE_SCELLERIE":
            newState = {
                ...state,
                modelisation: {
                    ...state.modelisation,
                    scellerie : action.payload.scellerie
                }
             }
             console.log('choix Scellerie', newState, action.payload.scellerie);
             return newState

            
            case "CHOICE_EQUIPEMENTS":
                newState = {
                    ...state,
                    modelisation: {
                        ...state.modelisation,
                        equipements : {
                            ...state.modelisation.equipements,
                            [action.payload.group]: {
                                ...state.modelisation.equipements[action.payload.group],
                                [action.payload.equipement.id]: action.payload.equipement
                            }
                            
                        }
                    }
                 }
                 console.log('choix Equipements', newState,action.payload.id);
                 return newState


            case "DELETE_EQUIPEMENTS":
                newState = {
                    ...state,
                    modelisation: {
                        ...state.modelisation,
                        equipements: {
                            ...state.modelisation.equipements,
                            [action.payload.group] : delete state.modelisation.equipements[action.payload.group][action.payload.equipement.id],
                            [action.payload.group] : {
                                ...state.modelisation.equipements[action.payload.group]
                            }
                        }
                    }
                 }
                 console.log('delete Equipement', newState);
                 return newState

                 case "CHOICE_ACCESSOIRES":
                    newState = {
                        ...state,
                        modelisation: {
                            ...state.modelisation,
                                accessoires : {
                                ...state.modelisation.accessoires,
                                [action.payload.group]: {
                                    ...state.modelisation.accessoires[action.payload.group],
                                    [action.payload.accessoire.id]: action.payload.accessoire
                                }
                                
                            }
                        }
                     }
                     console.log('choix accessoires', newState);
                     return newState
    
    
                case "DELETE_ACCESSOIRES":
                    newState = {
                        ...state,
                        modelisation: {
                            ...state.modelisation,
                            accessoires: {
                                ...state.modelisation.accessoires,
                                [action.payload.group] : delete state.modelisation.accessoires[action.payload.group][action.payload.accessoire.id],
                                [action.payload.group] : {
                                    ...state.modelisation.accessoires[action.payload.group]
                                }
                            }
                        }
                     }
                     console.log('delete accessoire',newState);
                     return newState
        

                     
                        case "CHOICE_COUNT":
                        newState = {
                            ...state,
                            totalPrice: parseInt(state.modelisation.price )
                                + parseInt(state.modelisation.couleurs.price )
                                + parseInt(state.modelisation.jantes.price )
                                + parseInt(state.modelisation.scellerie.price)
                                +  parseInt(Object.keys(state.modelisation.equipements).map(
                                    (key)=>{
                                        if (Object.keys(state.modelisation.equipements[key]).length > 0) {
                                            return Object.keys(state.modelisation.equipements[key]).map(
                                                (key2)=>{
                                                    return state.modelisation.equipements[key][key2].price
                                                }
                                            ).reduce((total, current)=>{
                                            
                                                return parseInt(total) +  parseInt(current)
                                            })
                                        } else {
                                            return 0
                                        }
                                    }
                                ).reduce((total, current)=>{
                                  
                                    return parseInt(total) + parseInt(current)
                                }))
                                +  parseInt(Object.keys(state.modelisation.accessoires).map(
                                    (key)=>{
                                        if (Object.keys(state.modelisation.accessoires[key]).length > 0) {
                                            return Object.keys(state.modelisation.accessoires[key]).map(
                                                (key2)=>{
                                                    return state.modelisation.accessoires[key][key2].price
                                                }
                                            ).reduce((total, current)=>{
                                                
                                                return parseInt(total) +  parseInt(current)
                                            })
                                        } else {
                                            return 0
                                        }
                                    }
                                ).reduce((total, current)=>{
                                    return parseInt(total) + parseInt(current)
                                }))
                                
                        }
                        console.log(newState, 'count')
                        return newState    
    
       default:
           return state;
   }

};

export default rootReducer;
