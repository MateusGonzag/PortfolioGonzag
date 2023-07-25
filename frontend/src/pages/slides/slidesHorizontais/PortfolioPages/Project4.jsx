import React, { useContext } from "react";
import ContentWrapper from "../../../../components/reusables/ContentWrapper";
import ProjectSchematic from "../../../../components/reusables/ProjectSchematic";
import { SlideContext } from "../../../../context/SlideContext";
import imgProject from "../../../../assets/images/project4.gif";

const Project4 = () => {
  const { translations } = useContext(SlideContext);
  return (
    <ContentWrapper>
      <ProjectSchematic
        skills={["HTML5", "JavaScript", "CSS3"]}
        title={translations.projects[4].name}
        description={translations.projects[4].description}
        linkBt1={"https://quotegenerator.mateusoliveir34.repl.co/"}
        linkBt2={"https://github.com/MateusGonzag/QuoteGenerator"}
        imgProject={imgProject}
      />
    </ContentWrapper>
  );
};

export default Project4;
