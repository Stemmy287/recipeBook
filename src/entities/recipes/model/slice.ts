import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipeType } from 'entities/recipes';

const slice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [] as RecipeType[],
  },
  reducers: {
    createRecipe({ recipes }, { payload }: PayloadAction<RecipeType>) {
      recipes.push(payload);
    },
    removeRecipe({ recipes }, { payload }: PayloadAction<string>) {
      const index = recipes.findIndex((recipe) => recipe.id === payload);

      if (index !== -1) recipes.splice(index, 1);
    },
    editRecipe({ recipes }, { payload }: PayloadAction<{ recipeEditedValues: Partial<RecipeType>, recipeId: string }>) {
      const index = recipes.findIndex((recipe) => recipe.id === payload.recipeId);

      if (index !== -1) recipes[index] = { ...recipes[index], ...payload.recipeEditedValues };
    },
  },
});

export const recipesReducer = slice.reducer;
export const { createRecipe, removeRecipe, editRecipe } = slice.actions;
