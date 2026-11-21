import SearchBar from "@/components/SearchBar"; 
import { stays } from "../lib/stays";
import StayCard from "../components/StayCard";

type HomepageProps = {
  searchParams: Promise< { q?: string }>;
};

export default async function HomePage({ searchParams }: HomepageProps) {
  const { q: query = "" } = await searchParams;

  const visible = stays.filter((s) =>
    (s.name + " " + s.location).toLowerCase().includes(query?.toLowerCase() || "")
  );

  return (
    <section>
      <h1>Find a place to stay</h1>
      <SearchBar query={query} />
      <div className="grid">
        {visible.map((s) => (
          <StayCard key={s.id} stay={s} />
        ))}
      </div>
    </section>
  );
}
