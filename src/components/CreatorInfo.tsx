interface Creator {
  name: string
  role: string
  website?: string
}

interface CreatorInfoProps {
  creators: Creator[]
}

export default function CreatorInfo({ creators }: CreatorInfoProps) {
  return (
    <div className="flex flex-col items-center">
      {creators.map((creator) => (
        <div key={creator.name} className="text-center">
          {creator.website ? (
            <a
              href={creator.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block relative group"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300 group-hover:text-gray-600">
                {creator.name}
              </h3>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ) : (
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{creator.name}</h3>
          )}
          <p className="text-lg md:text-xl">{creator.role}</p>
        </div>
      ))}
    </div>
  )
}

