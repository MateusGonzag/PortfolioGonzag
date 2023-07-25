import React, { useContext } from "react";
import ContentWrapper from "../../../../components/reusables/ContentWrapper";
import ProjectSchematic from "../../../../components/reusables/ProjectSchematic";
import { SlideContext } from "../../../../context/SlideContext";
import imgProject from "../../../../assets/images/project3.png";

const Project3 = () => {
  const { translations } = useContext(SlideContext);
  return (
    <ContentWrapper>
      <ProjectSchematic
        skills={["HTML5", "JavaScript", "React.js", "CSS3"]}
        title={translations.projects[3].name}
        description={translations.projects[3].description}
        linkBt1={"https://markdown-previewer.mateusoliveir34.repl.co/"}
        linkBt2={"https://github.com/MateusGonzag/Markdown-Previewer"}
        imgProject={imgProject}
      />
    </ContentWrapper>
  );
};

export default Project3;
