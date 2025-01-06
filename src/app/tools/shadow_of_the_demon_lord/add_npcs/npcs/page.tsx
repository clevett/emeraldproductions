export default function Page() {
  return (
    <form className="grid gap-4">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
