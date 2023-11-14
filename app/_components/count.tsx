export default async function Count ({
    remaining
}: { 
    remaining: number
}){
    let remaining_number = 195 * remaining * 0.01

    return (
        <svg width="100" height="196" viewBox="0 0 100 196" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#rounded)">
                <rect y="0" width="100" height="195" rx="10" fill="white"/>
                <rect id="remaining" y={195-remaining_number} width="100" height={remaining_number} fill="black"/>
            </g>
            <defs>
            <clipPath id="rounded">
            <rect y="0" width="100" height="195" rx="10" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}
