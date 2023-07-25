import React, { useContext } from "react";
import ContentWrapper from "../../../../components/reusables/ContentWrapper";
import ProjectSchematic from "../../../../components/reusables/ProjectSchematic";
import { SlideContext } from "../../../../context/SlideContext";
import imgProject from "../../../../assets/images/project1.png";

const Project1 = () => {
  const { translations } = useContext(SlideContext);
  return (
    <ContentWrapper>
      <ProjectSchematic
        skills={["HTML5", "JavaScript", "React.js", "CSS3"]}
        title={translations.projects[1].name}
        description={translations.projects[1].description}
        linkBt1={"https://portfolio-web-site.mateusoliveir34.repl.co/"}
        linkBt2={"https://github.com/MateusGonzag/Portfolio"}
        imgProject={imgProject}
      />
    </ContentWrapper>
  );
};

export default Project1;
