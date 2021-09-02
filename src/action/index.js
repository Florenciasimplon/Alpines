export function choiceVersion(payload) {
    return { type: "CHOICE_VERSION", payload }
  };


  export function choiceColors(payload) {
    return { type: "CHOICE_COLORS", payload }
  };


  export function choiceJantes(payload) {
    console.log(payload);
    return { type: "CHOICE_JANTES", payload }
  };

  export function choiceScellerie(payload) {
    return { type: "CHOICE_SCELLERIE", payload }
  };


  export function choiceEquipements(payload) {
    return { type: "CHOICE_EQUIPEMENTS", payload }
  };
  export function deleteEquipements(payload) {
    return { type: "DELETE_EQUIPEMENTS", payload }
  };


  export function choiceAccessoires(payload) {
    return { type: "CHOICE_ACCESSOIRES", payload }
  };

  export function deleteAccessoires(payload) {
    return { type: "DELETE_ACCESSOIRES", payload }
  };

  
  export function choiceRecapitulatif(payload) {
    return { type: "CHOICE_RECAPITULATIF", payload }
  };

   export function choiceCount(){
  return {type: "CHOICE_COUNT"}
};