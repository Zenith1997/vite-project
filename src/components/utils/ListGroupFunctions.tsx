import { MouseEvent, useState } from "react";

const message = (items: string[]) => {
  return items.length === 0 && "Item not found";
};

const list = (items: string[], L: Boolean) => {
  const [selectedIndex, setIndex] = useState(-1);
  return items.map((item, index) => {
    const Tag = L ? "li" : "p"; // Dynamically choose the tag (li or p)
    const className =
      selectedIndex === index
        ? L
          ? "list-group-item active"
          : "bg-success"
        : L
        ? "list-group-item"
        : "";

    return (
      <Tag
        key={item}
        className={className}
        onClick={(event: React.MouseEvent) => {
          console.log(index);
          setIndex(index);
        }}
      >
        {item}
      </Tag>
    );
  });
};


export { message, list };




// const list = (items: string[], L: Boolean) => {
//   return items.map((item, index) =>
//     !L ? (
//       <li
//         className={
//           selectedIndex === index ? "list-group-item active" : "list-group-item"
//         }
//         key={item}
//         onClick={(event) => handleClick(event, index)}
//       >
//         {item}
//       </li>
//     ) : (
//       <p
//         className={selectedIndex===index?"bg-success ":}
//         key={item}
//         onClick={(event) => handleClick(event, index)}
//       >
//         {item}
//       </p>
//     )
//   );
// };

// const listL = (items: string[]) => {
//   return items.map((item, index) => (
//     <p
//       key={item}
//       onClick={(event) => handleClick(event, index)}
//       className={
//         selectedIndex === index ? "list-group-item active" : "list-group-item"
//       }
//     >
//       {item}
//     </p>
//   ));
// };

// Render the list items using map function.
