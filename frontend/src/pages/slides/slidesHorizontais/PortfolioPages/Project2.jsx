import React, { useContext } from "react";
import ContentWrapper from "../../../../components/reusables/ContentWrapper";
import ProjectSchematic from "../../../../components/reusables/ProjectSchematic";
import { SlideContext } from "../../../../context/SlideContext";
import imgProject from "../../../../assets/images/project2.gif";

const Project2 = () => {
  const { translations } = useContext(SlideContext);
  return (
    <ContentWrapper>
      <ProjectSchematic
        skills={["HTML5", "JavaScript", "React.js", "Sass", "Jquery"]}
        title={translations.projects[2].name}
        description={translations.projects[2].description}
        linkBt1={"https://piano-machine.mateusoliveir34.repl.co/"}
        linkBt2={"https://github.com/MateusGonzag/Piano-Machine"}
        imgProject={imgProject}
      />
    </ContentWrapper>
  );
};

export default Project2;
