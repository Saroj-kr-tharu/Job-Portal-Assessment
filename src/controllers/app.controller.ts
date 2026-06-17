import { Request, Response } from "express";

export const pingHandler = async (req: Request, res: Response) => {
    res.status(200).json({ message: "Pong!" });
}

export const appCreate = async (req: Request, res: Response) => {

//    const booking = await createBookingService(req.body);

    // res.status(201).json({
    //     bookingId: booking.bookingId,
    //     idempotencyKey: booking.idempotencyKey,
    // });
}