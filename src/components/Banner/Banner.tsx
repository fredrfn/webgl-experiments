import * as React from "react";
import "./Banner.scss";

interface BannerProps {
  name: string;
}

export default function Banner(props: BannerProps) {
  const { name } = props;
  return (
    <div className="banner">
      <span className="banner__text">Hello {name}!</span>
    </div>
  );
}
