import Switch from "./switch";

export default function SwitchField({ id }: { id: string }) {
  return (
    <div className="w-fit px-5 py-2.5 bg-primary-dark-grey rounded-lg justify-start items-center gap-2.5 inline-flex">
      <span className="capitalize font-header">{id}</span>
      <Switch />
    </div>
  );
}
