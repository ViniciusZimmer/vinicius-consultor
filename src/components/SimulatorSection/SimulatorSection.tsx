import React, { useState, type SyntheticEvent } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  MenuItem,
  Tabs,
  Tab,
  Slider,
  styled,
  Select,
  FormControl,
  InputLabel,
  type SelectChangeEvent,
  TextField,
} from "@mui/material";
import theme from "@/theme";
import { sendFormToFirebase } from "@/hooks/sendForms"; // Importa a função de envio

// Types
type ProductType = "imoveis" | "automoveis" | "motos" | "servicos";

const PRODUCT_OPTIONS: { value: ProductType; label: string }[] = [
  { value: "imoveis", label: "Imóveis" },
  { value: "automoveis", label: "Automóveis" },
  { value: "motos", label: "Motos" },
  { value: "servicos", label: "Serviços" },
];

const TAB_LABELS = ["Parcela", "Crédito"] as const;

const FormContainer = styled(Paper)(({ theme }) => ({
  maxWidth: "100%",
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(2.5),
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.primary.main,
    height: "3px",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "0.9rem",
  color: theme.palette.text.secondary,
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
}));

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  "& .MuiSlider-thumb": {
    width: 20,
    height: 20,
    backgroundColor: theme.palette.common.white,
    border: `2px solid ${theme.palette.primary.main}`,
  },
  "& .MuiSlider-track": {
    height: 6,
  },
  "& .MuiSlider-rail": {
    height: 6,
  },
}));

const SimulateButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1.5),
  fontWeight: "bold",
  fontSize: "1rem",
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const SLIDER_MIN = 500;
const SLIDER_MAX = 10000;
const SLIDER_STEP = 50.5;
const SLIDER_INITIAL = 3175.5;

export default function SimulatorSection() {
  const [step, setStep] = useState<number>(1); // Controla a etapa do formulário

  const [productType, setProductType] = useState<ProductType>("imoveis");
  const [tabValue, setTabValue] = useState<number>(0);
  const [sliderValue, setSliderValue] = useState<number>(SLIDER_INITIAL);

  // Adiciona o estado para os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleProductChange = (event: SelectChangeEvent<ProductType>): void => {
    setProductType(event.target.value as ProductType);
  };

  const handleTabChange = (_: SyntheticEvent, newValue: number): void => {
    setTabValue(newValue);
  };

  const handleSliderChange = (_: Event, newValue: number | number[]): void => {
    setSliderValue(typeof newValue === "number" ? newValue : newValue[0]);
  };

  const formatCurrency = (value: number): string =>
    `R$ ${value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const handleNextStep = (): void => {
    setStep(2); // Avança para a segunda etapa
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
      // product type
      const productTypeLabel = PRODUCT_OPTIONS.find(
        (option) => option.value === productType
      )?.label;

      const dataToSend = {
        ...formData,
        parcela: sliderValue,
        dateTime: formattedDate,
        tipo: productTypeLabel,
      };

      await sendFormToFirebase(dataToSend);
      alert("Formulário enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        p: 2,
      }}
    >
      <FormContainer>
        {step === 1 && (
          <>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              color="text.primary"
              textAlign="center"
            >
              Simule agora
            </Typography>

            <FormControl fullWidth>
              <InputLabel id="product-type-label">Escolha o tipo</InputLabel>
              <Select<ProductType>
                labelId="product-type-label"
                value={productType}
                label="Escolha o tipo"
                onChange={handleProductChange}
              >
                {PRODUCT_OPTIONS.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <StyledTabs
              value={tabValue}
              onChange={handleTabChange}
              variant="fullWidth"
            >
              {TAB_LABELS.map((label) => (
                <StyledTab key={label} label={label} />
              ))}
            </StyledTabs>

            <Box>
              <Typography variant="body1" gutterBottom>
                {tabValue === 0
                  ? "Escolha o valor da parcela:"
                  : "Escolha o valor do crédito:"}
              </Typography>
              <Typography
                variant="h4"
                component="p"
                fontWeight="bold"
                sx={{ color: theme.palette.primary.main, mb: 2 }}
              >
                {formatCurrency(sliderValue)}
              </Typography>
              <StyledSlider
                value={sliderValue}
                min={SLIDER_MIN}
                max={SLIDER_MAX}
                step={SLIDER_STEP}
                onChange={handleSliderChange}
                aria-labelledby="value-slider"
              />
            </Box>

            <SimulateButton fullWidth onClick={handleNextStep}>
              Simular Consórcio
            </SimulateButton>
          </>
        )}
        {step === 2 && (
          <form onSubmit={handleFormSubmit}>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              color="text.primary"
              textAlign="center"
            >
              Preencha seus dados
            </Typography>

            <TextField
              label="Nome"
              name="name"
              type="text"
              required
              fullWidth
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              required
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              label="Celular"
              name="phone"
              type="tel"
              required
              fullWidth
              variant="outlined"
              value={formData.phone}
              onChange={handleInputChange}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Enviar
            </Button>
          </form>
        )}
      </FormContainer>
    </Box>
  );
}
