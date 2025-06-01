import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Stack,
  useTheme,
} from "@mui/material";
import { useForm } from "@/hooks/useForms";

interface FormSectionProps {
  onSubmit: (data: Record<string, unknown>) => Promise<void>;
  onBack: () => void; // Adicionada prop para voltar
  sliderValue: number;
  productTypeLabel: string;
}

function FormSection({
  onSubmit,
  onBack, // Recebe a função de voltar
  sliderValue,
  productTypeLabel,
}: FormSectionProps) {
  const { formData, handleInputChange } = useForm();
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptNotifications, setAcceptNotifications] = useState(false);
  const theme = useTheme();

  const handleFormSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    const dataToSend = {
      ...formData,
      parcela: sliderValue,
      dateTime: formattedDate,
      tipo: productTypeLabel,
      aceitouTermos: acceptTerms,
      receberNotificacoes: acceptNotifications,
    };

    await onSubmit(dataToSend);
  };

  const isFormValid =
    formData.name?.trim() &&
    formData.email?.trim() &&
    formData.phone?.trim() &&
    acceptTerms;

  return (
    <Box
      component="form"
      onSubmit={handleFormSubmit}
      //   p={{ xs: 2, sm: 4 }}
      display="flex"
      flexDirection="column"
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        color={theme.palette.primary.main}
        textAlign="center"
        mb={1}
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
        <TextField
          label="Nome"
          name="name"
          required
          fullWidth
          value={formData.name}
          onChange={handleInputChange}
        />
        <TextField
          label="E-mail"
          name="email"
          type="email"
          required
          fullWidth
          value={formData.email}
          onChange={handleInputChange}
        />
        <TextField
          label="Telefone"
          name="phone"
          type="tel"
          required
          fullWidth
          value={formData.phone}
          onChange={handleInputChange}
        />
      </Stack>

      <Box mt={3}>
        <FormControlLabel
          control={
            <Checkbox
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              required
            />
          }
          label={"Aceito os Termos de Privacidade"}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={acceptNotifications}
              onChange={(e) => setAcceptNotifications(e.target.checked)}
            />
          }
          label="Sim, eu concordo em receber notificações."
        />
      </Box>

      <Stack direction="row" spacing={2} mt={4}>
        <Button
          variant="outlined"
          fullWidth
          onClick={onBack} // Chama a função de voltar
        >
          Voltar
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!isFormValid}
        >
          Resultado
        </Button>
      </Stack>
    </Box>
  );
}

export default FormSection;
