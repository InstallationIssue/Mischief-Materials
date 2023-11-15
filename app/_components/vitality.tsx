import Armor from '/public/icons/stats/armor.svg'

export default function HealthCircle ({
    params
  }: { 
    params: {
    health_max: number,
    health_lost: number,
    armor: number,
    dimensions: number
  }}) {

    const health = params.health_max - params.health_lost
    const fraction = health/params.health_max

    return (
      <div className='flex justify-center items-center h-full aspect-square relative bg-[--success-light]'>
        <div className='flex rounded-full aspect-square h-5/6 items-center justify-center bg-[--primary-light]'>
            <p>{health}</p>
        </div>
        <Armor className='z-10 absolute left-0 bottom-0 h-2/5 fill-primary-light'/>
        <p>{params.armor}</p>
      </div>
    )
  }