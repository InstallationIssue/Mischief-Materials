import Weak from "/public/icons/beings/size-1.svg";
import Typical from "/public/icons/beings/size-2.svg";
import Tough from "/public/icons/beings/size-3.svg";
import Hulking from "/public/icons/beings/size-4.svg";
import Colossal from "/public/icons/beings/size-5.svg";
import Gargantuan from "/public/icons/beings/size-final.svg";

export default function IconsSize({ id }: { id: string }) {
  return (
    <div className="w-full px-5 py-2.5 rounded-lg justify-between items-center inline-flex">
      <fieldset className="flex flex-row h-min justify-between w-full">
        <span>
          <input type="radio" id="size_1" name="size" className="hidden" />
          <label htmlFor="size_1" className="text-center cursor-pointer">
            <div className="flex flex-col gap-2">
              <Weak className="icon h-20" />
              <p>Weak</p>
            </div>
          </label>
        </span>
        <span>
          <input type="radio" id="size_2" name="size" className="hidden" />
          <label htmlFor="size_1" className="text-center cursor-pointer">
            <div className="flex flex-col gap-2">
              <Typical className="icon h-20" />
              <p>Typical</p>
            </div>
          </label>
        </span>
        <span>
          <input type="radio" id="size_3" name="size" className="hidden" />
          <label htmlFor="size_1" className="text-center cursor-pointer">
            <div className="flex flex-col gap-2">
              <Tough className="icon h-20" />
              <p>Tough</p>
            </div>
          </label>
        </span>
        <span>
          <input type="radio" id="size_4" name="size" className="hidden" />
          <label htmlFor="size_1" className="text-center cursor-pointer">
            <div className="flex flex-col gap-2">
              <Hulking className="icon h-20" />
              <p>Hulking</p>
            </div>
          </label>
        </span>
        <span>
          <input type="radio" id="size_5" name="size" className="hidden" />
          <label htmlFor="size_1" className="text-center cursor-pointer">
            <div className="flex flex-col gap-2">
              <Colossal className="icon h-20" />
              <p>Colossal</p>
            </div>
          </label>
        </span>
        <span>
          <input type="radio" id="size_6" name="size" className="hidden" />
          <label htmlFor="size_1" className="text-center cursor-pointer">
            <div className="flex flex-col gap-2">
              <Gargantuan className="icon h-20" />
              <p>Gargantuan</p>
            </div>
          </label>
        </span>
      </fieldset>
    </div>
  );
}
