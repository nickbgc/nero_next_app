import { useState } from 'react';

export default function useDisclosure(initialState: boolean = false) {
  const [isOpen, setState] = useState<boolean>(initialState);
  const onClose = () => setState(false);
  const onOpen = () => setState(true);
  return { isOpen, onOpen, onClose };
}
