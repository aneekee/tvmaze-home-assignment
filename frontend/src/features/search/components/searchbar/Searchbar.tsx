import type { ChangeEvent } from 'react';
import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

export const Searchbar = ({ value, onChange, disabled }: Props) => {
  return (
    <div className="relative flex">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="pl-10 bg-background/50 border-border/50 focus:bg-background"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};
