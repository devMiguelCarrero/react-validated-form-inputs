import { createContext } from 'react';

type Item = string | number | undefined;

interface OfferContextProps {
  selectedItem: Item;
  setSelectedItem: (offer: Item) => void;
}

export const ItemContext = createContext<OfferContextProps>({
  selectedItem: null,
  setSelectedItem: () => {},
});
