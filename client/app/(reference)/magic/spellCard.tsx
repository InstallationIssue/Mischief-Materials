export default async function SpellCard({
  id,
  name,
  description,
}: {
  id: number;
  name: string;
  description: string;
}) {
  return (
    <div className="border rounded-md p-1 w-fit">
      <p className="font-header">{name}</p>
    </div>
  );
}
