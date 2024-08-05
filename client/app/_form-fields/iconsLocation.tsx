import LocationIcon, {
  getLocationIconOptions,
} from "../_imageComponents/locationIcon";

export default function IconsLocation({ name }: { name: string }) {
  return (
    <div className="w-full px-2 rounded-lg justify-start items-center flex flex-row flex-wrap">
      {getLocationIconOptions().map((option) => (
        <label
          key={option}
          className="checked:fill-highlight-light flex flex-col items-center p-2 gap-1"
        >
          <input
            type="radio"
            name={name}
            id={option}
            value={option}
            className="hidden peer"
            defaultChecked={option === getLocationIconOptions()[0]}
          />
          <div className="flex peer-checked:fill-highlight-light transition-colors peer-default:checked:fill-highlight-light h-8 aspect-square">
            <LocationIcon icon={option} />
          </div>
        </label>
      ))}
    </div>
  );
}
