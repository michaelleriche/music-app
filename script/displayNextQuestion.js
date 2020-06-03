function displayRecipe() {
  if (answers.question5Answer === true || answers.question5Answer === false) {
    const answer = recipes.filter(recipe => {
      //dairy
      if (answers.question1Answer === true && recipe.dairyFree === true) {
        return recipe;
      } else if (answers.question1Answer === false) {
        return recipe;
      }//vegetarian
      if (answers.question2Answer === true  && recipe.vegetarian === true) {
        return recipe;
      } else if (answers.question2Answer === false) {
        return recipe;
      } //vegan
      if (answers.question3Answer === true  && recipe.vegan === true) {
        return recipe;
      } else if (answers.question3Answer === false) {
        return recipe;
      } // sugar
      if (answers.question4Answer === false  && recipe.refinedSugarFree === true) {
        return recipe;
      } else if (answers.question4Answer === true) {
        return recipe;
      } // gluten
      if (answers.question5Answer === true  && recipe.glutenFree === true) {
        return recipe;
      } else if (answers.question5Answer === false) {
        return recipe;
      }
    });
  }
}








function displayRecipe() {
  if (answers.question5Answer === true || answers.question5Answer === false) {
    const answer = recipes.filter(recipe => {
      if (recipe.dairyFree === answers.question1Answer && recipe.vegetarian === answers.question2Answer && recipe.vegan === answers.question3Answer && recipe.refinedSugarFree === answers.question4Answer && recipe.glutenFree === answers.question5Answer) {
      return recipe
      }
    })