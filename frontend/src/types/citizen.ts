import { z } from 'zod';

// Step 1: Basic Info
export const basicInfoSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters long.").max(100, "Title is too long."),
  description: z.string().min(20, "Please provide more details (at least 20 characters).").max(1000, "Description is too long."),
});

// Step 2: Category & Priority
export const categorySchema = z.object({
  category: z.enum(['Road', 'Water', 'Electricity', 'Waste', 'Other']),
  priority: z.enum(['Low', 'Medium', 'High']),
});

// Step 3: Media Upload
export const mediaSchema = z.object({
  images: z.array(z.string()).optional(), // Array of base64 strings or URLs (mocking file upload)
  voiceNote: z.string().optional(), // Mock voice note blob URL or string
});

// Step 4: Location
export const locationSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  address: z.string().optional(),
});

// Combined schema for the entire wizard
export const complaintWizardSchema = basicInfoSchema
  .merge(categorySchema)
  .merge(mediaSchema)
  .merge(locationSchema);

export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
export type CategoryFormData = z.infer<typeof categorySchema>;
export type MediaFormData = z.infer<typeof mediaSchema>;
export type LocationFormData = z.infer<typeof locationSchema>;
export type ComplaintWizardFormData = z.infer<typeof complaintWizardSchema>;
