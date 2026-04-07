interface CinematicDividerProps {
  image: string;
  alt: string;
}

export function CinematicDivider({ image, alt }: CinematicDividerProps) {
  return (
    <div className="relative w-full h-48 md:h-72 lg:h-96 overflow-hidden">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        width={1344}
        height={768}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
    </div>
  );
}
