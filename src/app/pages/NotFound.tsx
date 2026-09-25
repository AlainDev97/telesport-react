import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-4 md:p-8 flex justify-center items-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <p role="alert" className="mb-4 text-4xl">
          La page demandée est introuvable.
        </p>

        <Link to="/" className="text-blue-400 underline text-1xl">
          Retour au Dashboard
        </Link>
      </div>
    </main>
  );
};
