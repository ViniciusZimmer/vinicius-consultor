import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import type { FormSectionProps } from "./type";
import { simulatorSectionTexts } from "@/utils/constants";
import { Controller, useForm } from "react-hook-form";
import { StyledButton } from "./style";

export function FormSection({
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
          {simulatorSectionTexts.formTitle}
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          {simulatorSectionTexts.formSubtitle}
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
                label={simulatorSectionTexts.formName}
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
                label={simulatorSectionTexts.formEmail}
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
                label={simulatorSectionTexts.formPhone}
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
                {simulatorSectionTexts.formTerms}
              </Typography>
            }
          />
        </Box>
      </Box>

      <Stack paddingTop={4} gap={2} direction="row" spacing={2} sx={{ mt: 2 }}>
        <StyledButton variant="outlined" fullWidth onClick={onBack}>
          {simulatorSectionTexts.backButton}
        </StyledButton>
        <StyledButton
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          {simulatorSectionTexts.resultButton}
        </StyledButton>
      </Stack>
    </Box>
  );
}
