import { InputCard } from "./input-card";

interface KeyCardProps {
  value: string | null;
}

export const KeyCard = ({ value }: KeyCardProps) => {
  return <InputCard label="Stream Key" value={value} copyButton showButton />;
};
