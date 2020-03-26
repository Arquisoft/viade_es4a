import styled from 'styled-components';


export const RouteAddDiv=styled.div`
  background-color: #fff;
  margin: 30px auto;

  max-width: 80% !important;
  flex-direction: row !important;
  

  align-items: center;
  
  h1,
  img {
    padding: 30px 0;
    margin: 0 10px;
    display: inline-block;
    vertical-align: middle;
  }

  h1 {
    font-size: 60px;
    font-family: Verdana, sans-serif;
  }
  
  div{
    padding: 10px 0;
  }
  label{
    padding: 20px 0;
  }

`;

export const RouteAddTitle=styled.h1`

    font-family: Verdana, sans-serif;
    font-size:60px;
`;

export const AddRouteWrapper = styled.section`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  background-image: url('/img/concentric-hex-pattern_2x.png');
  background-repeat: repeat;
  padding: 60px 0;
`;

export const AddRouteContainer = styled.div`
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  max-width: 900px;
  margin: 0 20px;
  width: 100%;
  flex: 1 0 auto;
`;

export const AddRouteInsideContainer = styled.div`
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  max-width: 900px;
  margin: 0 20px 20px 20px 20px;
  width: 100%;
  flex: 1 0 auto;
  padding: 5px;
  label{
    font-family: Verdana, sans-serif;
    font-size: 20px;
  }
`;

export const Separator = styled.div`
  padding: 20px 40px 0px 40px;
  position: relative;
  div:after {
    background-color: #d8d8d8;
    display: block;
    content: '';
    height: 1px;
    width: 100%;
    margin: 25px 0 0 0;
  }
  `;

