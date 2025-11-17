import { Offices } from "@/modules/Offices";
import { useGetAllOfficesQuery } from "@/modules/Offices/officesApi";

export const Locations = () => {
  const { data, isLoading, error } = useGetAllOfficesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching offices</p>;
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="min-h-screen">
      <h3 className="text-4xl md:text-6xl font-semibold text-center">
        Visit our local offices
      </h3>
      <div className="mt-12 flex justify-center">
        <Offices />
      </div>
    </div>
  );
};
