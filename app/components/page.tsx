import Button from "./button"
import AlertMonster from "./alert-monster"
import IcelandLupin from '/public/landscapes/Iceland-Lupin.svg'
import MistyValley from '/public/landscapes/Misty-Valley.svg'
import NeonCity from '/public/landscapes/Neon-City.svg'
import NightMountains from '/public/landscapes/Night-Mountains.svg'
import SunsetDesert from '/public/landscapes/Sunset-Desert.svg'

export default async function DesignSystem(){
    
    return (
        <div className="flex flex-col justify-around p-5 w-full">
            <div className="flex flex-row justify-between">
                <h1 className="font-mono font-bold text-3xl">Developed Foundations</h1>
            </div>

            <div className='flex flex-row'>
                <IcelandLupin/>
                <MistyValley/>
                <NeonCity/>
                <NightMountains/>
                <SunsetDesert/>
            </div>

            <div className="space-y-5 m-5">
                <Button text={"Button"}/>
                <hr/>
                <AlertMonster params={{
                    id: 1,
                    name: "The Throngler",
                    background: "Sea Beast",
                    health_max: 27,
                    health_lost: 0,
                    armor: 9,
                    str: 4,
                    dex: 2,
                    wil: 2,
                    size: "Colossal",
                    attack: 2
                }} />
                <hr/>
                <ul>
                    <li>element 1</li>
                    <li>element 1</li>
                    <li>element 1</li>
                    <li>element 1</li>
                </ul>
                <hr/>
                <table>
                    <tbody>
                        <tr>
                            <th>Col 1</th>
                        </tr>
                        <tr>
                            <td>el 1</td>
                        </tr>
                    </tbody>
                </table>
                <hr/>
                <h1>Header 1</h1>
                <h2>Header 2</h2>
                <h3>Header 3</h3>
                <h4>Header 4</h4>
                <h5>Header 5</h5>
                <h6>Header 6</h6>
                <p>Paragraph</p>
            </div>
        </div>
    )
}