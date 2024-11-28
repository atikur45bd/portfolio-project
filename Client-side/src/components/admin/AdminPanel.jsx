import { useEffect, useState } from "react";

const AdminPanel = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/contact");
        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }
        const data = await response.json();
        // Sort data to show latest messages first (based on MongoDB _id)
        const sortedData = data.sort((a, b) => (a._id < b._id ? 1 : -1));
        setContacts(sortedData);
      } catch (err) {
        setError(err.message);
      } 
    };

    fetchContacts();
  }, []);

  

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Admin Panel</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-violet-700 text-white">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id} className="hover:bg-indigo-500 text-white">
                <td className="border border-gray-300 px-4 py-2">
                  {contact.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {contact.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {contact.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
