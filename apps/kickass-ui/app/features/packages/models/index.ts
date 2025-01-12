export type PackageStat = Readonly<{
    type: "stars" | "downloads" | "contributors";
    value: number;
}>;

export type Package = Readonly<{
    id: number;
    title: React.ReactNode;
    description: React.ReactNode;
    stats: Array<PackageStat>;
}>;
