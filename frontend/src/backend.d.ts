import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface DemoBooking {
    name: string;
    preferredTime: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    bookDemo(name: string, phone: string, preferredTime: string): Promise<void>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllDemoBookings(): Promise<Array<DemoBooking>>;
    submitContactForm(name: string, email: string, phone: string, message: string): Promise<void>;
}
