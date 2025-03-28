import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-3 w-1/4" />
      </div>
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <Skeleton className="h-6 w-1/3 mb-6" />
      <div className="h-[300px] flex items-center justify-center">
        <Skeleton className="h-[250px] w-full" />
      </div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <div className="flex items-center space-x-4 py-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="rounded-lg border shadow-sm">
      <div className="overflow-x-auto">
        <div className="p-4">
          <div className="flex items-center space-x-4 py-4">
            <Skeleton className="h-8 w-full" />
          </div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-4 py-4">
              <Skeleton className="h-6 w-[10%]" />
              <Skeleton className="h-6 w-[15%]" />
              <Skeleton className="h-6 w-[30%]" />
              <Skeleton className="h-6 w-[15%]" />
              <Skeleton className="h-6 w-[15%]" />
              <Skeleton className="h-6 w-[10%]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 