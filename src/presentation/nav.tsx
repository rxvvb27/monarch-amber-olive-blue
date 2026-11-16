import { createContext, useContext } from "react";

export type DeckApi = { go: (n: number) => void };

export const DeckContext = createContext<DeckApi>({ go: () => {} });

export function useDeck() {
  return useContext(DeckContext);
}
