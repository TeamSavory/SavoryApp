import React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.primary ? 'column' : 'row')};
  text-align: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 180px;
  padding-bottom: 50px;
`

// const ContentWrapperWithMargins = styled(ContentWrapper)`
//   padding-top: 15%;
//   padding-left: 10%;
//   padding-right: 10%;
//   justify-content: space-evenly;
// `

const Container = ({primary, children}) => {
  return <ContentWrapper primary={primary}>{children}</ContentWrapper>
}

// const ContainerWithMargins = () => {
//   return <ContentWrapperWithMargins></ContentWrapperWithMargins>
// }

export default Container