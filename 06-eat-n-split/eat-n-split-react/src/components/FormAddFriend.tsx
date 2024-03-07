import { Button } from "./Button";

export function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="friend-name">👭 Friend name</label>
      <input id="friend-name" type="text" />

      <label htmlFor="friend-img">🗿 Image URL</label>
      <input id="friend-img" type="text" />

      <Button>Add</Button>
    </form>
  )
}
