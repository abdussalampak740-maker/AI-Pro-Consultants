import { createContext, useContext } from 'react';

export const ModalContext = createContext<{ openAudit: () => void }>({ openAudit: () => {} });
export const useModal = () => useContext(ModalContext);
