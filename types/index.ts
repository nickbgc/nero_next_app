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

export type PostProps = {
  type: 'video' | 'announcement' | 'poll' | 'text' | 'section';
  text: string;
  user: {
    name: string;
    avatar: string;
  };
  date?: string;
  interaction_reward: number;
  poll_options?: string[];
  section?: {
    type: 'merch' | 'experience';
    title: string;
    more_button_text: string;
    items: Array<CommerceCardProps>;
  };
};

export type CommerceCardProps = {
  pointsval: number;
  title: string;
  image: string;
  price: string;
  inGrid?: boolean;
};
