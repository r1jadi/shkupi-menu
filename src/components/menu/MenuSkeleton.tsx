import { Skeleton } from "@/components/ui/skeleton";

export function MenuSkeleton() {
  return (
    <div className="space-y-8 pt-4">
      <div>
        <Skeleton className="h-8 w-40 mb-5" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-4 p-4 bg-card rounded-xl border border-border mb-4">
            <div className="flex-1 space-y-3">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <Skeleton className="w-20 h-20 rounded-lg shrink-0" />
          </div>
        ))}
      </div>
      <div>
        <Skeleton className="h-8 w-32 mb-5" />
        {[1, 2].map((i) => (
          <div key={i} className="flex gap-4 p-4 bg-card rounded-xl border border-border mb-4">
            <div className="flex-1 space-y-3">
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
