import Armor from '/public/icons/stats/armor.svg'

export default function HealthCircle ({
    params
  }: { 
    params: {
    health_max: number,
    health_lost: number,
    armor: number
  }}) {

    const health = params.health_max - params.health_lost
    const fraction = health/params.health_max

    return (
      <div className='health-circle'>
        <div>
            <h3>{health}</h3>
        </div>
        <Armor className='stats-icon'/>
        <h5>{params.armor}</h5>
      </div>
    )
  }