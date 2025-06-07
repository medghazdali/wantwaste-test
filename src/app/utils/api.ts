import type { Skip } from "../components/SkipCard";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const fetchSkips = async (): Promise<Skip[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/skips`);
    if (!response.ok) {
      throw new Error("Failed to fetch skips");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching skips:", error);
    throw error;
  }
};

export const fetchSkipById = async (id: string): Promise<Skip> => {
  try {
    const response = await fetch(`${API_BASE_URL}/skips/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch skip details");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching skip details:", error);
    throw error;
  }
};

export const bookSkip = async (
  skipId: string,
  bookingDetails: Record<string, unknown>
): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        skipId,
        ...bookingDetails,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to book skip");
    }
    return await response.json();
  } catch (error) {
    console.error("Error booking skip:", error);
    throw error;
  }
}; 