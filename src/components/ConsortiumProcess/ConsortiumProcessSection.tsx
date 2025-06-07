import AnimatedFlowDivider from "./components/AnimatedFlowDivider";
import { processSteps } from "@/utils/constants";
import { consortiumProcessSectionTexts } from "@/utils/constants"; // nova importação
import {
  SectionContainer,
  StepCard,
  StepContainer,
  StepNumber,
  StepsWrapper,
  StyledButton,
  StyledCardContent,
  StyledCardMedia,
} from "./style";
import { Typography } from "@mui/material";
import { buttonVariants, containerVariants, itemVariants } from "./animation";

function ConsortiumProcessSection() {
  return (
    <SectionContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <AnimatedFlowDivider />
      <Typography
        paddingBottom={4}
        color="primary"
        variant="h4"
        fontWeight={700}
        gutterBottom
      >
        {consortiumProcessSectionTexts.title}
      </Typography>

      <StepsWrapper>
        {processSteps.map((step) => (
          <StepContainer key={step.number} variants={itemVariants}>
            <StepNumber variants={itemVariants}>{step.number}</StepNumber>
            <StepCard
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              variants={itemVariants}
            >
              <StyledCardMedia image={step.imageSrc} />
              <StyledCardContent>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
              </StyledCardContent>
            </StepCard>
          </StepContainer>
        ))}
      </StepsWrapper>

      <StyledButton variants={buttonVariants} whileHover="hover" whileTap="tap">
        {consortiumProcessSectionTexts.button}
      </StyledButton>
    </SectionContainer>
  );
}

export default ConsortiumProcessSection;
