import {
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Stack,
  useTheme,
  styled,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useMask } from "@react-input/mask";

interface FormSectionProps {
  onSubmit: (data: Record<string, unknown>) => Promise<void>;
  onBack: () => void;
  sliderValue: number;
  productTypeLabel: string;
}

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

  const phoneInputRef = useMask({
    mask: "(00) 00000-0000",
    replacement: {
      0: /\d/,
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
      p={{ xs: 2, sm: 4 }}
      display="flex"
      flexDirection="column"
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        color={theme.palette.primary.main}
        textAlign="center"
      >
        Realize seus planos com a Simuladora de Parcelas
      </Typography>

      <Typography
        variant="body2"
        textAlign="center"
        color="text.secondary"
        mb={3}
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
              inputRef={phoneInputRef}
              label="Telefone"
              error={!!errors.phone}
              helperText={errors.phone?.message}
              required
              fullWidth
            />
          )}
        />
      </Stack>

      <Box mt={3}>
        <FormControlLabel
          control={<Checkbox required />}
          label={
            <Typography variant="body2">
              Aceito os <strong>Termos de Privacidade</strong>.
            </Typography>
          }
        />
      </Box>

      <Stack direction="row" spacing={2} mt={2}>
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

export default FormSection;
