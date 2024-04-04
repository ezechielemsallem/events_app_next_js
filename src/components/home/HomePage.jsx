import Link from "next/link"
import Image from "next/image"

export const HomePage = ({data}) => {
    return (
    <main >
        {data?.map((event) =>
        <Link key={event.id} href={`/events/${event.id}`}> 
          <Image 
          src={event.image} 
          alt={event.title}
          width={200}
          height={200}
          />
          <h2>{event.title}</h2>
          <p> {event.description}</p>
        </Link>
        )}
       
        
      </main>
    )
}