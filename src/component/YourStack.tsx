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

type YourStackProps = {
  selectedStack: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
};

const YourStack = ({
  selectedStack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>

          <p className="mt-1 text-sm text-slate-500">
            {selectedStack.length} Technology Selected
          </p>
        </div>

        {selectedStack.length > 0 && (
          <button
            type="button"
            onClick={onRemoveAll}
            className="text-xs font-semibold text-pink-500 transition hover:text-pink-600"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty State */}
      {selectedStack.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl text-slate-400 shadow-sm">
            +
          </div>

          <h3 className="mt-4 text-sm font-semibold text-slate-800">
            Your stack is empty
          </h3>

          <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-slate-500">
            Add technologies from the list to build your development stack.
          </p>
        </div>
      ) : (
        /* Selected Technologies */
        <div className="mt-6 space-y-3">
          {selectedStack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-2">
                <img
                  src={technology.icon}
                  alt={`${technology.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-slate-800">
                  {technology.name}
                </h3>

                <p className="mt-0.5 text-xs text-slate-500">
                  {technology.category}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white hover:text-pink-500"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default YourStack;
