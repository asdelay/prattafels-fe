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
      <h3 className="text-4xl bold text-center">Visit our local offices</h3>
      <div className="m-8">
        {data && data.length > 0 ? (
          data?.map((office: any) => (
            <div key={office.id}>
              <img src={office.imageUrl} alt="office iamge" />
              <p>{office.address}</p>
            </div>
          ))
        ) : (
          <h3>No offices added yet</h3>
        )}
      </div>
    </div>
  );
};
