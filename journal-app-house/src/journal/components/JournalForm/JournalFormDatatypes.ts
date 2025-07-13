export interface JournalFormProps {
  onSubmit?: (data: FormData) => void;
}

export interface JournalFormData {
  title: string;
  body: string;
  date?: string;
  imageUrls?: string[];
}
