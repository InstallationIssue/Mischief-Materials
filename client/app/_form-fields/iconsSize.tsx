import SizeIcon, { getSizeIconOptions } from "../_imageComponents/sizeIcon";

export default function IconsSize({ name }: { name: string }) {
  return (
    <div className="w-full px-5 rounded-lg flex flex-row flex-wrap justify-between h-16">
      {getSizeIconOptions().map((option) => (
        <label key={option} className="flex h-full">
          <input
            type="radio"
            name={name}
            id={option}
            value={option}
            className="hidden peer"
            defaultChecked={option === getSizeIconOptions()[0]}
          />
          <span
            className="flex h-full aspect-square transition-colors rounded-md p-2 justify-center
          peer-checked:fill-highlight-light peer-checked:bg-secondary-dark peer-default:checked:fill-highlight-light 
          "
          >
            <SizeIcon icon={option} />
          </span>
        </label>
      ))}
    </div>
  );
}
