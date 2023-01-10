import React from "react";

type HeadContext = {
  title?: string
}

export default function HeadData(props: HeadContext) {
  const {title} = props
  return (
    <>
      <title>{title ? `${title} | ` : ''}Meder Taab Illustration Portfolio</title>
      <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
      <meta
        name="description"
        content="Meder Taab's Portfolio of Illustration Works"
      ></meta>
    </>
  );
}
