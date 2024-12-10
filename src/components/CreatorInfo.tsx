interface Creator {
  name: string
  role: string
}

interface CreatorInfoProps {
  creators: Creator[]
}

export default function CreatorInfo({ creators }: CreatorInfoProps) {
  return (
    <div className="flex flex-col items-center">
      {creators.map((creator) => (
        <div key={creator.name} className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">{creator.name}</h3>
          <p className="text-lg md:text-xl">{creator.role}</p>
        </div>
      ))}
    </div>
  )
}

