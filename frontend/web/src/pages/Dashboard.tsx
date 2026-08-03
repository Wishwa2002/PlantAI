// src/pages/Dashboard.jsx

import { Card, Button } from "../components/common";

const Dashboard = () => {

  const plants = [
    {
      name: "Rose Plant",
      status: "Healthy",
      lastScan: "Today"
    },
    {
      name: "Tomato Plant",
      status: "Disease Detected",
      lastScan: "Yesterday"
    },
    {
      name: "Aloe Vera",
      status: "Healthy",
      lastScan: "3 days ago"
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Plant AI Dashboard 🌱
          </h1>

          <p className="text-gray-600">
            Monitor your plants and detect diseases using AI
          </p>
        </div>


        <Button>
          Scan New Plant
        </Button>

      </div>


      {/* Statistics */}
      <div className="grid gap-5 md:grid-cols-3">


        <Card>
          <h3 className="text-gray-500">
            Total Plants
          </h3>

          <p className="mt-2 text-3xl font-bold text-green-600">
            12
          </p>

        </Card>



        <Card>

          <h3 className="text-gray-500">
            Healthy Plants
          </h3>

          <p className="mt-2 text-3xl font-bold text-green-600">
            10
          </p>

        </Card>



        <Card>

          <h3 className="text-gray-500">
            Diseases Found
          </h3>

          <p className="mt-2 text-3xl font-bold text-red-600">
            2
          </p>

        </Card>


      </div>



      {/* Plant List */}

      <div className="mt-8">

        <h2 className="mb-4 text-2xl font-semibold">
          My Plants
        </h2>


        <div className="grid gap-5 md:grid-cols-3">


          {plants.map((plant,index)=>(

            <Card key={index}>

              <h3 className="text-xl font-semibold">
                {plant.name}
              </h3>


              <p className="mt-3">
                Status:

                <span
                  className={
                    plant.status === "Healthy"
                    ? "ml-2 text-green-600"
                    : "ml-2 text-red-600"
                  }
                >
                  {plant.status}
                </span>

              </p>



              <p className="mt-2 text-sm text-gray-500">
                Last Scan: {plant.lastScan}
              </p>



              <Button
                className="mt-4"
              >
                View Details
              </Button>


            </Card>

          ))}


        </div>

      </div>


    </div>
  );
};


export default Dashboard;