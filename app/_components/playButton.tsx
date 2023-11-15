import Link from 'next/link'
import Play from '/public/icons/system/action-play.svg'

export function PlayButton ({
    scenario
}: {
    scenario: string
}
) {
    return (
        <Link className="flex flex-row items-center rounded-full h-2/3 py-2 px-3 gap-2 bg-secondary-light transition active:text-highlight-light active:fill-highlight-light" href={'/play'}>
            <p className='line-clamp-1 leading-loose'>{scenario}</p>
            <Play className="h-full"/>
        </Link>
    )
}
    
