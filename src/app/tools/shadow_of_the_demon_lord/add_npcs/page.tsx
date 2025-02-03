import { addNpc } from "@/actions";
import { Button } from "@/components";

export default function Page() {
  return (
    <form className="grid gap-4" action={addNpc}>
      <h1 className="text-3xl">Add NPCs</h1>
      <div className="grid grid-flow-col gap-6">
        <label>
          Name:
          <input type="text" aria-label="name" name="name" placeholder="name" />
        </label>

        <label>
          Difficulty:
          <input
            aria-label="difficulty"
            name="difficulty"
            placeholder="difficulty"
            type="number"
          />
        </label>
      </div>

      <label>
        Descriptor:
        <input
          aria-label="descriptor"
          name="descriptor"
          placeholder="descriptor"
          type="text"
        />
      </label>
      <label>
        Source:
        <input
          aria-label="source"
          name="source"
          placeholder="source"
          type="text"
        />
      </label>
      <Button type="submit">Add</Button>
    </form>
  );
}
