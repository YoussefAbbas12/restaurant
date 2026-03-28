import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
const reservationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  guests: z.string().min(1, "Please select number of guests"),
  requests: z.string().optional()
});
function useCreateReservation() {
  return useMutation({
    mutationFn: async (data) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true, data });
        }, 1500);
      });
    }
  });
}
export {
  reservationSchema,
  useCreateReservation
};
