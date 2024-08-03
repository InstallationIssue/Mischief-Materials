import AlertMonster from "./alertMonster";
import IcelandLupin from "/public/landscapes/Iceland-Lupin.svg";
import MistyValley from "/public/landscapes/Misty-Valley.svg";
import NeonCity from "/public/landscapes/Neon-City.svg";
import NightMountains from "/public/landscapes/Night-Mountains.svg";
import SunsetDesert from "/public/landscapes/Sunset-Desert.svg";

export default function DesignSystem() {
  return (
    <div className="flex flex-col justify-around p-5 w-full">
      <div className="flex flex-row justify-between">
        <p className="">Design System</p>
      </div>

      <div className="flex flex-row">
        <IcelandLupin />
        <MistyValley />
        <NeonCity />
        <NightMountains />
        <SunsetDesert />
      </div>

      <div className="space-y-5 m-5">
        <AlertMonster
          params={{
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
            attack: 2,
          }}
        />
        <hr />
        <ul>
          <li>element 1</li>
          <li>element 1</li>
          <li>element 1</li>
          <li>element 1</li>
        </ul>
        <hr />
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
        <hr />
        <p>Header 1</p>
        <p>Header 2</p>
        <p>Header 3</p>
        <p>Header 4</p>
        <p>Header 5</p>
        <p>Header 6</p>
        <p>Paragraph</p>
      </div>
    </div>
  );
}
