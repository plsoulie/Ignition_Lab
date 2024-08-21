import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  padding: 0px 120px 0px 120px; /* Consistent padding with other sections */
`;

const SectionContainer = styled.div`
  padding: 60px 100px 60px 100px;
  background-color: #111; /* Match the background color of other sections */
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff; /* White color for text */
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns layout */
  gap: 20px; /* Space between grid items */
`;

const SkillItem = styled.div`
  background-color: #222; /* Skill item background */
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.2rem;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: orange; /* Highlighted background color on hover */
    transform: scale(1.05); /* Slightly enlarge the skill on hover */
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
