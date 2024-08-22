import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  padding: 20px 100px; /* Match padding with CoreSection and TalentPoolSection */

  @media (max-width: 768px) {
    padding: 40px 60px; /* Adjust padding for medium screens */
  }

  @media (max-width: 480px) {
    padding: 30px 30px; /* Adjust padding for small screens */
  }
`;

const SectionContainer = styled.div`
  padding: 60px 100px 60px 100px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 60px 40px 60px; /* Adjust padding for medium screens */
  }

  @media (max-width: 480px) {
    padding: 30px 30px 30px 30px; /* Adjust padding for small screens */
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  color: #59ff00; /* White color for text */

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Slightly smaller title for medium screens */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Even smaller title for small screens */
    margin-bottom: 30px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns layout */
  gap: 20px; /* Space between grid items */

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns layout for medium screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns layout for small screens */
  }

  @media (max-width: 390px) {
    grid-template-columns: 1fr; /* 1 column layout for very small screens */
  }
`;

const SkillItem = styled.div`
  background-color: #2e2e2e; /* Skill item background */
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.2rem;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #59ff00;
    transform: scale(1.05);
  }
`;

const skills = ["React", "JavaScript", "TypeScript", "CSS", "HTML", "Node.js", "Express.js", "MongoDB", "SQL", "Python", "Django", "Machine Learning", "Web3", "UX Design", "Product Design"];

export default function SkillsSection() {
  return (
    <SectionWrapper>
      <SectionContainer>
        <Title>Our Skills</Title>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </SkillsGrid>
      </SectionContainer>
    </SectionWrapper>
  );
}
