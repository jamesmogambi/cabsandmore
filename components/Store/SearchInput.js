import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchInput = ({ className }) => {
  return (
    <div className={cn("relative flex", className)}>
      <Input
        type="text"
        placeholder="Search..."
        className="w-full h-12 border-neutral-200 rounded-l-[5px] text-lg"
      />
      <Search className="text-black absolute right-5 top-3.5 h-5 w-5" />
    </div>
  );
};

export default SearchInput;
