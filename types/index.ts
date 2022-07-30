export type ReactProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
