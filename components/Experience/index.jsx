import React from "react";
import {
  TechContainer,
  TechTitle,
  TechGrid,
} from "../Technologies/TechnologiesElements";
import ExportedImage from "next-image-export-optimizer";
import Animation from "../Ui/Animation";
import {
  ExperienceContainer,
  ExperienceHeading,
  ExperienceText,
  ExperienceList,
} from "./ExperienceElements";

const Experience = () => {
  return (
    <>
      <TechTitle>Experiencia Laboral</TechTitle>
      <ExperienceContainer>
        <div>
          <a href="https://exchangecopter.com" target={"_blank"}>
            <Animation direction="down" duration={1}>
              <ExportedImage
                src="/images/copterlogo.svg"
                alt="coding image"
                height={100}
                width={400}
              />
            </Animation>
          </a>
        </div>
        <Animation direction="down" duration={1}>
          <div>
            <ExperienceHeading>
              React / React Native Developer JR +
            </ExperienceHeading>
            <ExperienceText>Mayo 2022 - Actualidad</ExperienceText>
            <ExperienceList>
              <li>
                Desarrollo Frontend con React.js y React Native, integrando
                Firebase como base de datos.
              </li>
              <li>Creación desde 0 de App Mobile.</li>
              <li>Creación desde 0 de Firebase / Firestore / Storage.</li>
              <li>CI/CD con Netlify, Docker, DigitalOcean, Vercel.</li>
              <li>Bot de Telegram, web-scraping básico.</li>
              <li>
                Creación de Endpoints con Express.js / Node.js y utilizacion de
                Postman.
              </li>
              <li>Consumo y creación de API's y WebSockets.</li>
            </ExperienceList>
          </div>
        </Animation>
      </ExperienceContainer>
    </>
  );
};

export default Experience;
