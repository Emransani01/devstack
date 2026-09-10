import { useEffect, useState } from "react";
import Navbar from "./component/Nav";
import Hero from "./component/Hero";
import TechnologySection from "./component/TechnologySection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./component/Footer";
import technologiesData from "./data/technologies.json";

type Technology = {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState("");

  useEffect(() => {
    setTechnologies(technologiesData as Technology[]);
    setLoading(false);
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedStack.some(
      (item) => item.id === technology.id,
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedStack((previousStack) => [...previousStack, technology]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemoveFromStack = (id: number) => {
    const removedTechnology = selectedStack.find((item) => item.id === id);

    setSelectedStack((previousStack) =>
      previousStack.filter((item) => item.id !== id),
    );

    if (removedTechnology) {
      toast.success(`${removedTechnology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) {
      return;
    }

    setSelectedStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div>
      <Navbar />
      <Hero />

      {loading ? (
        <div className="flex min-h-[300px] items-center justify-center bg-slate-50">
          <div className="text-center">
            <span className="loading loading-spinner loading-lg text-pink-500"></span>

            <p className="mt-4 text-sm font-medium text-slate-600">
              Loading technologies...
            </p>
          </div>
        </div>
      ) : error ? (
        <div className="flex min-h-[300px] items-center justify-center bg-slate-50">
          <p className="text-sm font-medium text-red-500">{error}</p>
        </div>
      ) : (
        <TechnologySection
          technologies={technologies}
          selectedStack={selectedStack}
          onAddToStack={handleAddToStack}
          onRemove={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      )}

      <ToastContainer position="top-right" autoClose={2000} />
      <Footer />
    </div>
  );
}

export default App;
