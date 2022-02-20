import React from 'react';
import styled from 'styled-components';
import Section from './Section';
function Home(){
  return (
    <Container>
        <Section
          title="Mode S"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Mode Y"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Mode-3"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
       />
       <Section
         title="Mode-x"
         description="Order Online for Touchless Delivery"
         backgroundImg="model-x.jpg"
         leftBtnText="Custom order"
         rightBtnText="Existing inventory"
        />
        <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
         />
         <Section
           title="Solar or New Roofs"
           description="Solar Roof Costs Less Than Plus Solar Panels"
           backgroundImg="solar-roof.jpg"
           leftBtnText="Order now"
           rightBtnText="Learn more"
          />
          <Section
            title="Lowest Cost Solar Panels in America"
            description=''
            backgroundImg="accessories.jpg"
            leftBtnText="Shop now"

           />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`
