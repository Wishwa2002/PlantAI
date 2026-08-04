

import { useState } from "react";


const Dashboard = () => {
  const [filter, setFilter] = useState("All");

  const plants = [
    {
      id: 1,
      name: "Rose Plant",
      scientificName: "Rosa",
      status: "Healthy",
      lastScan: "Today",
    },
    {
      id: 2,
      name: "Tomato Plant",
      scientificName: "Solanum lycopersicum",
      status: "Disease Detected",
      lastScan: "Yesterday",
    },
    {
      id: 3,
      name: "Aloe Vera",
      scientificName: "Aloe barbadensis",
      status: "Healthy",
      lastScan: "3 days ago",
    },
  ];

  const healthyPlants = plants.filter(
    (plant) => plant.status === "Healthy"
  ).length;

  const diseasedPlants = plants.filter(
    (plant) => plant.status === "Disease Detected"
  ).length;

  const filteredPlants =
    filter === "All"
      ? plants
      : plants.filter((plant) => plant.status === filter);

  const statistics = [
    {
      title: "Total Plants",
      value: plants.length,
      valueClass: "text-blue-600",
    },
    {
      title: "Healthy Plants",
      value: healthyPlants,
      valueClass: "text-green-600",
    },
    {
      title: "Diseases Found",
      value: diseasedPlants,
      valueClass: "text-red-600",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Dashboard Header */}
      <section className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Plant AI Dashboard 🌱
          </h1>

          <p className="mt-1 text-gray-600">
            Monitor your plants and detect diseases using artificial
            intelligence.
          </p>
        </div>

        <Button>Scan New Plant</Button>
      </section>

      {/* Statistics */}
      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {statistics.map((statistic) => (
          <Card key={statistic.title}>
            <h2 className="text-sm font-medium text-gray-500">
              {statistic.title}
            </h2>

            <p
              className={`mt-2 text-3xl font-bold ${statistic.valueClass}`}
            >
              {statistic.value}
            </p>
          </Card>
        ))}
      </section>

      {/* Plant List */}
      <section className="mt-10">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              My Plants
            </h2>

            <p className="text-sm text-gray-500">
              View the latest health information for your plants.
            </p>
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap gap-2">
            {["All", "Healthy", "Disease Detected"].map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setFilter(status)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  filter === status
                    ? "bg-green-600 text-white"
                    : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {filteredPlants.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPlants.map((plant) => {
              const isHealthy = plant.status === "Healthy";

              return (
                <Card key={plant.id}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {plant.name}
                      </h3>

                      <p className="mt-1 text-sm italic text-gray-500">
                        {plant.scientificName}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        isHealthy
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {plant.status}
                    </span>
                  </div>

                  <div className="mt-5 border-t border-gray-100 pt-4">
                    <p className="text-sm text-gray-500">
                      Last Scan
                    </p>

                    <p className="mt-1 font-medium text-gray-700">
                      {plant.lastScan}
                    </p>
                  </div>

                  <Button className="mt-5 w-full">
                    View Details
                  </Button>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card>
            <div className="py-8 text-center">
              <p className="font-medium text-gray-700">
                No plants found
              </p>

              <p className="mt-1 text-sm text-gray-500">
                There are no plants matching the selected filter.
              </p>
            </div>
          </Card>
        )}
      </section>
    </main>
  );
};

export default Dashboard;