export function ClosetNew() {
  return (
    <div id="closet-new">
      <h1>Wardrobe Addition</h1>
      <form>
        <div>
          Name: <input type="text" />
        </div>
        <div>
          Image URL: <input type="text" />
        </div>
        <button type="submit">Add to closet</button>
      </form>
    </div>
  );
}
