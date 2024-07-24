import React from "react";

export default function Page({ params }: any) {
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
}
