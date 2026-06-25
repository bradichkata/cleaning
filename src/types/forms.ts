export type FieldErrors = Record<string, string[] | undefined>;

export type EstimateSummary = {
  min: number;
  max: number;
};

export type FormActionState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: FieldErrors;
  referenceId?: string;
  estimate?: EstimateSummary | null;
};

export const initialFormActionState: FormActionState = {
  status: "idle",
  message: "",
};
