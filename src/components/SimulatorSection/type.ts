interface FormSectionProps {
  onSubmit: (data: Record<string, unknown>) => Promise<void>;
  onBack: () => void;
  sliderValue: number;
  productTypeLabel: string;
}

export type { FormSectionProps };
