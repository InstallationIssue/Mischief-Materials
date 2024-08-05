import SizeIcon, { getSizeIconOptions } from "../_imageComponents/sizeIcon";

export default function IconsSize({ name }: { name: string }) {
  return (
    <div className="w-96 px-5 py-2.5 rounded-lg justify-between items-center flex flex-row flex-wrap">
      {getSizeIconOptions().map((option) => (
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
            defaultChecked={option === getSizeIconOptions()[0]}
          />
          <div className="flex peer-checked:fill-highlight-light transition-colors peer-default:checked:fill-highlight-light h-8 aspect-square">
            <SizeIcon icon={option} />
          </div>
        </label>
      ))}
    </div>
  );
}
