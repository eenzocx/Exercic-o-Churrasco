function calculateBarbecueItems(adultsConsumingAlcohol, adultsNotConsumingAlcohol, children) {
    const carneAdulto = 400;
    const acompanhamentosAdulto = 200;
    const cervejaAdulto = 2;
    const refrigeranteAdulto = 0.5;
    const aguaAdulto = 0.4;
  
    const carneCrianca = 200;
    const acompanhamentosCrianca = 200;
    const refrigeranteCrianca = 0.5;
    const aguaCrianca = 0.4;
  
    let carneTotal = (adultsConsumingAlcohol * carneAdulto) + (adultsNotConsumingAlcohol * carneAdulto) + (children * carneCrianca);
    let acompanhamentosTotal = (adultsConsumingAlcohol * acompanhamentosAdulto) + (adultsNotConsumingAlcohol * acompanhamentosAdulto) + (children * acompanhamentosCrianca);
    let cervejaTotal = (adultsConsumingAlcohol + adultsNotConsumingAlcohol) * cervejaAdulto;
    let refrigeranteTotal = (adultsConsumingAlcohol + adultsNotConsumingAlcohol + children) * refrigeranteAdulto;
    let aguaTotal = (adultsConsumingAlcohol + adultsNotConsumingAlcohol + children) * aguaAdulto;
  
    carneTotal /= 1000;
    acompanhamentosTotal /= 1000; 
  
    console.log("--- Churrasco ---");
    console.log("Carne.............: " + carneTotal.toFixed(1) + "kg");
    console.log("Acompanhamentos...: " + acompanhamentosTotal.toFixed(1) + "kg");
    console.log("Cerveja...........: " + cervejaTotal.toFixed(1) + "l");
    console.log("Refrigerante......: " + refrigeranteTotal.toFixed(1) + "l");
    console.log("Água..............: " + aguaTotal.toFixed(1) + "l");
    console.log("Fonte: Sociedade da Carne");
  }
  calculateBarbecueItems(5, 3, 6);