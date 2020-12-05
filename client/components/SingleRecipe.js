import React, {useEffect} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {setSingleRecipeThunk} from '../store/recipes'

export const SingleRecipe = props => {
  const {recipe, getRecipe} = props

  useEffect(() => {
    getRecipe(props.match.params.recipeId)
  }, [])

  return (
    <>
      <Container>
        <Title>{recipe.name}</Title>
        <RecipeContainer>
          <Image src={recipe.imageUrl} />
          <Details>
            <div>{recipe.description}</div>
            <div>Source: {recipe.publisher}</div>
            <div>Link: {recipe.url}</div>
            <div>Prep Time: {recipe.prepTime}</div>
            <div>Cook Time: {recipe.cookTime}</div>
            <div>Yield: {recipe.yield}</div>
            <div>Categories: {recipe.categories}</div>
          </Details>

          <Ingredients>
            <Subtitle>Ingredients</Subtitle>
            {recipe.ingredients ? (
              <ul>
                {recipe.ingredients.map(ingredient => (
                  <ListItem key={recipe.ingredients.indexOf(ingredient)}>
                    {ingredient}
                  </ListItem>
                ))}
              </ul>
            ) : (
              ''
            )}
          </Ingredients>
          <Instructions>
            <Subtitle>Instructions</Subtitle>
            {recipe.instructions ? (
              <ul>
                {recipe.instructions.map(instruction => (
                  <ListItem key={recipe.instructions.indexOf(instruction)}>
                    Step 1: {instruction}
                  </ListItem>
                ))}
              </ul>
            ) : (
              ''
            )}
          </Instructions>
        </RecipeContainer>
      </Container>
    </>
  )
}

const mapState = state => ({
  recipe: state.recipes.singleRecipe
})

const mapDispatch = dispatch => ({
  getRecipe: recipeId => dispatch(setSingleRecipeThunk(recipeId))
})

export default connect(mapState, mapDispatch)(SingleRecipe)

const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
`
const Title = styled.div`
  margin: 20px;
  text-align: center;
  font-size: 1.5em;
  width: 100%;
`

const Image = styled.img`
  width: 30%;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
  padding-bottom: 20px;
`

const RecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  width: 70%;
  padding-top: 20px;
`

const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  padding-left: 20px;
`

const Subtitle = styled.div`
  font-size: 1em;
  padding-bottom: 5px;
`

const ListItem = styled.li`
  list-style-type: none;
`

const Ingredients = styled.div`
  width: calc(30%-20px);
  padding: 20px;
`

const Instructions = styled.div`
  width: calc(70%-20px);
  padding: 20px;
`