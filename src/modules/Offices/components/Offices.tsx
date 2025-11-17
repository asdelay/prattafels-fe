import { useGetAllOfficesQuery } from "@/modules/Offices/officesApi";
import type { Office } from "@/types";
import { OfficeCard } from "./OfficeCard";

export const Offices = () => {
  const { data, isLoading, error } = useGetAllOfficesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching offices</p>;
  return (
    <div className="flex flex-col items-center md:items-start">
      {data && data.length > 0 ? (
        data?.map((office: Office) => (
          <>
            <OfficeCard office={office} />
            <hr className="w-full my-8" />
          </>
        ))
      ) : (
        <h3>No offices added yet</h3>
      )}
    </div>
  );
};
