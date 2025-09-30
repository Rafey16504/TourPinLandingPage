const features = [
  {
    icon: "/key_features_4.png",
    title: "TourMap",
    description:
      "An interactive, emotion-driven map that lets users discover cultural events and geolocate memories by pinning photos and videos.",
  },
  {
    icon: "/key_features_3.png",
    title: "TourEvents",
    description:
      "Discover live cultural experiences, like concerts, festivals, and local shows. Allowing users to discover and purchase tickets.",
  },
  {
    icon: "/key_features_2.png",
    title: "TourFeed",
    description:
      "Where users share travel moments, photos, events, and memories, fostering a global community of travellers who discover, connect, and relive authentic experiences.",
  },
  {
    icon: "/key_features_1.png",
    title: "TourAlbum",
    description:
      "Feature that lets users create personalised physical photo albums from their geotagged travel memories, which are printed and shipped to their home.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative min-h-screen text-center py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-8">
        {/* Section header */}
        <h2 className="text-4xl font-bold text-black">
          KEY FEATURES
        </h2>

        {/* Feature grid */}
        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-4 space-y-10"
            >
              <img
                src={f.icon}
                alt={f.title}
                className="object-contain h-1/2 w-1/2"
              />
              <div className="space-y-8">
              <h3 className="text-2xl font-bold text-black bg-[#fceeff] py-1 px-2 rounded-md inline-block">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mx-auto">{f.description}</p>
            </div></div>
          ))}
        </div>
      </div>

     {/* Decorative wave graphics at bottom */}
<div className="absolute bottom-0 h-1/2 w-screen -z-10 flex">
  {/* Left wave */}
  <img
    src="/key_features_5.png"
    alt="Decorative wave right"
    className="w-1/2 xl:w-screen opacity-40 md:opacity-70 lg:opacity-100 scale-x-100 lg:scale-x-[101%]"
  />
  <img
    src="/key_features_5.png"
    alt="Decorative wave left"
    className="w-1/2  xl:w-screen opacity-40 md:opacity-70 lg:opacity-100 scale-x-[-100%] lg:scale-x-[-101%]"
  />

  {/* Right wave (mirrored + flipped) */}
  
</div>

    </section>
  );
}
