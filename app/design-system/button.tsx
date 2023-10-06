export default function Button ({
    text
  }: { 
    text: string 
  }) {
    return (
        <button >
            <h4 id='name' className="w-1/6">(text)</h4>
        </button>
    )
}