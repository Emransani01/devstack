import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

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

type TechnologySectionProps = {
  technologies: Technology[];
  selectedStack: Technology[];
  onAddToStack: (technology: Technology) => void;
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
};

const TechnologySection = ({
  technologies,
  selectedStack,
  onAddToStack,
  onRemove,
  onRemoveAll,
}: TechnologySectionProps) => {
  return (
    <section
      id="technologies"
      className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-pink-500">
            Technology Stack
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore the Technologies
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Discover modern tools and technologies to build your ideal
            development stack.
          </p>
        </div>

        {/* Technologies + Stack */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={selectedStack.some(
                  (item) => item.id === technology.id,
                )}
                onAddToStack={onAddToStack}
              />
            ))}
          </div>

          {/* Your Stack */}
          <YourStack
            selectedStack={selectedStack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
