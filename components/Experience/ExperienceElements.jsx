import styled from "@emotion/styled";

export const ExperienceContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  background-color: white;
  border-radius: 2rem;
  box-shadow: -2px 5px 15px -7px rgba(0, 0, 0, 0.54);
  -webkit-box-shadow: -2px 5px 15px -7px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: -2px 5px 15px -7px rgba(0, 0, 0, 0.54);
  max-width: 1000px;
  margin: auto;
`;

export const ExperienceHeading = styled.h1`
  color: #10389e;
  margin-top: 1rem;
  text-shadow: rgba(0, 0, 0, 0.1) 1px 2px;
`;
export const ExperienceText = styled.p`
  font-size: 2rem;
  margin-top: 1rem;
`;
export const ExperienceList = styled.ul`
  max-width: 900px;
  justify-content: center;
  text-align: center;
  margin: 4rem auto;

  li {
    list-style-type: "📌";
    padding-inline-start: 1ch;
    text-align: start;
    margin-bottom: 2rem;
    font-family: "Roboto", sans-serif;
    font-size: 2rem;
  }
`;
