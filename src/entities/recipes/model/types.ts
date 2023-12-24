export type IngredientType = {
  id: string
  title: string
  count?: number
  weight?: number
};

export type RecipeType = {
  id: string
  title: string,
  image: string,
  ingredients: IngredientType[],
  priceCategory: number,
  difficultyOfPreparation: string
  stepsOfPreparation: string[],
  description: string
};
