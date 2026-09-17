import Search from "@/components/Search";
import SearchResults from "@/components/SearchResults"
export default function Home() {
  return (
    <div className="py-10 px-6">
      <Search />
      <SearchResults />
    </div>
  );
}
