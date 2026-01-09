import React from "react";

// const Props = {
//   children: React.ReactNode;
// };

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h4>Home layout</h4>
      {children}
    </>
  );
}
