import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  styled,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { sendFormToFirebase } from "@/hooks/sendForms";
import FormSection from "./FormSection";
import theme from "@/theme";

// Types
type ProductType = "imoveis" | "automoveis" | "motos" | "servicos";

const PRODUCT_OPTIONS: { value: ProductType; label: string }[] = [
  { value: "imoveis", label: "Imóveis" },
  { value: "automoveis", label: "Automóveis" },
  { value: "motos", label: "Motos" },
];

// Styled components
const FormContainer = styled(Paper)(({ theme }) => ({
  maxWidth: 600, // Largura fixa
  width: "100%",
  height: 600, // Altura fixa
  minHeight: 600, // Garantir altura mínima
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[6],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
    padding: theme.spacing(3),
    gap: theme.spacing(3),
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: "bold",
  fontSize: "1rem",
  padding: theme.spacing(1.5),
  width: "100%",
  borderRadius: 30,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const VALUE_MIN = 400;
const VALUE_MAX = 4000;

const steps = ["Simule o valor", "Preencha seus dados"];

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export default function SimulatorSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [productType, setProductType] = useState<ProductType>("imoveis");
  const [simType] = useState<"parcela" | "credito">("parcela");
  const [sliderValue, setSliderValue] = useState<number>(2200);

  const handleProductChange = (
    _: React.MouseEvent<HTMLElement>,
    newType: ProductType | null
  ) => {
    if (newType !== null) setProductType(newType);
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

  const handleFormSubmit = async (
    data: Record<string, unknown>
  ): Promise<void> => {
    try {
      await sendFormToFirebase(data);
      alert("Formulário enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
          animation: "move 10s infinite alternate",
          zIndex: 0,
          "@keyframes move": {
            "0%": { transform: "translate(0, 0)" },
            "100%": { transform: "translate(20px, 10px)" },
          },
        }}
      />

      {/* Left - Text Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          p: { xs: 4, md: 8 },
          zIndex: 1,
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          Simule o futuro dos seus sonhos
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 400 }}>
          Escolha o valor ideal, preencha seus dados e receba a simulação do seu
          consórcio com facilidade e segurança.
        </Typography>
      </Box>

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
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && (
            <Box
              component="div"
              p={{ xs: 2, sm: 4 }}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: "100%", height: "100%" }}
            >
              <Typography
                variant="h6"
                textAlign="center"
                fontWeight="bold"
                color="primary"
              >
                A hora de realizar é agora.
              </Typography>

              <Typography variant="body1" textAlign="center">
                Selecione sua próxima conquista:
              </Typography>

              <ToggleButtonGroup
                value={productType}
                exclusive
                onChange={handleProductChange}
                aria-label="Tipo de produto"
                sx={{ flexWrap: "wrap", gap: 1 }}
              >
                {PRODUCT_OPTIONS.map((option) => (
                  <ToggleButton key={option.value} value={option.value}>
                    {option.label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>

              <Typography variant="body1" textAlign="center">
                Escolha o valor da{" "}
                {simType === "parcela" ? "parcela" : "carta de crédito"}:
              </Typography>

              <Typography variant="h4" fontWeight="bold">
                {formatCurrency(sliderValue)}
              </Typography>

              <Slider
                value={sliderValue}
                onChange={handleSliderChange}
                min={VALUE_MIN}
                max={VALUE_MAX}
                step={100}
                sx={{ width: "100%", color: theme.palette.primary.main }}
              />

              <StyledButton onClick={handleNext}>Avançar</StyledButton>
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
        </FormContainer>
      </Box>
    </Box>
  );
}
