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

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAddToStack: (technology: Technology) => void;
};

const TechnologyCard = ({
  technology,
  isAdded,
  onAddToStack,
}: TechnologyCardProps) => {
  return (
    <div
      className={`rounded-2xl p-px transition duration-300 ${
        isAdded
          ? "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <article
        className={`group flex h-full flex-col rounded-[15px] bg-white p-5 transition duration-300 ${
          isAdded
            ? "shadow-lg"
            : "border border-slate-200 hover:-translate-y-1 hover:shadow-xl"
        }`}
      >
        {/* Top */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 p-3">
            <img
              src={technology.icon}
              alt={`${technology.name} logo`}
              className="h-full w-full object-contain"
            />
          </div>

          <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
            {technology.badge}
          </span>
        </div>

        {/* Content */}
        <div className="mt-5 flex-1">
          <h3 className="text-xl font-bold text-slate-900">
            {technology.name}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            {technology.description}
          </p>
        </div>

        {/* Category + Difficulty */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {technology.category}
          </span>

          <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600">
            {technology.difficulty}
          </span>
        </div>

        {/* Rating */}
        <div className="mt-5 flex items-center gap-2">
          <span className="text-sm text-amber-500">★</span>

          <span className="text-sm font-semibold text-slate-700">
            {technology.rating}
          </span>

          <span className="text-xs text-slate-400">/ 5.0</span>
        </div>

        {/* Add Button */}
        <button
          type="button"
          disabled={isAdded}
          onClick={() => onAddToStack(technology)}
          className={`mt-5 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
            isAdded
              ? "cursor-not-allowed bg-slate-100 text-slate-400"
              : "gradient-primary text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </article>
    </div>
  );
};

export default TechnologyCard;
