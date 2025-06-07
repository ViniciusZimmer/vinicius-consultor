import { useState } from "react";
import {
  Box,
  Typography,
  ToggleButton,
  Stepper,
  Step,
  StepLabel,
  Slider,
} from "@mui/material";
import theme from "@/theme";
import { simulatorSectionTexts } from "@/utils/constants";
import { formatCurrency } from "@/utils/formtCurrency";
import {
  FormContainer,
  HeroSection,
  MainContainer,
  StepContent,
  StyledButton,
  StyledToggleButtonGroup,
} from "./style";
import { FormSection } from "./FormSection";

// Types
type ProductType = "imoveis" | "automoveis" | "motos" | "servicos";

const PRODUCT_OPTIONS: { value: ProductType; label: string }[] = [
  { value: "imoveis", label: "Imóveis" },
  { value: "automoveis", label: "Automóveis" },
  { value: "motos", label: "Motos" },
];

const VALUE_MIN = 400;
const VALUE_MAX = 4000;

const steps = simulatorSectionTexts.steps;

export default function SimulatorSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [productType, setProductType] = useState<ProductType>("imoveis");
  const [simType, setSimType] = useState<"parcela" | "credito">("credito");
  const [sliderValue, setSliderValue] = useState<number>(1000);

  const handleProductChange = (
    _: React.MouseEvent<HTMLElement>,
    newType: ProductType | null
  ) => {
    if (newType !== null) setProductType(newType);
  };

  const handleSimTypeChange = (
    _: React.MouseEvent<HTMLElement>,
    newType: "parcela" | "credito" | null
  ) => {
    if (newType !== null) setSimType(newType);
  };

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const productTypeLabel =
    PRODUCT_OPTIONS.find((option) => option.value === productType)?.label || "";

  const handleFormSubmit = async (): Promise<void> => {
    try {
      // await sendFormToFirebase(data);
      alert("Formulário enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <MainContainer>
      <HeroSection>
        <Typography
          variant="h2"
          fontWeight="bold"
          color="white"
          gutterBottom
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
            lineHeight: 1.1,
            textShadow: "2px 4px 8px rgba(0,0,0,0.3)",
          }}
        >
          {simulatorSectionTexts.hero1}
        </Typography>
        <Typography
          variant="h2"
          fontWeight="bold"
          color="white"
          gutterBottom
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
            lineHeight: 1.1,
            textShadow: "2px 4px 8px rgba(0,0,0,0.3)",
          }}
        >
          {simulatorSectionTexts.hero2}
        </Typography>
        <Typography
          variant="h2"
          fontWeight="bold"
          color={theme.palette.primary.main}
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
            lineHeight: 1.1,
            textShadow: "2px 4px 8px rgba(0,0,0,0.3)",
            maxWidth: { xs: "100%", md: "600px" },
          }}
        >
          {simulatorSectionTexts.hero3}
        </Typography>
      </HeroSection>

      {/* Right - Form Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 2, md: 4 },
          zIndex: 1,
        }}
      >
        <FormContainer>
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            sx={{ width: "100%", mb: 3 }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel
                  sx={{ "& .MuiStepLabel-label": { fontSize: "0.9rem" } }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <StepContent>
            {activeStep === 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h5"
                    textAlign="center"
                    fontWeight="bold"
                    color="primary"
                  >
                    {simulatorSectionTexts.step1Title}
                  </Typography>

                  <Typography
                    variant="body1"
                    textAlign="center"
                    color="text.secondary"
                  >
                    {simulatorSectionTexts.step1Subtitle}
                  </Typography>

                  <StyledToggleButtonGroup
                    value={productType}
                    exclusive
                    onChange={handleProductChange}
                    aria-label="Tipo de produto"
                  >
                    {PRODUCT_OPTIONS.map((option) => (
                      <ToggleButton key={option.value} value={option.value}>
                        {option.label}
                      </ToggleButton>
                    ))}
                  </StyledToggleButtonGroup>

                  <Typography
                    variant="body1"
                    textAlign="center"
                    color="text.secondary"
                  >
                    {simulatorSectionTexts.simTypeLabel}
                  </Typography>

                  <StyledToggleButtonGroup
                    value={simType}
                    exclusive
                    onChange={handleSimTypeChange}
                    aria-label="Tipo de simulação"
                  >
                    <ToggleButton value="parcela">
                      {simulatorSectionTexts.simTypeParcela}
                    </ToggleButton>
                    <ToggleButton value="credito">
                      {simulatorSectionTexts.simTypeCredito}
                    </ToggleButton>
                  </StyledToggleButtonGroup>

                  <Typography
                    variant="body1"
                    textAlign="center"
                    color="text.secondary"
                  >
                    {simulatorSectionTexts.valueLabel(simType)}
                  </Typography>

                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    color="text.primary"
                  >
                    {formatCurrency(sliderValue)}
                  </Typography>

                  <Slider
                    value={sliderValue}
                    onChange={handleSliderChange}
                    min={VALUE_MIN}
                    max={VALUE_MAX}
                    step={100}
                    sx={{
                      width: {
                        xs: "80%",
                        sm: "80%",
                        md: "80%",
                        lg: "90%",
                        xl: "100%",
                      },
                      color: theme.palette.primary.main,
                      height: 8,
                      "& .MuiSlider-track": {
                        border: "none",
                        backgroundColor: theme.palette.primary.main,
                      },
                      "& .MuiSlider-rail": {
                        backgroundColor: "#e5e7eb",
                      },
                      "& .MuiSlider-thumb": {
                        height: 24,
                        width: 24,
                        backgroundColor: theme.palette.primary.main,
                        border: "3px solid white",
                      },
                    }}
                  />
                </Box>

                <StyledButton onClick={handleNext}>
                  {simulatorSectionTexts.simulateButton}
                </StyledButton>
              </Box>
            )}

            {activeStep === 1 && (
              <FormSection
                onSubmit={handleFormSubmit}
                onBack={handleBack}
                sliderValue={sliderValue}
                productTypeLabel={productTypeLabel}
              />
            )}
          </StepContent>
        </FormContainer>
      </Box>
    </MainContainer>
  );
}
