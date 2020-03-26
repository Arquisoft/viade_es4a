import styled from 'styled-components';

 export const ViewRouteh1 = styled.h1`
    margin: 20px; 
    font-size: 60px;
    font-family: Verdana, sans-serif;
  `;

export const TitleLabel = styled.label`
  font-family: Verdana, sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

export const NormalLabel = styled.label`
  font-family: Verdana, sans-serif;
  font-size: 20px;
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

export const ViewRouteWrapper = styled.section`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  background-image: url('/img/concentric-hex-pattern_2x.png');
  background-repeat: repeat;
  padding: 60px 0;
`;

export const ViewRouteContainer = styled.div`
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  max-width: 900px;
  margin: 0 20px;
  width: 100%;
  flex: 1 0 auto;
`;
