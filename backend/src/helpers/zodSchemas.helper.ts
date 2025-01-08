import { z } from "zod";

const user = z.object({
  fullName: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.string().regex(/(\d{3})-(\d{3})-(\d{4})/),
  birthday: z.date({ coerce: true }),
  userType: z.number().min(0).max(2).default(0),
});

const updatePassUser = z.object({
  email: z.string().email(),
  password: z.string(),
});

const id = z.number({ coerce: true });

const email = z.string().email();

const zod = {
  user,
  id,
  email,
  updatePassUser,
};

export default zod;
