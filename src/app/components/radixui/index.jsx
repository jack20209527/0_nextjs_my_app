// index.jsx
import * as React from "react";
import * as Popover from "@radix-ui/react-popover";

// const PopoverDemo = () => (
// 	<Popover.Root>
// 		<Popover.Trigger>More info</Popover.Trigger>
// 		<Popover.Portal>
// 			<Popover.Content>
// 				Some more info…
// 				<Popover.Arrow />
// 			</Popover.Content>
// 		</Popover.Portal>
// 	</Popover.Root>
// );

// export default PopoverDemo;


// index.jsx
// import * as React from "react";
// import { Popover } from "radix-ui";
// import "./styles.css";

const PopoverDemo = () => (
	<Popover.Root>
		<Popover.Trigger className="bg-red-600">Show info</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content className="bg-gray-600 p-4 rounded-md text-white">
				Some content
				<Popover.Arrow className="PopoverArrow" />
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
);



export default PopoverDemo;

