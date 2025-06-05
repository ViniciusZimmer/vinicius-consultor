import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  ToggleButton,
  styled,
  Stepper,
  Step,
  StepLabel,
  ToggleButtonGroup,
  Slider,
  TextField,
  Checkbox,
  FormControlLabel,
  Stack,
  useTheme,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import theme from "@/theme";

// Types
type ProductType = "imoveis" | "automoveis" | "motos" | "servicos";

const PRODUCT_OPTIONS: { value: ProductType; label: string }[] = [
  { value: "imoveis", label: "Imóveis" },
  { value: "automoveis", label: "Automóveis" },
  { value: "motos", label: "Motos" },
];

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden", // Mantém o overflow escondido por padrão
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    overflow: "hidden", // Remove o scroll em telas menores
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-100px",
    right: "-100px",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    zIndex: 0,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-50px",
    left: "-50px",
    width: "200px",
    height: "200px",
    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
    animation: "float 6s ease-in-out infinite",
    zIndex: 0,
  },
  "@keyframes float": {
    "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
    "50%": { transform: "translateY(-20px) rotate(5deg)" },
  },
}));

const HeroSection = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: theme.spacing(8),
  zIndex: 1,
  position: "relative",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
    textAlign: "center",
    alignItems: "center",
  },
}));

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  flexWrap: "wrap",
  justifyContent: "center",
  "& .MuiToggleButton-root": {
    border: "2px solid #e5e7eb",
    borderRadius: 25,
    padding: "8px 20px",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#6b7280",
    backgroundColor: "#f9fafb",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "#f3f4f6",
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      borderColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
}));

// Container do formulário com altura fixa
const FormContainer = styled(Paper)(({ theme }) => ({
  maxWidth: 450,
  width: "100%",
  height: 600, // Altura fixa para manter consistência
  padding: theme.spacing(4),
  borderRadius: 24,

  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(10px)",
  // border: "1px solid rgba(255, 255, 255, 0.2)",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    padding: theme.spacing(3),
    height: 700, // Altura menor para mobile
  },
}));

const StepContent = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
});

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  fontWeight: "bold",
  fontSize: "1.1rem",
  padding: theme.spacing(1.8, 4),
  width: "100%",
  borderRadius: 30,
  textTransform: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    transform: "translateY(-2px)",
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

// Componente FormSection integrado
interface FormSectionProps {
  onSubmit: (data: Record<string, unknown>) => Promise<void>;
  onBack: () => void;
  sliderValue: number;
  productTypeLabel: string;
}

function FormSection({
  onSubmit,
  onBack,
  sliderValue,
  productTypeLabel,
}: FormSectionProps) {
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const handleFormSubmit = async (
    data: Record<string, unknown>
  ): Promise<void> => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    const dataToSend = {
      ...data,
      parcela: sliderValue,
      dateTime: formattedDate,
      tipo: productTypeLabel,
    };

    await onSubmit(dataToSend);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography
          variant="h6"
          fontWeight="bold"
          color={theme.palette.primary.main}
          textAlign="center"
          sx={{ mb: 2 }}
        >
          Realize seus planos com a Simuladora de Parcelas
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Preencha os campos abaixo para ver os resultados:
        </Typography>

        <Stack spacing={2}>
          <Controller
            name="name"
            control={control}
            rules={{
              required: "Nome é obrigatório",
              pattern: {
                value: /^[a-zA-ZÀ-ÿ\s]+$/,
                message: "O nome deve conter apenas letras",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nome"
                error={!!errors.name}
                helperText={errors.name?.message}
                required
                fullWidth
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="E-mail"
                type="email"
                error={!!errors.email}
                helperText={errors.email?.message}
                required
                fullWidth
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Telefone"
                error={!!errors.phone}
                helperText={errors.phone?.message}
                required
                fullWidth
              />
            )}
          />
        </Stack>

        <Box sx={{ mt: 3 }}>
          <FormControlLabel
            control={<Checkbox required />}
            label={
              <Typography component="span" variant="body2">
                Aceito os <strong>Termos de Privacidade</strong>
              </Typography>
            }
          />
        </Box>
      </Box>

      <Stack paddingTop={4} gap={2} direction="row" spacing={2} sx={{ mt: 2 }}>
        <StyledButton variant="outlined" fullWidth onClick={onBack}>
          Voltar
        </StyledButton>
        <StyledButton
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Resultado
        </StyledButton>
      </Stack>
    </Box>
  );
}

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
      {/* Left - Hero Section */}
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
          É crédito.
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
          É investimento.
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
          Porque é especialista em consórcio.
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
                    A hora de realizar é agora.
                  </Typography>

                  <Typography
                    variant="body1"
                    textAlign="center"
                    color="text.secondary"
                  >
                    Selecione sua próxima conquista:
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
                    Simule o plano por:
                  </Typography>

                  <StyledToggleButtonGroup
                    value={simType}
                    exclusive
                    onChange={handleSimTypeChange}
                    aria-label="Tipo de simulação"
                  >
                    <ToggleButton value="parcela">Parcela</ToggleButton>
                    <ToggleButton value="credito">Crédito</ToggleButton>
                  </StyledToggleButtonGroup>

                  <Typography
                    variant="body1"
                    textAlign="center"
                    color="text.secondary"
                  >
                    Escolha o valor do{" "}
                    {simType === "parcela" ? "parcela" : "crédito"}:
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

                <StyledButton onClick={handleNext}>Simular agora</StyledButton>
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
