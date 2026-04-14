import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import type { PortfolioData } from '@/types/portfolio';

const PROFILES_COLLECTION = 'portfolios';

/**
 * Fetches portfolio data from Firestore for a given portfolio ID.
 * @param portfolioId - The unique ID of the portfolio to fetch.
 * @returns A promise that resolves to the portfolio data, or null if not found.
 */
export async function getPortfolio(portfolioId: string): Promise<PortfolioData | null> {
  try {
    const docRef = doc(db, PROFILES_COLLECTION, portfolioId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data() as PortfolioData;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    throw new Error("Failed to fetch portfolio data.");
  }
}

/**
 * Creates or updates a portfolio document in Firestore.
 * @param portfolioId - The unique ID for the portfolio.
 * @param data - The portfolio data to save.
 * @returns A promise that resolves when the operation is complete.
 */
export async function savePortfolio(portfolioId: string, data: PortfolioData): Promise<void> {
  try {
    const docRef = doc(db, PROFILES_COLLECTION, portfolioId);
    await setDoc(docRef, data, { merge: true }); // Use merge to prevent overwriting
    console.log("Portfolio saved successfully for ID:", portfolioId);
  } catch (error) {
    console.error("Error saving document:", error);
    throw new Error("Failed to save portfolio data.");
  }
}

/**
 * Checks if a portfolio ID already exists in Firestore.
 * @param portfolioId - The ID to check.
 * @returns A promise that resolves to true if the ID exists, false otherwise.
 */
export async function checkPortfolioIdExists(portfolioId: string): Promise<boolean> {
  try {
    const docRef = doc(db, PROFILES_COLLECTION, portfolioId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  } catch (error) {
    console.error("Error checking document existence:", error);
    // In case of error, assume it might exist to be safe
    return true;
  }
}
