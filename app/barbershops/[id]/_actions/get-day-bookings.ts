"use server"

import { db } from "@/app/lib/prisma";
import { endOfDay, startOfDay } from "date-fns";


export const getDayBookings = async (barbershopID: string, date: Date) => {
   const Booking = await db.booking.findMany({
      where: {
         barbershopID,
         date: {
               lte:endOfDay(date),
               gte: startOfDay(date),
         },
      },
   });

   return Booking;
};