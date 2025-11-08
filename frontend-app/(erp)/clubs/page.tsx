import React, { useEffect, useState } from "react";
import ERPLayout from "../../components/layout/ERPLayout";

interface Club {
  id: number;
  name: string;
  description: string;
  members: number;
}

const ClubsPage: React.FC = () => {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchClubs = async () => {
      setLoading(true);
      try {
        // Replace with real API call
        const data: Club[] = [
          { id: 1, name: "Coding Club", description: "Learn and share coding skills", members: 25 },
          { id: 2, name: "Art Club", description: "Explore your creativity", members: 15 },
          { id: 3, name: "Music Club", description: "Jam sessions and music events", members: 20 },
        ];
        setClubs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  return (
    <ERPLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Clubs</h1>

        {loading ? (
          <p>Loading clubs...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clubs.map((club) => (
              <div key={club.id} className="border border-gray-300 p-4 rounded shadow hover:shadow-lg transition">
                <h2 className="text-xl font-semibold mb-2">{club.name}</h2>
                <p className="mb-2">{club.description}</p>
                <p className="text-gray-600 font-medium">Members: {club.members}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </ERPLayout>
  );
};

export default ClubsPage;
