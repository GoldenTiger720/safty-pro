import { useState } from "react";
import { Search, Camera } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 w-full max-w-2xl px-4">
      <form onSubmit={handleSearch} className="relative flex items-center">
        <Input
          type="text"
          placeholder="Search for products..."
          className="pr-20 pl-4 py-6 rounded-full border-2 border-gray-200 shadow-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute right-1.5 flex space-x-1">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-full h-10 w-10"
          >
            <Camera className="h-5 w-5" />
          </Button>
          <Button
            type="submit"
            className="rounded-full bg-safety-orange hover:bg-safety-darkOrange text-white h-10 flex items-center justify-center px-6"
          >
            <Search className="h-5 w-5 mr-1" /> Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
