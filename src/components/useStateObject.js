import React, { useState } from "react";

function useStateObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <label>Firstname</label>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <label>lastname</label>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />

      {name.firstName}
      {name.lastName}
    </div>
  );
}

export default useStateObject;
