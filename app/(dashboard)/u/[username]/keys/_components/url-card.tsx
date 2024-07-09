import { InputCard } from "./input-card";

interface UrlCardProps {
  value: string | null;
}

export const UrlCard = ({ value }: UrlCardProps) => {
  return <InputCard label="Server URL" value={value} copyButton />;
};
